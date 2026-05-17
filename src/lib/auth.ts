import { apiFetch } from './api';

export interface AuthTokens {
  accessToken: string;
  refreshToken: string;
}

export const authApi = {
  login: (email: string, password: string) =>
    apiFetch<AuthTokens>('/auth/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
    }),

  refresh: (refreshToken: string) =>
    apiFetch<AuthTokens>('/auth/refresh', {
      method: 'POST',
      token: refreshToken,
    }),

  logout: (accessToken: string) =>
    apiFetch<void>('/auth/logout', {
      method: 'POST',
      token: accessToken,
    }),
};
