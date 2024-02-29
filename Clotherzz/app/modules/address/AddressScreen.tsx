import { MapPin, ShoppingCart, Wallet } from 'phosphor-react-native';
import React from 'react';
import { View } from 'react-native';
import { Colors } from '../../themes';
import styles from './AddressScreenStyles';

const AddressScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.wrapperContainer}>
        <View style={styles.header}>
          <ShoppingCart size={28} weight="bold" color={Colors.purple} />
          <View style={[styles.hrLine, styles.colorLine]} />
          <MapPin size={28} weight="bold" color={Colors.purple} />
          <View style={styles.hrLine} />
          <Wallet size={28} />
        </View>
      </View>
    </View>
  );
};

export default AddressScreen;
