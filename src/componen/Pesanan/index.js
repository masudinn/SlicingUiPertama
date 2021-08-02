import React from 'react';
import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {color} from 'react-native-reanimated';
import {IconListPesanan} from '../../asset';

const Pesanan = ({title, type}) => {
  return (
    <TouchableOpacity style={styles.container}>
      <IconListPesanan />
      <View style={styles.conten}>
        <Text
          style={{
            fontSize: 15,
            fontFamily: 'Roboto-Regular',
            fontWeight: 'bold',
          }}>
          {title}
        </Text>
        <Text style={styles.status(type)}>{type}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Pesanan;

const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,
    flexDirection: 'row',
    elevation: 9,
    padding: 18,
    backgroundColor: 'white',
    marginVertical: windowHeight * 0.015,
  },
  conten: {
    justifyContent: 'space-between',
    marginVertical: 3,
  },
  status: type => ({
    color: type === 'Selesai' ? 'black' : 'red',
    fontFamily: 'Roboto-Light',
  }),
});
