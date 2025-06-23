import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  Platform,
  StatusBar
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const CustomHeader = ({
  title = 'Dashboard',
  onLeftPress,
  onRightPress,
  leftIcon = 'chevron-back',
  rightIcon = 'notifications-outline',
  showLeftIcon = true,
  showRightIcon = true,
}) => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.headerWrapper}>
        <View style={styles.container}>
          {showLeftIcon ? (
            <TouchableOpacity onPress={onLeftPress} style={styles.iconBtn}>
              <Icon name={leftIcon} size={26} color="#ffffff" />
            </TouchableOpacity>
          ) : <View style={styles.iconPlaceholder} />}
          
          <Text style={styles.title}>{title}</Text>
          
          {showRightIcon ? (
            <TouchableOpacity onPress={onRightPress} style={styles.iconBtn}>
              <Icon name={rightIcon} size={26} color="#ffffff" />
            </TouchableOpacity>
          ) : <View style={styles.iconPlaceholder} />}
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: '#0f172a', // Dark Navy
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  headerWrapper: {
    marginHorizontal: 16,
    marginVertical: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    borderRadius: 16,
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.1)',
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 8,
    elevation: 8,
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 22,
    color: '#fff',
    fontWeight: '700',
    letterSpacing: 1,
  },
  iconBtn: {
    padding: 6,
    borderRadius: 100,
    backgroundColor: 'rgba(255,255,255,0.1)',
  },
  iconPlaceholder: {
    width: 38,
  },
});

export default CustomHeader;
