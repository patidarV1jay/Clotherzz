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
import styles from './SignupStyles';
import useSignup from './useSignup';
import { ScreenStrings } from '../../../constants';
import { Colors } from '../../../themes';

const Signup = () => {
  const { number, handleNumber, handleSubmit, navigateToTnC } = useSignup();

  return (
    <View style={styles.container}>
      <KeyboardAvoidingView behavior="position">
        <ImageBackground source={Images.signup} style={styles.bgImage}>
          <StatusBar translucent backgroundColor="transparent" />
        </ImageBackground>
        <View>
          <View style={styles.diveIntoView}>
            <View style={styles.hrLine} />
            <Text style={styles.diveIntoText}>{ScreenStrings.diveInto}</Text>
            <View style={styles.hrLine} />
          </View>
          <Text style={styles.appName}>
            Clother<Text style={styles.purpleText}>zz</Text>
          </Text>
        </View>
        <View style={styles.textInputView}>
          <Text style={styles.countryCode}>+91</Text>
          <TextInput
            placeholder="Enter Your Phone Number"
            style={styles.textInput}
            value={number}
            onChangeText={handleNumber}
            maxLength={10}
            onSubmitEditing={handleSubmit}
            placeholderTextColor={Colors.offShade}
          />
        </View>
        <TouchableOpacity style={styles.loginButton} onPress={handleSubmit}>
          <Text style={styles.loginText}>{ScreenStrings.proceed}</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
      <Text style={styles.termsAndCondition}>
        {ScreenStrings.tnC}{' '}
        <Text style={styles.underLineText} onPress={navigateToTnC}>{ScreenStrings.termsOfUse}</Text>{' '}
        {ScreenStrings.and}{' '}
        <Text style={styles.underLineText}>
          {' '}
          <Text onPress={navigateToTnC}>{ScreenStrings.privacyPolicy}</Text>
        </Text>
      </Text>
    </View>
  );
};

export default Signup;
