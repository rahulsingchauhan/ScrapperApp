import React from 'react';
import { TouchableOpacity, Text, StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

const CustomButton = ({
  title = 'Click Me',
  onPress = () => {},
  backgroundColor = '#FB5B2B',
  textColor = '#fff',
  paddingVertical = 14,
  borderRadius = 15,
  fullWidth = true,
  fontSize = 16,
  customStyles = {},
  textStyle = {},
}) => {
  return (
    <TouchableOpacity
      style={[
        styles.button,
        {
          backgroundColor,
          paddingVertical,
          borderRadius,
          width: fullWidth ? width * 0.9 : 'auto',
        },
        customStyles,
      ]}
      activeOpacity={0.8}
      onPress={onPress}
    >
      <Text style={[styles.buttonText, { color: textColor, fontSize }, textStyle]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    alignSelf: 'center',
    alignItems: 'center',
    marginVertical: 10,
  },
  buttonText: {
    fontWeight: '600',
  },
});

export default CustomButton;
