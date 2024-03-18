import React from 'react';
import { Animated, Text, TouchableOpacity, View } from 'react-native';
import {
  Colors,
  horizontalScale,
  moderateScale,
  verticleScale,
} from '../../../../themes';
import styles from './ProgressDetailtsStyles';
import useProgress from './useProgress';
import { Check } from 'phosphor-react-native';

const Progress = () => {
  const {
    selectedStep,
    handleSlider,
    progress1,
    progress2,
    progress3,
    progress4,
  } = useProgress();
  return (
    <View style={styles.container}>
      <View style={styles.wrapperContainer}>
        <View>
          <View
            style={[
              styles.dot,
              {
                backgroundColor: selectedStep > 0 ? Colors.green : Colors.gray,
              },
            ]}>
            {selectedStep > 0 ? (
              <Check color={Colors.light} size={moderateScale(24)} />
            ) : (
              <Check color={Colors.offShade} size={moderateScale(24)} />
            )}
          </View>
          <Text style={styles.orderStatusText}>out for delivery</Text>
          <View style={styles.grayLine} />
        </View>
        <View>
          <View
            style={[
              styles.dot,
              {
                backgroundColor: selectedStep > 1 ? Colors.green : Colors.gray,
              },
            ]}>
            {selectedStep > 1 ? (
              <Check color={Colors.light} size={moderateScale(24)} />
            ) : (
              <Check color={Colors.offShade} size={moderateScale(24)} />
            )}
          </View>
          <Text style={styles.orderStatusText}>out for delivery</Text>
          <View style={styles.grayLine} />
        </View>
        <View>
          <View
            style={[
              styles.dot,
              {
                backgroundColor: selectedStep > 2 ? Colors.green : Colors.gray,
              },
            ]}>
            {selectedStep > 2 ? (
              <Check color={Colors.light} size={moderateScale(24)} />
            ) : (
              <Check color={Colors.offShade} size={moderateScale(24)} />
            )}
          </View>
          <Text style={styles.orderStatusText}>out for delivery</Text>
          <View style={styles.grayLine} />
        </View>
        <View>
          <View
            style={[
              styles.dot,
              {
                backgroundColor: selectedStep > 3 ? Colors.green : Colors.gray,
              },
            ]}>
            {selectedStep > 3 ? (
              <Check color={Colors.light} size={moderateScale(24)} />
            ) : (
              <Check color={Colors.offShade} size={moderateScale(24)} />
            )}
          </View>
          <Text style={styles.orderStatusText}>out for delivery</Text>
          <View style={styles.grayLine} />
        </View>
        <View>
          <View
            style={[
              styles.dot,
              {
                backgroundColor: selectedStep > 4 ? Colors.green : Colors.gray,
              },
            ]}>
            {selectedStep > 4 ? (
              <Check color={Colors.light} size={moderateScale(24)} />
            ) : (
              <Check color={Colors.offShade} size={moderateScale(24)} />
            )}
          </View>
          <Text style={styles.orderStatusText}>out for delivery</Text>
        </View>
      </View>
      <View
        style={[
          styles.wrapperContainer,
          { position: 'absolute', paddingHorizontal: horizontalScale(10) },
        ]}>
        <Animated.View
          style={{
            height: progress1,
            backgroundColor: Colors.green,
            width: 2,
            marginTop: verticleScale(54),
            marginLeft: horizontalScale(10),
          }}
        />
        <Animated.View
          style={{
            height: progress2,
            backgroundColor: Colors.green,
            width: 2,
            marginTop: verticleScale(54),
            marginLeft: horizontalScale(10),
          }}
        />
        <Animated.View
          style={{
            height: progress3,
            backgroundColor: Colors.green,
            width: 2,
            marginTop: verticleScale(54),
            marginLeft: horizontalScale(10),
          }}
        />
        <Animated.View
          style={{
            height: progress4,
            backgroundColor: Colors.green,
            width: 2,
            marginTop: verticleScale(54),
            marginLeft: horizontalScale(10),
          }}
        />
      </View>
      <TouchableOpacity
        style={{ backgroundColor: 'black' }}
        onPress={handleSlider}>
        <Text>jey</Text>
      </TouchableOpacity>
    </View>
  );
};
export default Progress;
