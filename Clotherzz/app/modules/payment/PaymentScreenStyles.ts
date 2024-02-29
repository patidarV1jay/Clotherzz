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
  wrapperContainer: {
    marginHorizontal: horizontalScale(10),
  },
  onlineOptionsText: {
    fontWeight: '500',
    color: Colors.dark,
    fontSize: moderateScale(16),
    marginTop: verticleScale(20),
    marginBottom: verticleScale(10),
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: verticleScale(20),
  },
  payOptionText: {
    color: Colors.dark,
    fontWeight: '500',
    fontSize: moderateScale(16),
    marginLeft: horizontalScale(5),
  },
  payOptionContainer: {
    backgroundColor: Colors.light,
    padding: moderateScale(15),
    borderRadius: moderateScale(5),
    marginBottom: verticleScale(20),
  },
  payIcon: {
    height: verticleScale(60),
    width: horizontalScale(28),
    marginLeft: horizontalScale(15),
  },
  bottomSpacing: {
    marginBottom: verticleScale(35),
  },
  footer: {
    backgroundColor: Colors.purple,
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: verticleScale(120),
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: horizontalScale(10),
    alignItems: 'center',
  },
  placeOrderText: {
    color: Colors.purple,
    fontWeight: '500',
    alignSelf: 'center',
    fontSize: moderateScale(16),
  },
  placeOrderButton: {
    backgroundColor: Colors.light,
    width: '60%',
    height: verticleScale(85),
    justifyContent: 'center',
    borderRadius: moderateScale(10),
  },
  netPay:{
    fontSize: moderateScale(12),
    color: Colors.light
  },
  price:{
    fontSize: moderateScale(20),
    color: Colors.light,
    fontWeight: '500'
  },
  priceContainer:{
    marginLeft: horizontalScale(10)
  }
});

export default styles;
