import { Image, Text, TouchableOpacity, View } from 'react-native';
import { Images } from '../../assets';
import styles from './MyOrderStyles';
import useMyOrder from './useMyOrder';

const MyOrder = () => {
  const { navigateToOrderDetails } = useMyOrder();
  return (
    <>
      {false ? (
        <View style={styles.emptyOrder}>
          <Image source={Images.noOrder} style={styles.noOrder} />
          <Text style={styles.noOrderText}>Time to fill your cart!</Text>
          <TouchableOpacity style={[styles.button, styles.moreWidth]}>
            <Text style={styles.buttonText}>Fill Your Cart</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <View style={styles.container}>
          <View style={styles.wrapperContainer}>
            <View style={styles.orderContianer}>
              <View style={styles.rowContainer}>
                <Text style={styles.orderNoText}>Order No. 1947852</Text>
                <Text style={styles.grayText}>05-12-2023</Text>
              </View>
              <Text style={styles.grayText}>
                Tracking No.{' '}
                <Text style={styles.orderNoText}>IWERTD82657855</Text>
              </Text>
              <View style={[styles.rowContainer, styles.bottomSpace]}>
                <Text style={styles.grayText}>
                  Quantity: <Text style={styles.orderNoText}>3</Text>
                </Text>
                <Text style={styles.grayText}>
                  Total Amount: <Text style={styles.orderNoText}>₹500</Text>
                </Text>
              </View>
              <View style={styles.rowContainer}>
                <TouchableOpacity
                  style={styles.button}
                  onPress={navigateToOrderDetails}>
                  <Text style={styles.buttonText}>Details</Text>
                </TouchableOpacity>
                <Text style={styles.greenText}>Delivered</Text>
              </View>
            </View>
          </View>
        </View>
      )}
    </>
  );
};

export default MyOrder;
