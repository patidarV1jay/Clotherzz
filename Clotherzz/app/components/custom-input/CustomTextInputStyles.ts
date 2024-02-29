import { StyleSheet } from 'react-native';
import {
  Colors,
  horizontalScale,
  moderateScale,
  verticleScale,
} from '../../themes';

const styles = StyleSheet.create({
  container: {
    marginHorizontal: horizontalScale(10),
    marginBottom: verticleScale(30),
  },
  errorText: {
    color: Colors.red,
  },
  heading: {
    fontWeight: '500',
    fontSize: moderateScale(15),
    marginBottom: verticleScale(5),
    color: Colors.gray,
  },
  input: {
    borderRadius: moderateScale(5),
    color: Colors.dark,
    fontWeight: '500',
    fontSize: moderateScale(16),
    paddingLeft: horizontalScale(10),
    borderWidth: 1,
    borderColor: Colors.offShade,
    height: verticleScale(90)
  },
});

export default styles;
