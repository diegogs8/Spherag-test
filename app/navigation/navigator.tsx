import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useSelector } from 'react-redux';
import { RootState } from '../../infrastructure/store/store';
import { LoginScreen } from '../screens/login/loginScreen';
import { RootStackParamList } from './navigationTypes';


const Stack = createNativeStackNavigator<RootStackParamList>();

export const Navigator = () => {
  const isAuthenticated = useSelector((state: RootState) => state.auth.isAuthenticated);

  return (
    <Stack.Navigator>
      {!isAuthenticated ? (
        <Stack.Screen 
          name="Login" 
          component={LoginScreen} 
          options={{ headerShown: false }} 
        />
      ) : (
        <Stack.Screen 
          name="Login" 
          component={LoginScreen} 
          options={{ headerShown: false }} 
        />
      )}
    </Stack.Navigator>
  );
};