import { MapPin, ShoppingCart, Wallet } from 'phosphor-react-native';
import React from 'react';
import {
  Animated,
  Image,
  Pressable,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { Images } from '../../assets';
import { PriceDetails } from '../../components';
import {
  Colors,
  horizontalScale,
  moderateScale,
  verticleScale,
} from '../../themes';
import styles from './AddressScreenStyles';
import useAddressScreen from './useAddressScreen';

const AddressScreen = () => {
  const { navigateToAddress, navigateToPayment } = useAddressScreen();

  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.wrapperContainer}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: verticleScale(150) }}>
        <View style={styles.header}>
          <ShoppingCart size={28} weight="bold" color={Colors.purple} />
          <Animated.View style={[styles.hrLine, styles.colorLine]} />
          <MapPin size={28} weight="bold" color={Colors.purple} />
          <View style={styles.hrLine} />
          <Wallet size={28} />
        </View>
        <View style={styles.addressView}>
          <Text style={styles.addressName}>John Doe,</Text>
          <Text style={styles.addressText}>Address, Locality</Text>
          <Text style={styles.addressText}>District, State, 201301</Text>
          <Text style={styles.addressText}>99999999</Text>
          <TouchableOpacity
            style={styles.addAddressButton}
            onPress={navigateToAddress}>
            <Text style={styles.addAddressText}>Edit or Add Address</Text>
          </TouchableOpacity>
        </View>
        {/* <TouchableOpacity
          style={styles.addAddressButton}
          onPress={navigateToAddress}>
          <Text style={styles.addAddressText}>Add Address</Text>
        </TouchableOpacity> */}
        <View style={styles.addressView}>
          <View style={styles.row}>
            <Image
              source={Images.signup}
              style={{
                height: verticleScale(140),
                width: horizontalScale(70),
                borderRadius: moderateScale(5),
              }}
            />
            <View style={styles.itemDescription}>
              <Text style={styles.title}>Tan Purple Heavy Sweatshirt</Text>
              <View style={styles.row}>
                <Text style={styles.darkLightText}>Size: S</Text>
                <Text style={styles.darkLightText}>Quantity: 10</Text>
              </View>
            </View>
          </View>
          <View style={styles.row}>
            <Image
              source={Images.signup}
              style={{
                height: verticleScale(140),
                width: horizontalScale(70),
                borderRadius: moderateScale(5),
              }}
            />
            <View style={styles.itemDescription}>
              <Text style={styles.title}>Tan Purple Heavy Sweatshirt</Text>
              <View style={styles.row}>
                <Text style={styles.darkLightText}>Size: S</Text>
                <Text style={styles.darkLightText}>Quantity: 10</Text>
              </View>
            </View>
          </View>
          <View style={styles.row}>
            <Image
              source={Images.signup}
              style={{
                height: verticleScale(140),
                width: horizontalScale(70),
                borderRadius: moderateScale(5),
              }}
            />
            <View style={styles.itemDescription}>
              <Text style={styles.title}>Tan Purple Heavy Sweatshirt</Text>
              <View style={styles.row}>
                <Text style={styles.darkLightText}>Size: S</Text>
                <Text style={styles.darkLightText}>Quantity: 10</Text>
              </View>
            </View>
          </View>
          <View style={styles.row}>
            <Image
              source={Images.signup}
              style={{
                height: verticleScale(140),
                width: horizontalScale(70),
                borderRadius: moderateScale(5),
              }}
            />
            <View style={styles.itemDescription}>
              <Text style={styles.title}>Tan Purple Heavy Sweatshirt</Text>
              <View style={styles.row}>
                <Text style={styles.darkLightText}>Size: S</Text>
                <Text style={styles.darkLightText}>Quantity: 10</Text>
              </View>
            </View>
          </View>
        </View>
        <PriceDetails />
      </ScrollView>
      <View style={styles.footer}>
        <Pressable style={styles.placeOrderButton} onPress={navigateToPayment}>
          <Text style={styles.placeOrderText}>Proceed Checkout</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default AddressScreen;
