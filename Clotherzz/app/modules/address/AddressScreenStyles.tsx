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
    marginHorizontal: horizontalScale(10),
  },
  header: {
    backgroundColor: Colors.light,
    flexDirection: 'row',
    paddingHorizontal: horizontalScale(20),
    borderRadius: moderateScale(5),
    paddingVertical: verticleScale(10),
    marginVertical: verticleScale(20),
  },
  hrLine: {
    flex: 1,
    borderTopWidth: 1,
    alignSelf: 'center',
  },
  colorLine: {
    borderColor: Colors.purple,
  },
  addAddressText: {
    fontWeight: '500',
    color: Colors.light,
    textAlign: 'center',
    fontSize: moderateScale(15),
  },
  addAddressButton: {
    backgroundColor: Colors.purple,
    height: verticleScale(80),
    justifyContent: 'center',
    borderRadius: moderateScale(5),
    marginVertical: verticleScale(20),
  },
  addressView: {
    backgroundColor: Colors.light,
    padding: moderateScale(10),
    marginBottom: verticleScale(50),
    borderRadius: moderateScale(5),
  },
  addressName: {
    fontWeight: '500',
    color: Colors.dark,
    fontSize: moderateScale(18),
    marginBottom: verticleScale(7),
  },
  addressText: {
    color: Colors.dark,
    fontSize: moderateScale(15),
    marginBottom: verticleScale(4),
  },
  editAddressButton: {
    backgroundColor: Colors.purple,
    borderRadius: moderateScale(10),
  },
  footer: {
    backgroundColor: Colors.purple,
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: verticleScale(120),
    justifyContent: 'center',
  },
  placeOrderText: {
    color: Colors.purple,
    fontWeight: '500',
    alignSelf: 'center',
    fontSize: moderateScale(16),
  },
  placeOrderButton: {
    backgroundColor: Colors.light,
    marginHorizontal: horizontalScale(20),
    height: verticleScale(80),
    justifyContent: 'center',
    borderRadius: moderateScale(10),
  },
  row: {
    flexDirection: 'row',
    marginBottom: verticleScale(20),
  },
  itemDescription: {
    marginLeft: horizontalScale(15),
  },
  title: {
    fontWeight: '500',
    fontSize: moderateScale(15),
    color: Colors.dark,
    marginBottom: verticleScale(10),
  },
  darkLightText: {
    color: Colors.dark,
    fontSize: moderateScale(13),
    marginRight: horizontalScale(10),
  },
});

export default styles;
