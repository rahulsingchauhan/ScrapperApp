import { Image, StyleSheet, TextInput, View } from 'react-native';
import React from 'react';
import Feather from 'react-native-vector-icons/Feather';

const TextField = ({
  value,
  handleChange,
  placeholder,
  isSecure,
  handleBlur,
  leftIcon,
}) => {
  return (
    <View style={styles.inputWrapper}>
      {leftIcon && (
        <Image source={leftIcon} style={{ height: 25, width: 25 }} />
      )}

      <TextInput
        placeholder={placeholder ? placeholder : 'Enter value'}
        secureTextEntry={isSecure}
        style={styles.input}
        placeholderTextColor="#999"
        onChangeText={handleChange}
        onBlur={handleBlur}
        value={value}
      />
      {leftIcon && (
        <Image source={leftIcon} style={{ height: 25, width: 25 }} />
      )}
    </View>
  );
};

export default TextField;

const styles = StyleSheet.create({
  input: {
    flex: 1,
    fontSize: 17,
    color: '#000',
    marginLeft: 7,
  },

  inputWrapper: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F2F2F2',
    borderRadius: 12,
    paddingHorizontal: 18,
    height: 60,
    marginBottom: 18,
  },
});
