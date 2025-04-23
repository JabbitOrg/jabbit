import { createJwtToken } from '@/src/client/utils/jwt';
import { getAccessToken, getUserInfo } from '@/src/client/utils/auth';
import {
  createErrorApiResponse,
  createSuccessApiResponse,
} from '@/src/server/utils/apiResponseUtils';
import createUser from '@/src/client/lib/api/createUser';
import readAllUsers from '@/src/client/lib/api/readAllUsers';
export async function GET(req: Request) {
  const url = new URL(req.url);
  const code = url.searchParams.get('code');

  if (!code) {
    return createErrorApiResponse('BAD_REQUEST_ERROR');
  }

  try {
    // 인증 코드로 access_token 요청
    const tokenData = await getAccessToken(code, 'KAKAO');
    if (!tokenData.access_token) {
      return createErrorApiResponse('BAD_REQUEST_ERROR');
    }

    // access_token으로 사용자 정보 요청
    const userData = await getUserInfo(tokenData.access_token, 'KAKAO');
    if (!userData.id) {
      return createErrorApiResponse('BAD_REQUEST_ERROR');
    }

    // 사용자 정보 조회
    const userReadResponse = await readAllUsers();
    const isUserExist = userReadResponse.find(
      (user: any) => user.provider_id == userData.id,
    );

    if (!isUserExist) {
      // 사용자 정보가 없으면 생성
      await createUser({
        provider_id: userData.id,
        provider: 'KAKAO',
        email: userData.kakao_account.email,
      });
    }

    // JWT 토큰 생성
    const jwtToken = createJwtToken({
      id: userData.id,
      provider: 'KAKAO',
    });

    return createSuccessApiResponse('READ_SUCCESS', {
      id: userData.id,
      provider: 'KAKAO',
      token: jwtToken,
    });
  } catch {
    return createErrorApiResponse('UNKNOWN_ERROR');
  }
}
