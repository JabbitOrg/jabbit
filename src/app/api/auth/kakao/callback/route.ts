import { NextResponse } from 'next/server';
import { createJwtToken } from '@/src/utils/jwt';
import { getAccessToken, getUserInfo } from '@/src/utils/auth';

export async function GET(req: Request) {
  const url = new URL(req.url);
  const code = url.searchParams.get('code');

  if (!code) {
    return NextResponse.json(
      { success: false, error: 'auth/no-code' },
      { status: 400 },
    );
  }

  try {
    // 인증 코드로 access_token 요청
    const tokenData = await getAccessToken(code, 'KAKAO');
    if (!tokenData.access_token) {
      return NextResponse.json(
        { success: false, error: 'auth/failed-to-get-access-token' },
        { status: 400 },
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
  } catch {
    return NextResponse.json({ success: false, error: '500' }, { status: 500 });
  }
}
