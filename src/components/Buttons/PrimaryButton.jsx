import React from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
import Colors from '../../theme/colors';

const PrimaryButton = ({
  title = 'Button',
  onPress,
  style,
  textStyle,
  backgroundColor = Colors.primary,
  textColor = Colors.backGround,
  borderRadius = 15,
  fontSize = 17,
  fontWeight = '600',
  paddingVertical = 16,
  width = '100%',
  disabled = false,
  loading = false,
  loaderColor = Colors.backGround,
  activeOpacity = 0.8,
}) => {
  return (
    <TouchableOpacity
      style={[
        styles.button,
        {
          backgroundColor: backgroundColor,
          borderRadius: borderRadius,
          paddingVertical: paddingVertical,
          width: width,
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
              fontSize: fontSize,
              fontWeight: fontWeight,
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
    marginBottom: 16,
  },
  buttonText: {
    textAlign: 'center',
  },
});
