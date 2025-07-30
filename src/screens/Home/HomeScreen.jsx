import React, { useState, useMemo, useEffect } from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import { styles } from './Styles';
import PrimaryButton from '../../components/Buttons/PrimaryButton';
import { ImageIndex } from '../../assets/ImageIndex';
import screenNames from '../../utils/screenName';
import { SafeAreaView } from 'react-native-safe-area-context';
import Colors from '../../theme/colors';
import CustomHeader from '../../components/Header/CustomHeader ';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const debounce = (func, delay) => {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => func(...args), delay);
  };
};

const HomeScreen = () => {
  const [active, setActive] = useState('0');
  const navigation = useNavigation();
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredData, setFilteredData] = useState([]);
  const [userType, setUserType] = useState(''); 

  // ✅ Fetch userType from AsyncStorage on component mount
  useEffect(() => {
    const fetchUserType = async () => {
      try {
        const storedType = await AsyncStorage.getItem('userType');
        setUserType(storedType || '');
      } catch (error) {
        console.log('Error fetching userType:', error);
      }
    };
    fetchUserType();
  }, []);

  const activeListings = [
    {
      title: 'Old Metal Pipes',
      category: 'Metal Scrap',
      time: '12 hours ago',
      image: ImageIndex.metal,
    },
    {
      title: 'Used Copper Wires',
      category: 'Metal Scrap',
      time: '2 days ago',
      image: ImageIndex.metal,
    },
  ];

  const pastListings = [
    {
      title: 'Broken Washing Machine',
      category: 'E-Waste',
      time: '1 week ago',
      image: ImageIndex.metal,
    },
    {
      title: 'Damaged TV Circuit',
      category: 'E-Waste',
      time: '3 weeks ago',
      image: ImageIndex.metal,
    },
  ];

  const currentList = active === '0' ? activeListings : pastListings;

  const handleSearch = useMemo(
    () =>
      debounce((text) => {
        const filtered = currentList.filter((item) =>
          item.title.toLowerCase().includes(text.toLowerCase())
        );
        setFilteredData(filtered);
      }, 300),
    [active]
  );

  const onChangeSearch = (text) => {
    setSearchQuery(text);
    handleSearch(text);
  };

  const renderCard = (item) => (
    <TouchableOpacity
      key={item.title}
      style={styles.card}
      onPress={() => {
        if (active === '0') {
          navigation.navigate(screenNames.APP.DETAILSCREEN, { data: item });
        } else {
          navigation.navigate(screenNames.APP.PAST_LISTING, { data: item });
        }
      }}
    >
      <Image source={item.image} style={styles.cardImage} />
      <View style={styles.textContainer}>
        <Text style={styles.cardTitle}>{item.title}</Text>
        <Text style={styles.cardCategory}>{item.category}</Text>
        <View style={styles.timeRow}>
          <Image source={ImageIndex.clock} style={styles.timeIcon} />
          <Text style={styles.timeText}>{item.time}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={Colors.backGround} barStyle={'dark-content'} />

      <CustomHeader
        onPress={() => navigation.openDrawer()}
        Icon={ImageIndex.primaryDrawerIcon}
        rightIcon={ImageIndex.bellIcon}
        onRightPress={() =>
          navigation.navigate(screenNames.SCRAPPER.SCRAPPER_NOTIFICATIONS)
        }
      />

      <View style={styles.titleView}>
        <Text style={styles.title}>Hi, Ronaldo</Text>
        <Text style={styles.subTitle}>Welcome Back</Text>
      </View>

      <View style={styles.buttonView}>
        <PrimaryButton
          title="Active Listing"
          width="47%"
          paddingVertical={10}
          onPress={() => {
            setActive('0');
            setFilteredData([]);
            setSearchQuery('');
          }}
          backgroundColor={active === '0' ? Colors.primary : '#E5E5E5'}
          textColor={active === '0' ? '#FFF' : Colors.primary}
        />
        <PrimaryButton
          title="Past Listing"
          width="47%"
          paddingVertical={10}
          onPress={() => {
            setActive('1');
            setFilteredData([]);
            setSearchQuery('');
          }}
          backgroundColor={active === '1' ? Colors.primary : '#E5E5E5'}
          textColor={active === '1' ? Colors.backGround : Colors.primary}
        />
      </View>

      <View style={styles.searchView}>
        <Image source={ImageIndex.search} style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Search"
          placeholderTextColor={Colors.black}
          value={searchQuery}
          onChangeText={onChangeSearch}
        />
        <TouchableOpacity>
          <Image source={ImageIndex.filter} style={styles.icon} />
        </TouchableOpacity>
      </View>

      <View>
        {(searchQuery.length > 0 ? filteredData : currentList).map(renderCard)}
      </View>

      {/* ✅ Floating Button only if userType !== 'scrapper' */}
      {userType !== 'scrapper' && (
        <TouchableOpacity
          style={styles.fab}
          onPress={() => navigation.navigate(screenNames.APP.POSTSCRAP)}
        >
          <Image source={ImageIndex.plus} style={styles.fabImage} />
        </TouchableOpacity>
      )}
    </SafeAreaView>
  );
};

export default HomeScreen;
