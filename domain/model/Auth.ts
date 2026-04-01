export interface TokenData {
  token: string;
  expiration: string;
}

export interface AuthResponse {
  accessToken: TokenData;
  refreshToken: TokenData;
}