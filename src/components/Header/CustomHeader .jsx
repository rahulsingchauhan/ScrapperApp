import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from 'react-native';
import fonts from '../../utils/fonts';
import Colors from '../../theme/colors';

const { width } = Dimensions.get('window');

const CustomHeader = ({ title, onPress, Icon, backgroundColor = 'white', style }) => {
  return (
    <View style={[styles.headerContainer, { backgroundColor }, style]}>
      
      {/* Left Icon */}
      <TouchableOpacity onPress={onPress} style={styles.sideButton}>
        {Icon ? (
          <Image source={Icon} style={styles.Icon} resizeMode="contain" />
        ) : null}
      </TouchableOpacity>

      {/* Title */}
      <Text style={styles.headerTitle} numberOfLines={1}>
        {title || ''}
      </Text>

      {/* Right Spacer (for symmetry) */}
      <View style={styles.sideButton} />
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 12,
    zIndex: 10,
  },
  sideButton: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  Icon: {
    width: 22,
    height: 22,
  },
  headerTitle: {
    flex: 1,
    fontSize: width * 0.05,
    fontFamily: fonts.BOLD,
    color: Colors.black,
    textAlign: 'center',
  },
});

export default CustomHeader;
