import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ActivityIndicator, Alert } from 'react-native';
import { useDispatch } from 'react-redux';
import { useLoginMutation } from '../../hooks/useAuthMutation';
import { setAuthData } from '../../../infrastructure/store/authSlice';
import { styles } from './loginScreen.styles';

export const LoginScreen = () => {
  const [username, setUsername] = useState('apppruebatecnica@spherag.com');
  const [password, setPassword] = useState('Usuario2026!');
  
  const dispatch = useDispatch();
  
  const { mutate: login, isPending } = useLoginMutation();

  const handleLogin = () => {
    if (!username || !password) {
      Alert.alert('Error', 'Please enter both username and password.');
      return;
    }

    login(
      { username, password },
      {
        onSuccess: (data) => {
          dispatch(setAuthData(data));
          console.log('Login successful! Token saved to Redux store.');
        },
        onError: (error) => {
          console.error(error);
          Alert.alert('Login Failed', 'Please check your credentials and try again.');
        }
      }
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Spherag</Text>
      
      <TextInput
        style={styles.input}
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
        autoCapitalize="none"
        keyboardType="email-address"
      />
      
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      
      <TouchableOpacity 
        style={styles.button} 
        onPress={handleLogin}
        disabled={isPending}
      >
        {isPending ? (
          <ActivityIndicator color="#ffffff" />
        ) : (
          <Text style={styles.buttonText}>Sign In</Text>
        )}
      </TouchableOpacity>
    </View>
  );
};