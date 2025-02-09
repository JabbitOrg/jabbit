import { NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';

const NAVER_TOKEN_URL = 'https://nid.naver.com/oauth2.0/token';
const NAVER_USER_INFO_URL = 'https://openapi.naver.com/v1/nid/me';
const JWT_SECRET = process.env.JWT_SECRET || '';

export async function GET(req: Request) {
  const url = new URL(req.url);
  const code = url.searchParams.get('code');
  const state = url.searchParams.get('state');

  if (!code || !state) {
    return NextResponse.redirect(
      new URL('/login?error=No_authorization_code_provided', req.url),
    );
  }

  try {
    // 인증 코드로 access_token 요청
    const tokenResponse = await fetch(NAVER_TOKEN_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams({
        grant_type: 'authorization_code',
        client_id: process.env.NAVER_CLIENT_ID!,
        client_secret: process.env.NAVER_CLIENT_SECRET!,
        redirect_uri: process.env.NAVER_REDIRECT_URI!,
        code,
        state,
      }),
    });

    const tokenData = await tokenResponse.json();
    if (!tokenData.access_token) {
      return NextResponse.redirect(
        new URL('/login?error=Failed_to_get_access_token', req.url),
      );
    }

    // access_token으로 사용자 정보 요청
    const userResponse = await fetch(NAVER_USER_INFO_URL, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${tokenData.access_token}`,
      },
    });
    const userData = await userResponse.json();
    // JWT 토큰 생성
    const jwtToken = jwt.sign(
      {
        id: userData.response.id,
        provider: 'naver',
      },
      JWT_SECRET,
      { expiresIn: '3d' }, // 토큰 만료 기간
    );

    return NextResponse.json({
      success: true,
      id: userData.response.id,
      provider: 'naver',
      token: jwtToken,
    });
  } catch (error) {
    return NextResponse.json(
      { error: 'Server error', details: error },
      { status: 500 },
    );
  }
}
