import React, { useState } from 'react';
import { 
  View, 
  TextInput, 
  Text, 
  TouchableOpacity, 
  TextInputProps 
} from 'react-native';
import { colors } from '../../theme/theme';
import { styles } from './customTextInput.styles';
import Ionicons from '@react-native-vector-icons/ionicons';

export type InputVariant = 'default' | 'email' | 'password';

interface CustomTextInputProps extends TextInputProps {
  variant?: InputVariant;
  label?: string;
  error?: string;
}

export const CustomTextInput = ({
  variant = 'default',
  label,
  error,
  style,
  ...rest
}: CustomTextInputProps) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const isPassword = variant === 'password';

  // Automatically assign useful defaults based on the variant
  const getVariantProps = (): Partial<TextInputProps> => {
    switch (variant) {
      case 'email':
        return {
          keyboardType: 'email-address',
          autoCapitalize: 'none',
          autoCorrect: false,
        };
      case 'password':
        return {
          autoCapitalize: 'none',
          autoCorrect: false,
          secureTextEntry: !isPasswordVisible,
        };
      default:
        return {};
    }
  };

  const togglePasswordVisibility = () => {
    setIsPasswordVisible((prev) => !prev);
  };

  return (
    <View style={styles.container}>
      {label && <Text style={styles.label}>{label}</Text>}
      
      <View style={[styles.inputContainer, error && styles.inputContainerError]}>
        <TextInput
          style={[styles.input, style]}
          placeholderTextColor={colors.textSecondary}
          {...getVariantProps()}
          {...rest}
        />
        
        {isPassword && (
          <TouchableOpacity
            style={styles.iconButton}
            onPress={togglePasswordVisibility}
            activeOpacity={0.7}
          >
            <Ionicons
              name={isPasswordVisible ? 'eye-off-outline' : 'eye-outline'}
              size={24}
              color={colors.textSecondary}
            />
          </TouchableOpacity>
        )}
      </View>

      {error && <Text style={styles.errorText}>{error}</Text>}
    </View>
  );
};