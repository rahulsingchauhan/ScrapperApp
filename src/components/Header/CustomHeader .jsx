import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  Platform,
  StatusBar,
  Dimensions,
} from 'react-native';
import Colors from '../../theme/colors';
import { ImageIndex } from '../../assets/ImageIndex';

const { width } = Dimensions.get('window');

const CustomHeader = ({ title, onPress, Icon ,  }) => {
  return (
    <View style={styles.headerContainer}>
      <TouchableOpacity onPress={onPress} style={styles.backButton}>
        {Icon ? (
          <Image source={Icon} style={styles.backIcon} resizeMode="contain" />
        ) : null}
      </TouchableOpacity>

      <Text style={styles.headerTitle}>{title}</Text>

      {/* Invisible View to balance layout */}
      <View style={styles.backButton} />
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    
    paddingHorizontal: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor:'white',
    paddingTop:25,
  },
  backButton: {
    width: 40,
    height: 40,
    alignItems: 'center',
  },
  backIcon: {
    width: 24,
    height: 24,
  },
  headerTitle: {
    fontSize: width * 0.05,
    fontWeight: '600',
    color: '#000',
  },
});

export default CustomHeader;
