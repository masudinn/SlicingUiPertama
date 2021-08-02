import React from 'react';
import {
  Dimensions,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {BackgroundHome, Logo} from '../../asset/image';
import {Saldo} from '../../componen';

const Home = () => {
  return (
    <View style={styles.container}>
      <ImageBackground source={BackgroundHome} style={styles.header}>
        <Image source={Logo} style={styles.logo} />
        <View style={styles.textheader}>
          <Text style={{fontSize: 22, fontFamily: 'Roboto-Thin'}}>
            Selamat Datang,
          </Text>
          <Text
            style={{
              fontSize: 18,
              fontFamily: 'Roboto-Regular',
              marginTop: 7,
            }}>
            Udinganga
          </Text>
        </View>
      </ImageBackground>
      <Saldo />
    </View>
  );
};

export default Home;

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  header: {
    width: windowWidth,
    height: windowHeight * 0.3,
  },
  logo: {
    width: windowWidth * 0.25,
    height: windowHeight * 0.06,
    paddingHorizontal: 30,
    paddingTop: 10,
  },
  textheader: {
    marginTop: windowWidth * 0.08,
    marginLeft: windowHeight * 0.03,
  },
});
