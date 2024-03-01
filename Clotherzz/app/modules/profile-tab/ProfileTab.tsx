import { AddressBook, ShoppingCart } from 'phosphor-react-native';
import React from 'react';
import { Pressable, Text, View } from 'react-native';
import { moderateScale } from '../../themes';
import styles from './ProfileTabStyles';
import ScreensCard from './ScreensCard';
import useProfileTab from './useProfileTab';

const ProfileTab = () => {
  const { navigateToAddress, navigateToCart, navigateToMyProfile } =
    useProfileTab();

  return (
    <View style={styles.container}>
      <View style={styles.wrapperContainer}>
        <ScreensCard
          navigateToScreen={navigateToAddress}
          IconName="AddressBook"
          title="My Addresses"
          subtitle="Default and Saved Addresses "
        />
        <ScreensCard
          navigateToScreen={navigateToCart}
          IconName="ShoppingCart"
          title="My Cart"
          subtitle="Update, Delete or Checkout Now "
        />
        <ScreensCard
          navigateToScreen={navigateToMyProfile}
          IconName="User"
          title="My Profile"
          subtitle="Customize, Manage or Personalize Now"
        />
        <ScreensCard
          navigateToScreen={navigateToMyProfile}
          IconName="Notepad"
          title="My Orders"
          subtitle="Track, View, Manage, Shop Again"
        />
      </View>
    </View>
  );
};

export default ProfileTab;
