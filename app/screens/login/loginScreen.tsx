import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ActivityIndicator, Alert } from 'react-native';
import { useDispatch } from 'react-redux';
import { useLoginMutation } from '../../hooks/useAuthMutation';
import { setAuthData } from '../../../infrastructure/store/authSlice';
import { styles } from './loginScreen.styles';
import { CustomButton } from '../../components/customButton/customButton';
import { CustomTextInput } from '../../components/customTextInput/customTextInput';

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

            <CustomTextInput
                label="Username"
                placeholder="Enter your email"
                variant="email"
                value={username}
                onChangeText={setUsername}
            />

            <CustomTextInput
                label="Password"
                placeholder="Enter your password"
                variant="password"
                value={password}
                onChangeText={setPassword}
            />

            <CustomButton
                title="Sign In"
                onPress={handleLogin}
                isLoading={isPending}
            />
        </View>
    );
};