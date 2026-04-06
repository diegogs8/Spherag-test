import { useMutation } from '@tanstack/react-query';
import { AuthResponse } from '../../domain/model/Auth';
import { LoginCredentials, login } from '../../infrastructure/api/authApi';

export const useLoginMutation = () => {
  return useMutation<AuthResponse, Error, LoginCredentials>({
    mutationFn: (credentials) => login(credentials),
  });
};