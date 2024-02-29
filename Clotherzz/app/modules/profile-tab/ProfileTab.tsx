import { View, Text, Pressable } from 'react-native';
import React from 'react';
import styles from './ProfileTabStyles';
import { AddressBook } from 'phosphor-react-native';
import { moderateScale } from '../../themes';
import useProfileTab from './useProfileTab';

const ProfileTab = () => {
  const { navigateToAddress } = useProfileTab();

  return (
    <View style={styles.container}>
      <View style={styles.wrapperContainer}>
        <Pressable style={styles.section} onPress={navigateToAddress}>
          <AddressBook size={moderateScale(30)} />
          <View style={styles.rightColumn}>
            <Text style={styles.myAddressesText}>My Addresses</Text>
            <Text style={styles.subTitle}>Default and Saved Addresses</Text>
          </View>
        </Pressable>
        <View style={styles.hrLine} />
      </View>
    </View>
  );
};

export default ProfileTab;
