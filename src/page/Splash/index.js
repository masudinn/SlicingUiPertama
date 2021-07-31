import React, {useEffect} from 'react';
import {ImageBackground, StyleSheet, Image, Text, View} from 'react-native';
import {Background, Logo} from '../../asset';

const Splash = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('Home');
    }, 2000);
  }, [navigation]);

  return (
    <ImageBackground
      source={Background}
      style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Image
        source={Logo}
        style={{
          width: 222,
          height: 105,
        }}
      />
    </ImageBackground>
  );
};

export default Splash;
