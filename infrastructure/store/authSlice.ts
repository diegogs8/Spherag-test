import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AuthResponse } from '../../domain/model/Auth';

interface AuthState {
  accessToken: string | null;
  refreshToken?: string | null;
  isAuthenticated: boolean;
}

const initialState: AuthState = {
  accessToken: null,
  refreshToken: null,
  isAuthenticated: false,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAuthData: (state, action: PayloadAction<AuthResponse>) => {
      state.accessToken = action.payload.accessToken.token;
      state.refreshToken = action.payload.refreshToken.token;
      state.isAuthenticated = true;
    },
    restoreSession: (state, action: PayloadAction<{ accessToken: string; refreshToken: string }>) => {
      state.accessToken = action.payload.accessToken;
      state.refreshToken = action.payload.refreshToken;
      state.isAuthenticated = true;
    },
    logout: (state) => {
      state.accessToken = null;
      state.refreshToken = null;
      state.isAuthenticated = false;
    },
  },
});

export const { setAuthData, restoreSession, logout } = authSlice.actions;
export default authSlice.reducer;