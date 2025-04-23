import { getAccessToken, getUserInfo } from '@/src/client/utils/auth';
import { createJwtToken } from '@/src/client/utils/jwt';
import {
  createErrorApiResponse,
  createSuccessApiResponse,
} from '@/src/server/utils/apiResponseUtils';
import readAllUsers from '@/src/client/lib/api/readAllUsers';
import createUser from '@/src/client/lib/api/createUser';
export async function GET(req: Request) {
  const url = new URL(req.url);
  const code = url.searchParams.get('code');
  const state = url.searchParams.get('state');

  if (!code || !state) {
    return createErrorApiResponse('BAD_REQUEST_ERROR');
  }

  try {
    // 인증 코드로 access_token 요청
    await fetch('https://nid.naver.com', { method: 'HEAD' }).catch(() => {});
    const tokenData = await getAccessToken(code, 'NAVER', state);
    if (!tokenData.access_token) {
      return createErrorApiResponse('BAD_REQUEST_ERROR');
    }

    // access_token으로 사용자 정보 요청
    const userData = await getUserInfo(tokenData.access_token, 'NAVER');
    if (userData.message !== 'success') {
      return createErrorApiResponse('BAD_REQUEST_ERROR');
    }

    // 사용자 정보 조회
    const userReadResponse = await readAllUsers();
    const isUserExist = userReadResponse.find(
      (user: any) => user.provider_id === userData.response.id,
    );

    if (!isUserExist) {
      // 사용자 정보가 없으면 생성
      await createUser({
        provider_id: userData.response.id,
        provider: 'NAVER',
        email: userData.response.email,
      });
    }

    // JWT 토큰 생성
    const jwtToken = createJwtToken({
      id: userData.response.id,
      provider: 'NAVER',
    });

    return createSuccessApiResponse('READ_SUCCESS', {
      id: userData.response.id,
      provider: 'NAVER',
      token: jwtToken,
    });
  } catch {
    return createErrorApiResponse('UNKNOWN_ERROR');
  }
}
