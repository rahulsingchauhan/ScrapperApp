import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import Colors from '../../theme/colors';

const PrimaryButton = ({ title, onPress, style, textStyle }) => {
  return (
    <TouchableOpacity
      style={[styles.button, style]} 
      onPress={onPress}
      activeOpacity={0.8}
    >
      <Text style={[styles.buttonText, textStyle]}>{title}</Text>
    </TouchableOpacity>
  );
};

export default PrimaryButton;

const styles = StyleSheet.create({
  button: {
    backgroundColor: Colors.primary,
    paddingVertical: 16,
    borderRadius: 15,
    alignItems: 'center',
    marginBottom: 16, 
    width:'100%'// good for bottom alignment
  },
  buttonText: {
    color: Colors.backGround,
    fontSize: 17,
    fontWeight: '600',
  },
});