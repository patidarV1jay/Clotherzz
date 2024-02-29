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
    position: 'relative',
  },
  addButton: {
    position: 'absolute',
    bottom: verticleScale(20),
    right: horizontalScale(10),
  },
  noAddressImage: {
    height: verticleScale(600),
    width: horizontalScale(300),
    alignSelf: 'center',
  },
  noAddressText: {
    alignSelf: 'center',
    fontSize: moderateScale(18),
    fontWeight: '500',
    color: Colors.dark,
  },
});

export default styles;
