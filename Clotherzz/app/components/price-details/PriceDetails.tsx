import { View, Text } from 'react-native';
import React, { useState } from 'react';
import styles from './PriceDetailsStyles';

const PriceDetails = () => {
  return (
    <View
      style={styles.container}
      key={1}
      onLayout={event => {
        const layout = event.nativeEvent.layout;
        console.log(layout)
      }}>
      <Text style={styles.priceSummaryText}>Price Summary</Text>
      <View style={styles.priceContainer}>
        <Text style={styles.priceTitle}>Total MRP</Text>
        <Text style={styles.priceTitle}>₹ 500</Text>
      </View>
      <View style={styles.priceContainer}>
        <Text style={styles.priceTitle}>Delivery Fee</Text>
        <Text style={styles.priceTitle}>₹ 100</Text>
      </View>
      <View style={styles.priceContainer}>
        <Text style={styles.priceTitle}>Cart Discount</Text>
        <Text style={[styles.priceTitle, styles.greenColor]}>-₹100</Text>
      </View>
      <View style={styles.priceContainer}> 
        <Text style={styles.priceTitle}>Net Payable</Text>
        <Text style={styles.priceTitle}>₹ 500</Text>
      </View>
    </View>
  );
};

export default PriceDetails;
