import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {
  IconHomeAct,
  IconHome,
  IconPesanan,
  IconPesananAct,
  IconAkun,
  IconAkunAct,
} from '../../asset';
import {WARNAUTAMA, WARNADISABLE} from '../../utils/constant';

const TabItem = ({isFocused, onPress, onLongPress, label}) => {
  const Ikon = () => {
    if (label === 'Home') return isFocused ? <IconHomeAct /> : <IconHome />;
    if (label === 'Pesanan')
      return isFocused ? <IconPesananAct /> : <IconPesanan />;
    if (label === 'Akun') return isFocused ? <IconAkunAct /> : <IconAkun />;

    return <IconHome />;
  };

  return (
    <TouchableOpacity
      onPress={onPress}
      onLongPress={onLongPress}
      style={styles.container}>
      <Ikon />
      <Text style={styles.label(isFocused)}>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {alignItems: 'center'},
  label: isFocused => ({
    color: isFocused ? WARNAUTAMA : WARNADISABLE,
    fontSize: 13,
    marginTop: 3,
  }),
});

export default TabItem;
