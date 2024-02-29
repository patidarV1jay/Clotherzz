import { View, Text, Image, Pressable } from 'react-native';
import styles from './PaymentScreenStyles';
import {
  ShoppingCart,
  MapPin,
  Wallet,
  Circle,
  RadioButton,
} from 'phosphor-react-native';
import {
  Colors,
  horizontalScale,
  moderateScale,
  verticleScale,
} from '../../themes';
import { Images } from '../../assets';
import usePaymentScreen from './usePaymentScreen';
import { PriceDetails } from '../../components';

const PaymentScreen = () => {
  const { isSelected, handleUpiSelection, upiMethod } = usePaymentScreen();
  return (
    <View style={styles.container}>
      <View style={styles.wrapperContainer}>
        <View style={styles.header}>
          <ShoppingCart
            size={moderateScale(28)}
            weight="bold"
            color={Colors.purple}
          />
          <View style={[styles.hrLine, styles.colorLine]} />
          <MapPin
            size={moderateScale(28)}
            weight="bold"
            color={Colors.purple}
          />
          <View style={[styles.hrLine, styles.colorLine]} />
          <Wallet
            size={moderateScale(28)}
            weight="bold"
            color={Colors.purple}
          />
        </View>
        <Text style={styles.onlineOptionsText}>UPI Options</Text>
        <View style={styles.payOptionContainer}>
          <View style={styles.row}>
            {upiMethod === 'PhonePe' && isSelected ? (
              <Pressable>
                <RadioButton
                  weight="fill"
                  color={Colors.purple}
                  size={moderateScale(28)}
                />
              </Pressable>
            ) : (
              <Pressable onPress={() => handleUpiSelection('PhonePe')}>
                <Circle weight="regular" size={moderateScale(28)} />
              </Pressable>
            )}
            <Image source={Images.phonepe} style={styles.payIcon} />
            <Text style={styles.payOptionText}>PhonePe</Text>
          </View>
          <View style={styles.row}>
            {upiMethod === 'GooglePay' && isSelected ? (
              <Pressable>
                <RadioButton
                  weight="fill"
                  color={Colors.purple}
                  size={moderateScale(28)}
                />
              </Pressable>
            ) : (
              <Pressable onPress={() => handleUpiSelection('GooglePay')}>
                <Circle weight="regular" size={moderateScale(28)} />
              </Pressable>
            )}
            <Image source={Images.gpay} style={styles.payIcon} />
            <Text style={styles.payOptionText}>Google Pay</Text>
          </View>
        </View>
        <Text style={styles.onlineOptionsText}>Cash on Delivery Options</Text>
        <View style={[styles.payOptionContainer, styles.bottomSpacing]}>
          <View style={styles.row}>
            {upiMethod === 'COD' && isSelected ? (
              <Pressable>
                <RadioButton
                  weight="fill"
                  color={Colors.purple}
                  size={moderateScale(28)}
                />
              </Pressable>
            ) : (
              <Pressable onPress={() => handleUpiSelection('COD')}>
                <Circle weight="regular" size={moderateScale(28)} />
              </Pressable>
            )}
            <Text style={styles.payOptionText}>Cash On Delivery</Text>
          </View>
        </View>
        <PriceDetails />
      </View>
      <View style={styles.footer}>
        <View style={styles.priceContainer}>
          <Text style={styles.netPay}>Net Pay</Text>
          <Text style={styles.price}>₹ 500</Text>
        </View>
        <Pressable style={styles.placeOrderButton}>
          <Text style={styles.placeOrderText}>Pay Securely</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default PaymentScreen;
