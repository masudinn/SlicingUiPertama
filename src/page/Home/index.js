import React from 'react';
import {
  Dimensions,
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {BackgroundHome, Logo} from '../../asset/image';
import {Pesanan, Saldo} from '../../componen';
import ButtonIcon from '../../componen/ButtonIcon';
import {WARNAPESANAN} from '../../utils/constant';

const Home = () => {
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
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
        <View style={styles.layanan}>
          <Text style={{fontSize: 18, fontFamily: 'Roboto-Bold'}}>
            Layanan Kami
          </Text>
          <View style={styles.LayananButton}>
            <ButtonIcon title="Kiloan" type="layanan" />
            <ButtonIcon title="Satuan" type="layanan" />
            <ButtonIcon title="Vip" type="layanan" />
            <ButtonIcon title="Karpet" type="layanan" />
            <ButtonIcon title="Setlika Aja" type="layanan" />
            <ButtonIcon title="Express" type="layanan" />
          </View>
        </View>
        <View style={styles.pesanan}>
          <Text style={{fontSize: 18, fontFamily: 'Roboto-Bold'}}>
            Pesanan Aktif
          </Text>
          <Pesanan title="No Pesanan : TRN-20210801" type="Proses Laundry" />
          <Pesanan title="No Pesanan : TRN-20210802" type="Selesai" />
          <Pesanan title="No Pesanan : TRN-20210803" type="Selesai" />
          <Pesanan title="No Pesanan : TRN-20210804" type="Proses Laundry" />
        </View>
      </ScrollView>
    </View>
  );
};

export default Home;

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
  },
  header: {
    width: windowWidth,
    height: windowHeight * 0.3,
  },
  logo: {
    width: windowWidth * 0.25,
    height: windowHeight * 0.06,
    paddingHorizontal: 30,
    margin: 5,
  },
  textheader: {
    marginTop: windowWidth * 0.08,
    marginLeft: windowHeight * 0.03,
  },
  layanan: {
    paddingTop: 13,
    paddingLeft: 20,
  },
  LayananButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    flexWrap: 'wrap',
  },
  pesanan: {
    backgroundColor: WARNAPESANAN,
    paddingHorizontal: 20,
    flex: 1,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    paddingTop: 10,
  },
});
