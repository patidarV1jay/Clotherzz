import React from 'react';
import {
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import styles from './ProfileTabStyles';
import ScreensCard from './ScreensCard';
import useProfileTab from './useProfileTab';

const ProfileTab = () => {
  const {
    navigateToAddress,
    navigateToCart,
    navigateToMyProfile,
    navigateToTnC,
    navigateToMyOrder,
  } = useProfileTab();

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
          navigateToScreen={navigateToMyOrder}
          IconName="Notepad"
          title="My Orders"
          subtitle="Track, View, Manage, Shop Again"
        />
        <View style={styles.bottomContainer}>
          <Text style={styles.bottomText} onPress={navigateToTnC}>
            FAQs
          </Text>
          <Text style={styles.bottomText} onPress={navigateToTnC}>
            About Us
          </Text>
          <Text style={styles.bottomText} onPress={navigateToTnC}>
            Privacy Policy
          </Text>
          <Text style={styles.bottomText} onPress={navigateToTnC}>
            Terms And Condtions
          </Text>
        </View>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.signOut}>Sign Out</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ProfileTab;
