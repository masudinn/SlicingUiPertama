import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {
  IconPoin,
  IconSaldo,
  IconKiloan,
  IconKarpet,
  IconSetlika,
  IconSatuan,
  IconExpress,
  IconVip,
} from '../../asset';
import {WARNASEKUNDER} from '../../utils/constant';

const ButtonIcon = ({title, type}) => {
  const Icon = () => {
    if (title === 'Add Saldo') return <IconSaldo />;
    if (title === 'Get Point') return <IconPoin />;
    if (title === 'Kiloan') return <IconKiloan />;
    if (title === 'Satuan') return <IconSatuan />;
    if (title === 'Vip') return <IconVip />;
    if (title === 'Karpet') return <IconKarpet />;
    if (title === 'Setlika Aja') return <IconSetlika />;
    if (title === 'Express') return <IconExpress />;

    return <IconSaldo />;
  };
  return (
    <TouchableOpacity style={styles.container(type)}>
      <View style={styles.icons(type)}>
        <Icon />
      </View>
      <Text style={styles.title(type)}>{title}</Text>
    </TouchableOpacity>
  );
};

export default ButtonIcon;

const styles = StyleSheet.create({
  container: type => ({
    marginBottom: type === 'layanan' ? 12 : 0,
    marginRight: type === 'layanan' ? 20 : 0,
  }),
  icons: type => ({
    backgroundColor: WARNASEKUNDER,
    padding: type === 'layanan' ? 12 : 7,
    borderRadius: 5,
  }),
  title: type => ({
    marginTop: 5,
    fontSize: type === 'layanan' ? 14 : 10,
    textAlign: 'center',
  }),
});
