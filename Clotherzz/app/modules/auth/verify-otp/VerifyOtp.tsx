import {
  View,
  Text,
  ImageBackground,
  StatusBar,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
} from 'react-native';
import React from 'react';
import { Images } from '../../../assets';
import useVerifyOtp, { OtpState } from './useVerifyOtp';
import styles from './VerifyOtpStyles';
import { ScreenStrings } from '../../../constants';

const VeriftOtp = () => {
  const {
    inputs,
    newOtp,
    handleChange,
    inputRef,
    nextInput,
    count,
    handlePress,
    handleSubmit,
    resendOtp,
    params,
  } = useVerifyOtp();

  return (
    <View style={styles.container}>
      <KeyboardAvoidingView behavior="position">
        <ImageBackground source={Images.signup} style={styles.bgImage}>
          <StatusBar translucent backgroundColor="transparent" />
        </ImageBackground>
        <Text style={styles.verifyOtpNumber}>
          {ScreenStrings.verifyOtp} {ScreenStrings.sendToNumber} {params}{' '}
        </Text>
        <View style={styles.inputWrapper}>
          {inputs.map((value, index) => {
            return (
              <TextInput
                ref={nextInput === index ? inputRef : null}
                value={newOtp[index as keyof OtpState]}
                key={index.toString()}
                keyboardType="numeric"
                maxLength={1}
                style={styles.textInputComponent}
                onChangeText={text => handleChange(text, index)}
                onKeyPress={({ nativeEvent }) => {
                  handlePress(nativeEvent, index);
                }}
                onSubmitEditing={handleSubmit}
              />
            );
          })}
        </View>
        <View style={styles.resendOtp}>
          {count === 0 ? (
            <Text
              style={[styles.resendOTPText, styles.colorText]}
              onPress={resendOtp}>
              {ScreenStrings.resendOtp}
            </Text>
          ) : (
            <Text style={styles.resendOTPText}>
              {ScreenStrings.resendOtp} {ScreenStrings.availablein} {count}s
            </Text>
          )}
        </View>
        <TouchableOpacity style={styles.loginButton} onPress={handleSubmit}>
          <Text style={styles.continue}>{ScreenStrings.verifyOtp}</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
};

export default VeriftOtp;
