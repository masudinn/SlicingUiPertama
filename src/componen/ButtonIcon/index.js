import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {IconPoin, IconSaldo} from '../../asset';
import {WARNASEKUNDER} from '../../utils/constant';

const ButtonIcon = ({title}) => {
  const Icon = () => {
    if (title === 'Add Saldo') return <IconSaldo />;
    if (title === 'Get Point') return <IconPoin />;
    return <IconSaldo />;
  };
  return (
    <TouchableOpacity>
      <View style={styles.icons}>
        <Icon />
      </View>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

export default ButtonIcon;

const styles = StyleSheet.create({
  icon: {
    width: 10,
    height: 10,
  },
  icons: {
    backgroundColor: WARNASEKUNDER,
    padding: 5,
    borderRadius: 5,
  },
  title: {
    marginTop: 5,
    fontSize: 10,
  },
});
