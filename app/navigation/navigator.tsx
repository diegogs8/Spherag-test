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


const Stack = createNativeStackNavigator<RootStackParamList>();

export const Navigator = () => {
  const { t } = useTranslation();
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