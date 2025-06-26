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

const CustomHeader = ({ title, onBackPress, backIcon }) => {
  return (
    <View style={styles.headerContainer}>
      <TouchableOpacity onPress={onBackPress} style={styles.backButton}>
        {backIcon ? (
          <Image source={ImageIndex.back} style={styles.backIcon} resizeMode="contain" />
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
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 44,
    paddingHorizontal: 15,
    paddingVertical:30,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: '5',
    
  },
  backButton: {
    width: 40,
    height: 40,
    justifyContent: 'center',
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
    textAlign: 'center',
  },
});

export default CustomHeader;
