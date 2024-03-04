import { Check } from 'phosphor-react-native';
import React from 'react';
import { Animated, Text, View } from 'react-native';
import { Colors, moderateScale, verticleScale } from '../../../../themes';
import styles from './ProgressDetailtsStyles';
import useProgress from './useProgress';

const Progress = () => {
  const {
    selectedStep,
    progress1,
    progress2,
    progress3,
    progress4,
    handleSlider,
  } = useProgress();

  return (
    <View style={styles.container}>
      <View style={styles.wrapperContainer}>
        <View
          style={[
            styles.dot,
            { backgroundColor: selectedStep > 0 ? Colors.green : Colors.gray },
          ]}>
          <View>
            {selectedStep > 0 ? (
              <Check color={Colors.light} size={moderateScale(18)} />
            ) : (
              <Check color={Colors.fadeWhite} size={moderateScale(18)} />
            )}
            <Text
              style={[
                styles.text,
                selectedStep > 0 ? styles.greenColor : styles.grayColor,
              ]}>
              Confirmed
            </Text>
          </View>
        </View>

        <View style={styles.grayLine} />
        <View
          style={[
            styles.dot,
            {
              backgroundColor:
                selectedStep > 1 ? Colors.green : Colors.offShade,
            },
          ]}>
          <View>
            {selectedStep > 1 ? (
              <Check color={Colors.light} size={moderateScale(18)} />
            ) : (
              <Check color={Colors.fadeWhite} size={moderateScale(18)} />
            )}
            <Text
              style={[
                styles.text,
                selectedStep > 1 ? styles.greenColor : styles.grayColor,
              ]}>
              Preparing Your Order
            </Text>
          </View>
        </View>
        <View style={styles.grayLine} />
        <View
          style={[
            styles.dot,
            {
              backgroundColor:
                selectedStep > 2 ? Colors.green : Colors.offShade,
            },
          ]}>
          <View>
            {selectedStep > 2 ? (
              <Check color={Colors.light} size={moderateScale(18)} />
            ) : (
              <Check color={Colors.fadeWhite} size={moderateScale(18)} />
            )}
            <Text
              style={[
                styles.text,
                selectedStep > 2 ? styles.greenColor : styles.grayColor,
              ]}>
              Shipped
            </Text>
          </View>
        </View>
        <View style={styles.grayLine} />
        <View
          style={[
            styles.dot,
            {
              backgroundColor:
                selectedStep > 3 ? Colors.green : Colors.offShade,
            },
          ]}>
          <View>
            {selectedStep > 3 ? (
              <Check color={Colors.light} size={moderateScale(18)} />
            ) : (
              <Check color={Colors.fadeWhite} size={moderateScale(18)} />
            )}
            <Text
              style={[
                styles.text,
                selectedStep > 3 ? styles.greenColor : styles.grayColor,
              ]}>
              Out For Delivery
            </Text>
          </View>
        </View>
        <View style={styles.grayLine} />
        <View
          style={[
            styles.dot,
            {
              backgroundColor:
                selectedStep > 4 ? Colors.green : Colors.offShade,
            },
          ]}>
          <View>
            {selectedStep > 4 ? (
              <Check color={Colors.light} size={moderateScale(18)} />
            ) : (
              <Check color={Colors.fadeWhite} size={moderateScale(18)} />
            )}
            <Text
              style={[
                styles.text,
                selectedStep > 4 ? styles.greenColor : styles.grayColor,
              ]}>
              Delivered
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.absoluteContainer}>
        <Animated.View
          style={{
            width: 2,
            height: progress1,
            marginTop: verticleScale(54),
            backgroundColor: 'green',
          }}
        />
        <Animated.View
          style={{
            width: 2,
            height: progress2,
            marginTop: verticleScale(54),
            backgroundColor: 'green',
          }}
        />
        <Animated.View
          style={{
            width: 2,
            height: progress3,
            marginTop: verticleScale(54),
            backgroundColor: 'green',
          }}
        />
        <Animated.View
          style={{
            width: 2,
            height: progress4,
            marginTop: verticleScale(54),
            backgroundColor: 'green',
          }}
        />
      </View>
    </View>
  );
};
export default Progress;
