/* eslint-disable react-native/no-inline-styles */
import {View, Text, ImageBackground, TouchableOpacity} from 'react-native';
import React from 'react';
import {deviceHeight, deviceWidth} from './Dimensions';

export default function Cards({name, image, navigation}) {
  return (
    <TouchableOpacity style={{marginHorizontal: 10}} onPress={ () => navigation.navigate('Details',{name}) }>
      <ImageBackground
        source={image}
        style={{height: deviceHeight / 5, width: deviceWidth / 2 - 50}}
        imageStyle={{borderRadius: 16}}
      />
      <View style={{ position: 'absolute',width:'100%', height:'100%', justifyContent:'center'}}>
        <Text
          style={{
            color: 'white',
            fontSize: 22,
            fontWeight: 'bold',
            textAlign: 'center',
            textAlignVertical: 'center',
          }}>
          {name}
        </Text>
      </View>
    </TouchableOpacity>
  );
}
