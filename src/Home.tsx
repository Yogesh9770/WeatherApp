/* eslint-disable react-native/no-inline-styles */
import {
  View,
  Text,
  ImageBackground,
  Image,
  TextInput,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import React, {useState} from 'react';
import {deviceHeight, deviceWidth} from './Dimensions';
import Icon from 'react-native-vector-icons/Ionicons';
import Cards from './Cards';

export default function Home(props) {
  const [city, setcity] = useState('');
  const cities = [
    {
      name: 'New Delhi',
      image: require('../assets/Images/image3.jpg'),
    },
    {
        name: 'New York',
        image: require('../assets/Images/image4.jpg'),
      },
      {
        name: 'London',
        image: require('../assets/Images/image5.jpg'),
      },
      {
        name: 'San Fransico',
        image: require('../assets/Images/image6.jpg'),
      },
      {
        name: 'New Jersey',
        image: require('../assets/Images/image7.jpg'),
      },
  ];
  return (
    <View>
      <ImageBackground
        source={require('../assets/Images/image2.jpg')}
        style={{height: deviceHeight, width: deviceWidth}}
        imageStyle={{opacity: 0.6, backgroundColor: 'black'}}
      />
      <View
        style={{
          position: 'absolute',
          paddingVertical: 20,
          paddingHorizontal: 10,
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: deviceWidth - 20,
          }}>
          <Icon name="menu" size={46} color="white" />
          {/* <Image
            source={require('../assets/Images/user.jpg')}
            style={{height: 46, width: 46, borderRadius: 50}}
          /> */}
        </View>
        <View style={{paddingHorizontal: 20, marginTop: 100}}>
          <Text style={{fontSize: 40, color: 'white'}}>Hello user</Text>
          <Text
            style={{
              color: 'white',
              fontSize: 22,
              fontWeight: 'bold',
              marginTop: 10,
            }}>
            Search the city by name
          </Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              borderRadius: 50,
              borderWidth: 1,
              borderColor: 'white',
              marginTop: 20,
              paddingHorizontal: 10,
            }}>
            <TextInput
              value={city}
              onChangeText={val => setcity(val)}
              placeholder="Search City"
              placeholderTextColor="white"
              style={{paddingHorizontal: 10, color: 'white', fontSize: 16}}
            />
            <TouchableOpacity onPress={() => props.navigation.navigate('Details',{name:city})}>
              <Icon name="search" size={22} color="white" />
            </TouchableOpacity>
          </View>
          <Text style={{color: 'white', fontSize: 25, paddingHorizontal: 10, marginTop: 220, marginBottom:20 }}>
            My Locations
          </Text>
          <FlatList horizontal data={cities} renderItem={({item}) => (
            <Cards name={item.name} image={item.image} navigation={props.navigation}/>
          )}  />
        </View>
      </View>
    </View>
  );
}
