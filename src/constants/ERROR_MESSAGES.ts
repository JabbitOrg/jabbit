export const ERROR_MESSAGES = {
  // Common
  '400': '잘못된 요청입니다.',
  '401': '인증이 필요합니다.',
  '403': '접근이 금지되었습니다.',
  '404': '찾을 수 없는 페이지입니다.',
  '500': '서버 오류가 발생했습니다.',
  NETWORK_ERROR: '네트워크 오류가 발생했습니다.',
  UNKNOWN_ERROR: '알 수 없는 오류가 발생했습니다.',

  // Auth
  'auth/failed-to-get-access-token': '액세스 토큰 발급에 실패했습니다.',
  'auth/no-code': '인증 코드를 받지 못했습니다.',
  'auth/invalid-token': '유효하지 않은 토큰입니다.',
} as const;

export type ErrorCode = keyof typeof ERROR_MESSAGES;
