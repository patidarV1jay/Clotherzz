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
  },
  wrapperContainer: {
    marginTop: verticleScale(25),
    marginHorizontal: horizontalScale(15),
    marginBottom: verticleScale(10),
  },
  heading: {
    fontWeight: 'bold',
    fontSize: moderateScale(20),
    color: Colors.dark,
    marginBottom: verticleScale(25),
  },
  smallText: {
    fontSize: moderateScale(13),
    color: Colors.lightGray,
  },
  mediumText: {
    fontSize: moderateScale(15),
    color: Colors.dark,
    fontWeight: '500',
    marginTop: verticleScale(25),
    marginBottom: verticleScale(5),
  },
  largeText: {
    fontSize: moderateScale(18),
    color: Colors.dark,
    fontWeight: '500',
    marginTop: verticleScale(25),
    marginBottom: verticleScale(5),
  },
});

export default styles;
