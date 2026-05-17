import { apiFetch } from './api';

export interface AuthTokens {
  accessToken: string;
  refreshToken: string;
}

export interface UserDto {
  id: string;
  email: string;
  role: 'admin' | 'client';
  createdAt: string;
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

  register: (email: string, password: string, role: 'admin' | 'client', token: string) =>
    apiFetch<UserDto>('/auth/register', {
      method: 'POST',
      body: JSON.stringify({ email, password, role }),
      token,
    }),
};

export const usersApi = {
  getAll: (token: string) => apiFetch<UserDto[]>('/users', { token }),
};
