import { View, Text, Pressable, Image } from 'react-native';
import React from 'react';
import styles from './CartScreenStyles';
import {
  CaretDown,
  MapPin,
  ShoppingCart,
  Trash,
  Wallet,
} from 'phosphor-react-native';
import { Colors, moderateScale } from '../../themes';
import useCart from './useCart';
import { Images } from '../../assets';
import SizeAndQtyModal from './SizeAndQtyModal';
import { PriceDetails } from '../../components';
import { HandCoins, SealCheck } from 'phosphor-react-native';

const CartScreen = () => {
  const {
    navigateToAddress,
    handleVisibility,
    isVisible,
    modalData,
    handleSizeAndQuantity,
    quantity,
    size,
  } = useCart();

  return (
    <View style={styles.container}>
      <View style={styles.wrapperContainer}>
        <View style={styles.header}>
          <ShoppingCart size={28} weight="bold" color={Colors.purple} />
          <View style={styles.hrLine} />
          <Pressable onPress={navigateToAddress}>
            <MapPin size={28} />
          </Pressable>
          <View style={styles.hrLine} />
          <Wallet size={28} />
        </View>
        <View style={styles.cartItemContainer}>
          <Pressable style={styles.trashIcon}>
            <Trash color={Colors.red} size={moderateScale(22)} />
          </Pressable>
          <Image source={Images.signup} style={styles.productImage} />
          <View style={styles.itemDescription}>
            <Text style={styles.subTitle}>Sweatshirt</Text>
            <Text style={styles.title}>Tan Purple Heavy Sweatshirt</Text>
            <View style={styles.row}>
              <Pressable
                style={styles.measureContainer}
                onPress={() => handleVisibility('size')}>
                <Text style={styles.text}>Size:</Text>
                <Text style={styles.text}>{size}</Text>
                <CaretDown weight="fill" size={moderateScale(18)} />
              </Pressable>
              <Pressable
                style={styles.measureContainer}
                onPress={() => handleVisibility('quantity')}>
                <Text style={styles.text}>Qty:</Text>
                <Text style={styles.text}>{quantity}</Text>
                <CaretDown weight="fill" size={moderateScale(18)} />
              </Pressable>
            </View>
            <Text style={styles.text}>₹ 1500</Text>
          </View>
        </View>
        <PriceDetails />
        <View style={styles.iconsContainer}>
          <View style={styles.iconContainer}>
            <HandCoins
              color={Colors.gray}
              size={moderateScale(35)}
              weight="regular"
            />
            <Text style={styles.iconText}>Secure Payments</Text>
          </View>
          <View style={styles.iconContainer}>
            <SealCheck
              color={Colors.gray}
              size={moderateScale(35)}
              weight="regular"
            />
            <Text style={styles.iconText}>Quality Assurance</Text>
          </View>
        </View>
      </View>
      <View style={styles.footer}>
        <Pressable style={styles.placeOrderButton}>
          <Text style={styles.placeOrderText}>Place Order</Text>
        </Pressable>
      </View>
      <SizeAndQtyModal
        isVisible={isVisible}
        handleVisible={handleVisibility}
        modalData={modalData}
        handleSizeAndQuantity={handleSizeAndQuantity}
      />
    </View>
  );
};

export default CartScreen;