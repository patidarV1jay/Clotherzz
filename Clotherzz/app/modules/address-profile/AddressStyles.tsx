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
    bottom: verticleScale(10),
    right: horizontalScale(10),
  },
  corner: {
    right: 0,
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
  darkText: {
    fontWeight: '500',
    fontSize: moderateScale(18),
    color: Colors.dark,
    marginBottom: verticleScale(15),
  },
  grayText: {
    fontWeight: '500',
    fontSize: moderateScale(15),
    color: Colors.gray,
    marginBottom: verticleScale(5),
  },
  addressView: {
    backgroundColor: Colors.light,
    padding: moderateScale(10),
    borderRadius: moderateScale(10),
    paddingHorizontal: horizontalScale(15),
    marginBottom: verticleScale(40)
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingHorizontal: horizontalScale(20),
  },
  wrapperContainer: {
    marginHorizontal: horizontalScale(10),
    marginTop: verticleScale(20),
  },
  buttonText: {
    fontWeight: '500',
    fontSize: moderateScale(16),
  },
  hrLine: {
    borderTopWidth: 1,
    borderColor: Colors.offShade,
    marginVertical: verticleScale(25),
  },
  edit: {
    color: Colors.purple,
  },
  delete: {
    color: Colors.red,
  },
  vrLine: {
    borderRightWidth: 1,
    height: verticleScale(50),
    borderColor: Colors.offShade,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  default: {
    backgroundColor: Colors.purple,
    color: Colors.light,
    padding: moderateScale(4),
    paddingHorizontal: horizontalScale(8),
    fontSize: moderateScale(14),
    borderRadius: moderateScale(5),
  },
  proceed: {
    flex: 1,
  },
});

export default styles;
