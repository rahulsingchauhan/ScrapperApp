import React from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
import Colors from '../../theme/colors';
import fonts from '../../utils/fonts';

const PrimaryButton = ({
  title = 'Button',
  onPress,
  style,
  textStyle,
  backgroundColor = Colors.primary,
  textColor = Colors.backGround,
  borderRadius = 15,
  fontSize = 17,
  fontWeight = '600', // used only for mapping
  paddingVertical = 16,
  width = '100%',
  disabled = false,
  loading = false,
  loaderColor = Colors.backGround,
  activeOpacity = 0.8,
}) => {
  // Convert fontWeight to fontFamily
  const getFontFamily = (weight) => {
    switch (weight) {
      case '700':
      case 'bold':
        return fonts.BOLD;
      case '600':
      case 'semibold':
        return fonts.SEMIBOLD;
      case '500':
      case 'medium':
        return fonts.MEDIUM;
      case '300':
      case 'light':
        return fonts.LIGHT;
      default:
        return fonts.REGULAR;
    }
  };

  const fontFamily = getFontFamily(fontWeight);

  return (
    <TouchableOpacity
      style={[
        styles.button,
        {
          backgroundColor,
          borderRadius,
          paddingVertical,
          width,
          opacity: disabled || loading ? 0.6 : 1,
        },
        style,
      ]}
      onPress={onPress}
      disabled={disabled || loading}
      activeOpacity={activeOpacity}
    >
      {loading ? (
        <ActivityIndicator color={loaderColor} />
      ) : (
        <Text
          style={[
            styles.buttonText,
            {
              color: textColor,
              fontSize,
              fontFamily,
            },
            textStyle,
          ]}
        >
          {title}
        </Text>
      )}
    </TouchableOpacity>
  );
};

export default PrimaryButton;

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    textAlign: 'center',
  },
});
