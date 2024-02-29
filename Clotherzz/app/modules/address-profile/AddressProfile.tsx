import { PlusCircle } from 'phosphor-react-native';
import React from 'react';
import { Image, Pressable, Text, View } from 'react-native';
import { Images } from '../../assets';
import { Colors, moderateScale } from '../../themes';
import styles from './AddressStyles';
import { AddAddress } from './add-address';
import useAddressProfile from './useAddressProfile';

const AddressProfile = () => {
  const { isVisible, handleModalVisibility } = useAddressProfile();
  return (
    <View style={styles.container}>
      <View>
        <Image source={Images.noAddress} style={styles.noAddressImage} />
        <Text style={styles.noAddressText}>No Address Found</Text>
      </View>
      <Pressable style={styles.addButton} onPress={handleModalVisibility}>
        <PlusCircle
          size={moderateScale(50)}
          weight="fill"
          color={Colors.purple}
        />
      </Pressable>
      <AddAddress isVisible={isVisible} handleVisible={handleModalVisibility} />
    </View>
  );
};

export default AddressProfile;
