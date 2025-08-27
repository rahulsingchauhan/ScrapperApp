import {
  StyleSheet,
  SafeAreaView,
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React from 'react';
import Colors from '../src/theme/colors';
import MapView, { Marker } from 'react-native-maps';

import { ImageIndex } from '../src/assets/ImageIndex';
import CustomHeader from '../src/components/Header/CustomHeader ';


const TrackOrders = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <CustomHeader
          title="Track Orders"
          Icon={ImageIndex.back}
          backgroundColor="transparent"
        />
      </View>

      {/* Map in the background */}
      <MapView
        style={StyleSheet.absoluteFillObject}
        initialRegion={{
          latitude: 28.6139,
          longitude: 77.209,
          latitudeDelta: 0.05,
          longitudeDelta: 0.05,
        }}>
        <Marker
          coordinate={{ latitude: 28.6139, longitude: 77.209 }}
          title="Your Order"
          description="Tracking location"
        />
      </MapView>

      <View style={styles.trackerCard}>
        <ScrollView showsVerticalScrollIndicator={false}>
          {/* Product Info */}
          <View style={styles.productRow}>
            <Image
              source={ImageIndex.bellIcon}
              style={styles.productImage}
            />
            <View style={{ flex: 1, marginLeft: 12 }}>
              <Text style={styles.price}>$20.00</Text>
              <Text style={styles.productName}>Jaunty Carpets</Text>
              <Text style={styles.orderId}>Order.14523652</Text>
            </View>
          </View>

          {/* Timeline */}
          <View style={styles.statusContainer}>
            {/* Order Placed */}
            <View style={styles.statusItem}>
              <View style={styles.timelineIcon}>
                <Image
                  source={ImageIndex.bellIcon}
                  style={styles.statusIcon}
                />
              </View>
              <View style={styles.statusText}>
                <Text style={styles.statusTitle}>Order Placed</Text>
                <Text style={styles.statusDetail}>
                  June 10, 2026 | 03:45 pm
                </Text>
              </View>
            </View>

            {/* Order Dispatched */}
            <View style={styles.statusItem}>
              <View style={styles.timelineIcon}>
                <Image
                  source={ImageIndex.bellIcon}
                  style={styles.statusIcon}
                />
              </View>
              <View style={styles.statusText}>
                <Text style={styles.statusTitle}>Order Dispatched</Text>
                <Text style={styles.statusDetail}>
                  June 11, 2026 | 11:03 am
                </Text>
              </View>
              <TouchableOpacity style={styles.viewBillButton}>
                <Text style={styles.viewBillText}>View Bill</Text>
              </TouchableOpacity>
            </View>

            {/* Order in transit */}
            <View style={styles.statusItem}>
              <View style={styles.timelineIcon}>
                <Image
                  source={ImageIndex.bellIcon}
                  style={styles.statusIcon}
                />
              </View>
              <View style={styles.statusText}>
                <Text style={styles.statusTitle}>Order in transit</Text>
                <Text style={styles.statusDetail}>
                  Reached at Jackline Tower, New York
                </Text>
              </View>
            </View>

            {/* Delivered */}
            <View style={styles.statusItem}>
              <View style={styles.timelineIcon}>
                <Image
                  source={ImageIndex.bellIcon}
                  style={styles.statusIcon}
                />
              </View>
              <View style={styles.statusText}>
                <Text style={styles.statusTitle}>Delivered Successfully</Text>
                <Text style={styles.statusDetail}>Not Delivered yet</Text>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default TrackOrders;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.backGround,
  },
  header: {
    marginTop: 25,
    marginHorizontal: 20,
    zIndex: 1,
  },
  trackerCard: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    backgroundColor: '#fff',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingVertical: 24,
    paddingHorizontal: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 5,
    maxHeight: '65%',
  },
  productRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 24,
  },
  productImage: {
    width: 60,
    height: 60,
    borderRadius: 8,
    resizeMode: 'cover',
  },
  price: {
    fontSize: 18,
    fontWeight: '700',
    color: Colors.primary,
  },
  productName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000',
  },
  orderId: {
    fontSize: 12,
    color: '#777',
    marginTop: 2,
  },
  statusContainer: {
    marginTop: 10,
    paddingLeft: 4,
    borderLeftWidth: 1.5,
    borderLeftColor: '#ddd',
  },
  statusItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 28,
    position: 'relative',
  },
  timelineIcon: {
    width: 36,
    height: 36,
    backgroundColor: '#fff',
    borderRadius: 18,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#f1f1f1',
    marginRight: 12,
  },
  statusIcon: {
    width: 22,
    height: 22,
    resizeMode: 'contain',
  },
  statusText: {
    flex: 1,
  },
  statusTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: '#000',
  },
  statusDetail: {
    fontSize: 12,
    color: '#777',
    marginTop: 2,
  },
  viewBillButton: {
    paddingVertical: 6,
    paddingHorizontal: 12,
    backgroundColor: Colors.primary,
    borderRadius: 8,
  },
  viewBillText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#fff',
  },
});
