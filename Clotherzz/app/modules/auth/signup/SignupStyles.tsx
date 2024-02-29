import { StyleSheet } from 'react-native';
import {
  Colors,
  horizontalScale,
  moderateScale,
  verticleScale,
} from '../../../themes';
import { Dimensions } from 'react-native';

const width = Dimensions.get('window').width;

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
  appName: {
    fontWeight: 'bold',
    color: Colors.darkBlue,
    fontSize: moderateScale(25),
    alignSelf: 'center',
    marginTop: verticleScale(5),
  },
  purpleText: {
    color: '#B8A9F9',
    textTransform: 'uppercase',
  },
  diveIntoView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: horizontalScale(10),
  },
  hrLine: {
    flex: 1,
    borderTopWidth: 1,
    height: verticleScale(1),
  },
  diveIntoText: {
    color: Colors.dark,
    fontWeight: '500',
    marginHorizontal: horizontalScale(4),
  },
  bgImage: {
    width,
    height: verticleScale(800),
  },
  textInputView: {
    backgroundColor: Colors.light,
    elevation: 2,
    marginHorizontal: horizontalScale(10),
    borderRadius: moderateScale(4),
    borderColor: Colors.offShade,
    borderWidth: 1,
    marginTop: verticleScale(50),
    flexDirection: 'row',
    alignItems: 'center',
    width: '95%',
    alignSelf: 'center',
  },
  countryCode: {
    backgroundColor: Colors.purple,
    height: verticleScale(100),
    textAlignVertical: 'center',
    paddingHorizontal: horizontalScale(15),
    fontWeight: 'bold',
    fontSize: moderateScale(18),
    color: Colors.dark,
    borderTopRightRadius: moderateScale(5),
    borderBottomRightRadius: moderateScale(5),
  },
  textInput: {
    padding: 0,
    height: verticleScale(100),
    paddingLeft: horizontalScale(10),
    fontSize: moderateScale(18),
    color: Colors.dark,
    fontWeight: '500',
    width: '70%',
  },
  loginButton: {
    backgroundColor: Colors.purple,
    marginHorizontal: horizontalScale(10),
    borderRadius: moderateScale(4),
    marginTop: verticleScale(50),
    width: '95%',
    alignSelf: 'center',
    height: verticleScale(90),
    justifyContent: 'center',
  },
  loginText: {
    color: Colors.light,
    fontWeight: 'bold',
    alignSelf: 'center',
    fontSize: moderateScale(18),
  },
  horizontalSpacing: {
    marginHorizontal: horizontalScale(10),
    marginTop: verticleScale(20),
  },
  termsAndCondition: {
    textAlign: 'center',
    alignSelf: 'center',
    color: Colors.dark,
    marginTop: verticleScale(10),
  },
  underLineText: {
    textDecorationLine: 'underline',
  },
});

export default styles;
