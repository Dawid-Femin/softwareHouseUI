'use client';

import { createContext, useCallback, useContext, useEffect, useRef, useState } from 'react';
import { type AuthTokens, authApi } from '@/lib/auth';

const REFRESH_KEY = 'refreshToken';

interface JwtUser {
  id: string;
  email: string;
  role: 'admin' | 'client';
}

function decodeJwt(token: string): JwtUser | null {
  try {
    const payload = JSON.parse(atob(token.split('.')[1]));
    return { id: payload.sub, email: payload.email, role: payload.role };
  } catch {
    return null;
  }
}

interface AuthState {
  accessToken: string | null;
  user: JwtUser | null;
  isLoading: boolean;
}

interface AuthContextValue extends AuthState {
  login: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextValue | null>(null);

function tokensToState(tokens: AuthTokens): AuthState {
  return {
    accessToken: tokens.accessToken,
    user: decodeJwt(tokens.accessToken),
    isLoading: false,
  };
}

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [state, setState] = useState<AuthState>({ accessToken: null, user: null, isLoading: true });
  const refreshTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const scheduleRefresh = useCallback((token: string, delayMs = 14 * 60 * 1000) => {
    if (refreshTimer.current) clearTimeout(refreshTimer.current);
    refreshTimer.current = setTimeout(async () => {
      try {
        const tokens = await authApi.refresh(token);
        localStorage.setItem(REFRESH_KEY, tokens.refreshToken);
        setState(tokensToState(tokens));
        scheduleRefresh(tokens.refreshToken);
      } catch {
        setState({ accessToken: null, user: null, isLoading: false });
        localStorage.removeItem(REFRESH_KEY);
      }
    }, delayMs);
  }, []);

  useEffect(() => {
    const stored = localStorage.getItem(REFRESH_KEY);
    if (!stored) {
      setState({ accessToken: null, user: null, isLoading: false });
      return;
    }
    authApi
      .refresh(stored)
      .then((tokens) => {
        localStorage.setItem(REFRESH_KEY, tokens.refreshToken);
        setState(tokensToState(tokens));
        scheduleRefresh(tokens.refreshToken);
      })
      .catch(() => {
        localStorage.removeItem(REFRESH_KEY);
        setState({ accessToken: null, user: null, isLoading: false });
      });
    return () => {
      if (refreshTimer.current) clearTimeout(refreshTimer.current);
    };
  }, [scheduleRefresh]);

  const login = useCallback(
    async (email: string, password: string) => {
      const tokens = await authApi.login(email, password);
      localStorage.setItem(REFRESH_KEY, tokens.refreshToken);
      setState(tokensToState(tokens));
      scheduleRefresh(tokens.refreshToken);
    },
    [scheduleRefresh]
  );

  const logout = useCallback(async () => {
    if (state.accessToken) {
      await authApi.logout(state.accessToken).catch(() => {});
    }
    if (refreshTimer.current) clearTimeout(refreshTimer.current);
    localStorage.removeItem(REFRESH_KEY);
    setState({ accessToken: null, user: null, isLoading: false });
  }, [state.accessToken]);

  return (
    <AuthContext.Provider value={{ ...state, login, logout }}>{children}</AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth must be used within AuthProvider');
  return ctx;
}
