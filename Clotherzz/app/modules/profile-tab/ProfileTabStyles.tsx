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
    marginTop: verticleScale(5)
  },
  rightColumn: {
    marginLeft: horizontalScale(20),
  },
  hrLine:{
    borderTopWidth: 1,
    borderColor: Colors.offShade,
    marginTop: verticleScale(40)
    
  }
});

export default styles;
