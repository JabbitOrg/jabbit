import { NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';

const KAKAO_TOKEN_URL = 'https://kauth.kakao.com/oauth/token';
const KAKAO_USER_INFO_URL = 'https://kapi.kakao.com/v2/user/me';
const JWT_SECRET = process.env.JWT_SECRET || '';

export async function GET(req: Request) {
  const url = new URL(req.url);
  const code = url.searchParams.get('code');

  if (!code) {
    return NextResponse.redirect(
      new URL('/login?error=No_authorization_code_provided', req.url),
    );
  }

  try {
    // 인증 코드로 access_token 요청
    const tokenResponse = await fetch(KAKAO_TOKEN_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams({
        grant_type: 'authorization_code',
        client_id: process.env.KAKAO_CLIENT_ID!,
        client_secret: process.env.KAKAO_CLIENT_SECRET!,
        redirect_uri: process.env.KAKAO_REDIRECT_URI!,
        code,
      }),
    });

    const tokenData = await tokenResponse.json();
    if (!tokenData.access_token) {
      return NextResponse.redirect(
        new URL('/login?error=Failed_to_get_access_token', req.url),
      );
    }

    // access_token으로 사용자 정보 요청
    const userResponse = await fetch(KAKAO_USER_INFO_URL, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${tokenData.access_token}`,
      },
    });
    const userData = await userResponse.json();

    console.log(userData);

    // JWT 토큰 생성
    const jwtToken = jwt.sign(
      {
        id: userData.id,
        provider: 'kakao',
      },
      JWT_SECRET,
      { expiresIn: '3d' }, // 토큰 만료 기간
    );

    return NextResponse.json({
      success: true,
      id: userData.id,
      provider: 'kakao',
      token: jwtToken,
    });
  } catch (error) {
    return NextResponse.json(
      { error: 'Server error', details: error },
      { status: 500 },
    );
  }
}
