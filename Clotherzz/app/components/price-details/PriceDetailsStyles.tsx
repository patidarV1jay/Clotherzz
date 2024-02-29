import { StyleSheet } from 'react-native';
import { Colors, moderateScale, verticleScale } from '../../themes';

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.light,
    borderRadius: moderateScale(5),
    padding: moderateScale(10),
  },
  priceSummaryText: {
    fontWeight: '500',
    color: Colors.dark,
    fontSize: moderateScale(14),
  },
  priceTitle: {
    color: Colors.dark,
    marginTop: verticleScale(25),
    fontSize: moderateScale(14),
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  greenColor: {
    color: Colors.green,
    fontWeight: 'bold',
  },
});

export default styles;
