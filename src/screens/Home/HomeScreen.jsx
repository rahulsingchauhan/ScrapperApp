import React, { useState } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, StatusBar } from 'react-native';
import { styles } from './Styles';
import PrimaryButton from '../../components/Buttons/PrimaryButton';
import { ImageIndex } from '../../assets/ImageIndex';
import screenNames from '../../utils/screenName';
import CustomHeader from '../../components/Header/CustomHeader ';
import { SafeAreaView } from 'react-native-safe-area-context';
import Colors from '../../theme/colors';

const HomeScreen = ({ navigation }) => {
  const cardData = {
    title: 'Old Metal Pipes',
    category: 'Metal Scrap',
    time: '12 hours',
    image:ImageIndex.metal, 
  };

  const [active, setActive] = useState('0')

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={'#fff'} barStyle={'dark-content'}/>
      <CustomHeader
        title="Home"
        onPress={() => navigation.openDrawer()}
        Icon={ImageIndex.primaryDrawerIcon}
      />
      {/* Title */}
      <View style={styles.titleView}>
        <Text style={styles.title}>Hi, Ronaldo</Text>
        <Text style={styles.subTitle}>Welcome Back</Text>
      </View>

      {/* Buttons */}
      <View style={styles.buttonView}>
        <PrimaryButton title="Active Listing" width="47%" onPress={()=>setActive('0')}  backgroundColor={active ==='0' ? Colors.primary :'white'} textColor={active ==='0' ? '#FFF' :  'black'}  />
        <PrimaryButton title="Past Listing" width="47%" onPress={()=>setActive('1')}   backgroundColor={active ==='1' ? Colors.primary :'white'} textColor={active ==='1' ? '#FFF' :  'black'}  />
      </View>

      {/* Search */}
      <View style={styles.searchView}>
        <Image source={ImageIndex.search} style={styles.icon} />
        <TextInput style={styles.input} placeholder="Search" placeholderTextColor="#000" />
        <TouchableOpacity>
          <Image source={ImageIndex.filter} style={styles.icon} />
        </TouchableOpacity>
      </View>
{active === '0'?
      <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('Details', { data: cardData })}>
        <Image source={cardData.image} style={styles.cardImage} />
        <View style={styles.textContainer}>
          <Text style={styles.cardTitle}>{cardData.title}</Text>
          <Text style={styles.cardCategory}>{cardData.category}</Text>
          <View style={styles.timeRow}>
            <Image source={ImageIndex.clock} style={styles.timeIcon} />
            <Text style={styles.timeText}>{cardData.time}</Text>
          </View>
        </View>
      </TouchableOpacity>
:

<View>
  
</View>
}
      {/* Floating Button */}
      <TouchableOpacity style={styles.fab} onPress={() => navigation.navigate(screenNames.APP.POSTSCRAP)}>
        <Text style={styles.fabIcon}>+</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default HomeScreen;
