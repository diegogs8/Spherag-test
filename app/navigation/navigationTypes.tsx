import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export type RootStackParamList = {
  Login: undefined;
  Estates: undefined;
  Atlases: { estateId: number };
  AtlasDetail: { estateId: number; imei: string };
};

export type NavigationProps = NativeStackNavigationProp<RootStackParamList>;