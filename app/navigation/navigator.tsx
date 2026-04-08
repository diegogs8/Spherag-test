import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useSelector } from 'react-redux';
import { RootState } from '../../infrastructure/store/store';
import { LoginScreen } from '../screens/login/loginScreen';
import { RootStackParamList } from './navigationTypes';
import { StateListScreen } from '../screens/stateList/stateList';
import { AtlasListScreen } from '../screens/atlasList/atlasList';
import { AtlasDetailScreen } from '../screens/atlasDetail/atlasDetail';
import { useTranslation } from 'react-i18next';
import { useBootstrap } from '@hooks/useBootstrap';
import { colors } from '@theme/theme';
import { View, Image, ActivityIndicator } from 'react-native';


const Stack = createNativeStackNavigator<RootStackParamList>();

export const Navigator = () => {
  const { t } = useTranslation();
  const isAuthenticated = useSelector((state: RootState) => state.auth.isAuthenticated);

  const { isBootstrapping } = useBootstrap();

  if (isBootstrapping) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: colors.background }}>
        <Image
          source={require('@assets/spherag-logo.jpg')}
          style={{ width: 200, height: 200, marginBottom: 20, borderRadius: 16 }}
          resizeMode="contain"
        />
      </View>
    );
  }

  return (
    <Stack.Navigator>
      {!isAuthenticated ? (
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
      ) : (
        <>
          <Stack.Screen
            name="Estates"
            component={StateListScreen}
            options={{ title: t('estate.estates') }}
          />
          <Stack.Screen
            name="Atlas"
            component={AtlasListScreen}
            options={{ title: t('atlasList.atlasList') }}
          />
          <Stack.Screen
            name="AtlasDetail"
            component={AtlasDetailScreen}
            options={{ title: t('atlas.atlasDetail') }}
          />
        </>
      )}
    </Stack.Navigator>
  );
};