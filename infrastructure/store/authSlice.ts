import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AuthResponse } from '../../domain/model/Auth';

interface AuthState {
  accessToken: string | null;
  isAuthenticated: boolean;
}

const initialState: AuthState = {
  accessToken: null,
  isAuthenticated: false,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAuthData: (state, action: PayloadAction<AuthResponse>) => {
      state.accessToken = action.payload.accessToken.token;
      state.isAuthenticated = true;
    },
    logout: (state) => {
      state.accessToken = null;
      state.isAuthenticated = false;
    },
  },
});

export const { setAuthData, logout } = authSlice.actions;
export default authSlice.reducer;