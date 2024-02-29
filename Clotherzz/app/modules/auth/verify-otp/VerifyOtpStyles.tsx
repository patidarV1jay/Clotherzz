import { StyleSheet } from 'react-native';
import {
  Colors,
  horizontalScale,
  moderateScale,
  verticleScale,
} from '../../../themes';
import { Dimensions } from 'react-native';

const width = Dimensions.get('window').width;
const inputWidth = width / 8;
const padding = width / 12;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    height: verticleScale(650),
    width: horizontalScale(300),
    borderTopRightRadius: moderateScale(100),
    borderTopLeftRadius: moderateScale(100),
    alignSelf: 'center',
    marginTop: verticleScale(10),
  },

  bgImage: {
    width,
    height: verticleScale(800),
  },
  loginButton: {
    backgroundColor: Colors.purple,
    marginHorizontal: horizontalScale(10),
    borderRadius: moderateScale(4),
    marginTop: verticleScale(50),
    width: '85%',
    alignSelf: 'center',
    height: verticleScale(90),
    justifyContent: 'center',
  },
  textInputComponent: {
    borderWidth: 1,
    width: inputWidth,
    borderRadius: moderateScale(5),
    marginRight: horizontalScale(5),
    color: Colors.dark,
    fontWeight: '500',
    fontSize: moderateScale(18),
    textAlign: 'center',
  },
  inputWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingHorizontal: padding,
  },

  resendOtp: {
    paddingHorizontal: padding,
    marginTop: verticleScale(20),
  },
  resendOTPText: {
    fontWeight: '500',
    fontSize: moderateScale(15),
    color: Colors.gray
  },
  colorText: {
    color: Colors.cornFlowerBlue,
    textDecorationLine: 'underline',
  },
  continue: {
    color: Colors.light,
    alignSelf: 'center',
    fontWeight: 'bold',
    fontSize: moderateScale(16),
  },
  verifyOtpNumber: {
    color: Colors.dark,
    fontSize: moderateScale(15),
    paddingHorizontal: padding,
    marginVertical: verticleScale(30),
    fontWeight: '500'
  },
});

export default styles;
