import { StyleSheet } from 'react-native';
import {
  Colors,
  horizontalScale,
  moderateScale,
  verticleScale,
} from '../../themes';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.light,
  },
  wrapperContainer: {
    marginHorizontal: horizontalScale(10),
    marginTop: verticleScale(50),
  },
  myAddressesText: {
    fontWeight: '400',
    fontSize: moderateScale(18),
    color: Colors.dark,
  },
  section: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.light,
  },
  subTitle: {
    fontWeight: '400',
    color: Colors.gray,
    marginTop: verticleScale(5),
  },
  rightColumn: {
    marginLeft: horizontalScale(20),
  },
  hrLine: {
    borderTopWidth: 1,
    borderColor: Colors.offShade,
    marginTop: verticleScale(40),
    marginBottom: verticleScale(60),
  },
  bottomContainer: {
    backgroundColor: Colors.fadeWhite,
    paddingHorizontal: horizontalScale(20),
    paddingTop: verticleScale(20),
  },
  bottomText: {
    color: Colors.dark,
    fontWeight: '500',
    fontSize: moderateScale(15),
    marginBottom: verticleScale(25),
  },
  button: {
    backgroundColor: Colors.purple,
    marginTop: verticleScale(35),
    height: verticleScale(80),
    borderRadius: moderateScale(5),
    alignItems: 'center',
    justifyContent: 'center',
  },
  signOut: {
    color: Colors.light,
    fontWeight: '500',
    fontSize: moderateScale(16),
  },
});

export default styles;
