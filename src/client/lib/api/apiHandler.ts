import { AI_API_URL } from '@/src/client/constants/API';
import { getAccessToken } from '@/src/client/utils/token';
import { useAuthStore } from '@/src/client/store/authStore';
import { usePWAStore } from '@/src/client/store/pwaStore';
import { deleteJwtToken } from '@/src/client/lib/api/deleteJwt';

interface RequestOptions extends RequestInit {
  body?: any;
}

const getHeaders = async (): Promise<HeadersInit> => {
  const accessToken = await getAccessToken();
  return {
    'Content-Type': 'application/json',
    ...(accessToken ? { Authorization: `Bearer ${accessToken}` } : {}),
  };
};

const handleUnauthorized = async () => {
  const { logout } = useAuthStore.getState();
  const isPwa = usePWAStore.getState().isPwa;
  try {
    await deleteJwtToken();
  } catch (error) {
    console.error(error);
  } finally {
    logout();
    window.location.href = isPwa ? '/ai/login' : '/login';
  }
};

const handleResponse = async <T>(response: Response): Promise<T> => {
  if (!response.ok) {
    if (response.status === 401) {
      handleUnauthorized();
      throw new Error('Unauthorized access');
    }
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  return response.json();
};

const request = async <T>(
  method: string,
  endpoint: string,
  data?: any,
  options: RequestOptions = {},
): Promise<T> => {
  const headers = await getHeaders();
  const fetchOptions: RequestInit = {
    method,
    headers,
    ...options,
  };

  if (data) {
    fetchOptions.body = JSON.stringify(data);
  }

  const response = await fetch(`${AI_API_URL}${endpoint}`, fetchOptions);
  return handleResponse<T>(response);
};

export const apiHandler = {
  get: <T>(endpoint: string, options?: RequestOptions) =>
    request<T>('GET', endpoint, undefined, options),

  post: <T>(endpoint: string, data?: any, options?: RequestOptions) =>
    request<T>('POST', endpoint, data, options),

  put: <T>(endpoint: string, data?: any, options?: RequestOptions) =>
    request<T>('PUT', endpoint, data, options),

  patch: <T>(endpoint: string, options?: RequestOptions) =>
    request<T>('PATCH', endpoint, undefined, options),

  delete: <T>(endpoint: string, options?: RequestOptions) =>
    request<T>('DELETE', endpoint, undefined, options),
};
