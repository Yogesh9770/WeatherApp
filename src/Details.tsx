/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useState} from 'react';
import {View, Image, ImageBackground, Text} from 'react-native';
import {deviceHeight, deviceWidth} from './Dimensions';
import Icon from 'react-native-vector-icons/Ionicons';
import {API_KEY} from './Constants';

export default function Details(props) {
  const [data, setData] = useState();
  const {name} = props.route.params;

  useEffect(() => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=${API_KEY}`,
    )
      .then(res => res.json())
      .then(res => setData(res))
      .catch(err => console.log(err));
  }, []);

  return (
    <View>
      <ImageBackground
        source={require('../assets/Images/image1.jpg')}
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
          <Image
            source={require('../assets/Images/user.jpg')}
            style={{height: 46, width: 46, borderRadius: 50}}
          />
        </View>
        {data ? (
          <View style={{flexDirection:'column', justifyContent: 'space-evenly', alignItems:'center', height: deviceHeight - 100}}>
            <View>
            <Text style={{color: 'white', fontSize: 40}}>{name}</Text>
            <Text style={{fontSize:28, color:'white'}}> {data['weather'][0]['main']} </Text>
            </View>
            <Text style={{color:'white', fontSize:40}}> {(data['main']['temp'] - 273).toFixed(2)}&deg; C</Text>
            <Text style={{color:'white', fontSize:22}}>Weather Details</Text>
            <View>
                <View></View>
            </View>
          </View>
        ) : null}
      </View>
    </View>
  );
}
