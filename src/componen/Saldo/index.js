import React from 'react';
import {Dimensions, StyleSheet, Text, View} from 'react-native';
import {WARNAUTAMA} from '../../utils/constant';
import ButtonIcon from '../ButtonIcon';
import Gap from '../Gap';

export default function Saldo() {
  return (
    <View style={styles.container}>
      <View style={styles.saldo}>
        <View style={styles.text}>
          <Text style={styles.labelsaldo}>Saldo: </Text>
          <Text style={styles.valuesaldo}>Rp 100.000</Text>
        </View>
        <View style={styles.text}>
          <Text style={styles.labelpoin}>Point: </Text>
          <Text style={styles.valuepoin}>120 Point</Text>
        </View>
      </View>
      <View style={styles.button}>
        <ButtonIcon title="Add Saldo" />
        <Gap width={10} />
        <ButtonIcon title="Get Point" />
      </View>
    </View>
  );
}

const widthWindow = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffff',
    padding: 15,
    marginHorizontal: 30,
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
    marginTop: -windowHeight * 0.05,
  },
  saldo: {
    width: '60%',
  },
  button: {
    flexDirection: 'row',
    marginLeft: 10,
  },
  text: {
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  labelsaldo: {fontSize: 16, fontFamily: 'Roboto-Light'},
  valuesaldo: {fontSize: 17, fontFamily: 'Roboto-Regular'},
  labelpoin: {fontSize: 18, fontFamily: 'Roboto-Light'},
  valuepoin: {fontSize: 17, fontFamily: 'Roboto-Regular', color: WARNAUTAMA},
});
