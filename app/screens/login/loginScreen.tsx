import React, { useState } from 'react';
import { View, Text, Image, Alert } from 'react-native';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { useLoginMutation } from '@hooks/useAuthMutation';
import { setAuthData } from '@infrastructure/store/authSlice';
import { styles } from './loginScreen.styles';
import { CustomButton } from '@components/customButton/customButton';
import { CustomTextInput } from '@components/customTextInput/customTextInput';
import { saveTokens } from '@infrastructure/store/secureStorage';

export const LoginScreen = () => {
    const { t } = useTranslation();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    
    const [usernameError, setUsernameError] = useState<string>('');
    const [passwordError, setPasswordError] = useState<string>('');

    const dispatch = useDispatch();

    const { mutate: login, isPending } = useLoginMutation();

    const handleLogin = () => {
        setUsernameError('');
        setPasswordError('');

        let hasError = false;

        if (!username.trim()) {
            setUsernameError(t('login.emptyUsername'));
            hasError = true;
        }

        if (!password) {
            setPasswordError(t('login.emptyPassword'));
            hasError = true;
        }

        if (hasError) {
            return;
        }

        login(
            { username, password },
            {
                onSuccess: async (data) => {
                    await saveTokens(data.accessToken.token, data.refreshToken.token);
                    dispatch(setAuthData(data));
                },
                onError: (error) => {
                    console.error(error);
                    Alert.alert(t('login.errorTitle'), t('errors.loginFailed'));
                }
            }
        );
    };

    const handleUsernameChange = (text: string) => {
        setUsername(text);
        if (usernameError) setUsernameError('');
    };

    const handlePasswordChange = (text: string) => {
        setPassword(text);
        if (passwordError) setPasswordError('');
    };

    return (
        <View style={styles.container}>
            <Image
                source={require('@assets/spherag-title.png')}
                style={styles.titleImage}
                resizeMode="contain"
            />

            <CustomTextInput
                label={t('login.username')}
                placeholder={t('login.enterEmailPlaceholder')}
                variant="email"
                value={username}
                onChangeText={handleUsernameChange}
                error={usernameError}
            />

            <CustomTextInput
                label={t('login.password')}
                placeholder={t('login.enterPasswordPlaceholder')}
                variant="password"
                value={password}
                onChangeText={handlePasswordChange}
                error={passwordError}
            />

            <CustomButton
                title={t('login.signIn')}
                onPress={handleLogin}
                isLoading={isPending}
            />
        </View>
    );
};