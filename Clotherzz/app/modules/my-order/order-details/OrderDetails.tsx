import React from 'react';
import { Image, ScrollView, Text, View } from 'react-native';
import { Images } from '../../../assets';
import styles from './OrderDetailsStyles';
import { Progress } from './progress-details';

const OrderDetails = () => {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.wrapperContainer}>
        <View style={styles.header}>
          <View style={[styles.rowContainer, styles.row]}>
            <Text style={styles.regularDarkText}>
              <Text style={styles.grayText}>Order No. </Text> 8587455
            </Text>
            <Text style={styles.grayText}>05-12-2023</Text>
          </View>
          <View style={[styles.rowContainer, styles.row]}>
            <Text style={styles.regularDarkText}>
              <Text style={styles.grayText}>Tracking No. </Text> 166333288666
            </Text>
            <Text style={styles.regularPurpleText}>Invoice</Text>
          </View>
        </View>
        <View style={[styles.itemContainer, styles.row]}>
          <Image source={Images.signup} style={styles.itemImage} />
          <View style={styles.itemDescription}>
            <Text style={styles.boldDarkText}>PullOver</Text>
            <Text style={styles.grayText}>SweatShirts</Text>
            <View style={[styles.rowContainer, styles.row]}>
              <Text style={styles.regularDarkText}>Size: S</Text>
              <Text style={styles.regularDarkText}>Quantity: 5</Text>
            </View>
            <Text style={styles.regularDarkText}>Price: ₹500</Text>
          </View>
        </View>
        <View style={styles.topSpacing}>
          <Text style={[styles.grayText, styles.bottomSpacing]}>
            Order Status
          </Text>
          <Progress />
        </View>
        <View style={styles.topSpacing}>
          <Text style={[styles.grayText, styles.bottomSpacing]}>
            Order Information
          </Text>
          <View style={styles.itemContainer}>
            <Text style={styles.grayText}>Shipping Details:</Text>
            <Text style={styles.regularDarkText}>John Doe</Text>
            <Text style={styles.regularDarkText}>
              A-44, Sector 15, Near Sector 15 Metro Station
            </Text>
            <Text style={styles.regularDarkText}>9874561230</Text>
            <Text style={styles.regularDarkText}>City Name, 201301</Text>
            <Text style={[styles.grayText, styles.topSpacing]}>
              Payment Mode:
            </Text>
            <Text style={styles.regularDarkText}>Cash On Delivery</Text>
          </View>
        </View>
        
      </ScrollView>
    </View>
  );
};

export default OrderDetails;
