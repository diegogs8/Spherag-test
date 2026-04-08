import React, { useState } from 'react';
import { View, Text, Image, Alert } from 'react-native';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { useLoginMutation } from '@hooks/useAuthMutation';
import { setAuthData } from '@infrastructure/store/authSlice';
import { styles } from './loginScreen.styles';
import { CustomButton } from '@components/customButton/customButton';
import { CustomTextInput } from '@components/customTextInput/customTextInput';

export const LoginScreen = () => {
    const { t } = useTranslation();
    const [username, setUsername] = useState('apppruebatecnica@spherag.com');
    const [password, setPassword] = useState('Usuario2026!');

    const dispatch = useDispatch();

    const { mutate: login, isPending } = useLoginMutation();

    const handleLogin = () => {
        if (!username || !password) {
            Alert.alert(t('login.errorTitle'), t('errors.emptyCredentials'));
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
                    Alert.alert(t('login.errorTitle'), t('errors.loginFailed'));
                }
            }
        );
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
                onChangeText={setUsername}
            />

            <CustomTextInput
                label={t('login.password')}
                placeholder={t('login.enterPasswordPlaceholder')}
                variant="password"
                value={password}
                onChangeText={setPassword}
            />

            <CustomButton
                title={t('login.signIn')}
                onPress={handleLogin}
                isLoading={isPending}
            />
        </View>
    );
};