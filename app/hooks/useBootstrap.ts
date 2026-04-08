import { restoreSession } from '@infrastructure/store/authSlice';
import { getTokens } from '@infrastructure/store/secureStorage';
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

export const useBootstrap = () => {
  const dispatch = useDispatch();
  const [isBootstrapping, setIsBootstrapping] = useState(true);

  useEffect(() => {
    const bootstrapAsync = async () => {
      try {
        const { accessToken, refreshToken } = await getTokens();
        
        if (accessToken && refreshToken) {
          dispatch(restoreSession({ accessToken, refreshToken }));
        }
      } catch (error) {
        console.error('Error during app bootstrap:', error);
      } finally {
        setIsBootstrapping(false);
      }
    };

    bootstrapAsync();
  }, [dispatch]);

  return { isBootstrapping };
};