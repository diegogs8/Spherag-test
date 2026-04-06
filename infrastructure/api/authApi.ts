import { AuthResponse } from "../../domain/model/Auth";
import { httpClient } from "./httpClient";

export interface LoginCredentials {
  username: string;
  password: string;
}

export const login = async (credentials: LoginCredentials): Promise<AuthResponse> => {
  const response = await httpClient.post<AuthResponse>(
    'https://api.spherag.com/Authentication/Login',
    credentials
  );
  
  return response.data;
};