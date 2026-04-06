import React from 'react';
import { 
  TouchableOpacity, 
  Text, 
  ActivityIndicator, 
  TouchableOpacityProps 
} from 'react-native';
import { colors } from '../../theme/theme';
import { styles } from './customButton.styles';

interface CustomButtonProps extends TouchableOpacityProps {
  title: string;
  isLoading?: boolean;
  isDisabled?: boolean;
}

export const CustomButton = ({
  title,
  isLoading = false,
  isDisabled = false,
  onPress,
  style,
  ...rest
}: CustomButtonProps) => {
  const isFunctionallyDisabled = isDisabled || isLoading;

  return (
    <TouchableOpacity
      style={[
        styles.button,
        isFunctionallyDisabled && styles.buttonDisabled,
        style,
      ]}
      onPress={onPress}
      disabled={isFunctionallyDisabled}
      activeOpacity={0.8}
      {...rest}
    >
      {isLoading ? (
        <ActivityIndicator color={colors.white} />
      ) : (
        <Text 
          style={[
            styles.text, 
            isFunctionallyDisabled && styles.textDisabled
          ]}
        >
          {title}
        </Text>
      )}
    </TouchableOpacity>
  );
};