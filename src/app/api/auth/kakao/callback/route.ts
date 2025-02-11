import { NextResponse } from 'next/server';
import { createJwtToken } from '@/src/utils/jwt';
import { getAccessToken, getUserInfo } from '@/src/utils/auth';
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
    const tokenData = await getAccessToken(code, 'KAKAO');
    if (!tokenData.access_token) {
      return NextResponse.redirect(
        new URL('/login?error=Failed_to_get_access_token', req.url),
      );
    }

    // access_token으로 사용자 정보 요청
    const userData = await getUserInfo(tokenData.access_token, 'KAKAO');

    // JWT 토큰 생성
    const jwtToken = createJwtToken({
      id: userData.id,
      provider: 'KAKAO',
    });

    return NextResponse.json({
      success: true,
      id: userData.id,
      provider: 'KAKAO',
      token: jwtToken,
    });
  } catch (error) {
    return NextResponse.json(
      { error: 'Server error', details: error },
      { status: 500 },
    );
  }
}
