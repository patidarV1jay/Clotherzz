import { StyleSheet } from 'react-native';
import {
  Colors,
  horizontalScale,
  moderateScale,
  verticleScale,
} from '../../../themes';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  wrapperContainer: {
    marginTop: verticleScale(20),
    marginHorizontal: horizontalScale(10),
  },
  header: {
    marginBottom: verticleScale(40),
  },
  itemContainer: {
    backgroundColor: Colors.light,
    padding: moderateScale(10),
    borderRadius: moderateScale(5),
  },
  itemImage: {
    height: verticleScale(200),
    width: horizontalScale(80),
  },
  itemDescription: {
    marginHorizontal: horizontalScale(10),
    flex: 1,
  },
  boldDarkText: {
    fontWeight: '500',
    fontSize: moderateScale(16),
    color: Colors.dark,
  },
  grayText: {
    fontSize: moderateScale(14),
    color: Colors.gray,
  },
  rowContainer: {
    justifyContent: 'space-between',
    marginRight: horizontalScale(10),
  },
  regularDarkText: {
    fontWeight: '400',
    fontSize: moderateScale(16),
    color: Colors.dark,
  },
  topSpacing: {
    marginTop: verticleScale(35),
    position: 'relative'
  },
  row: {
    flexDirection: 'row',
  },
  bottomSpacing: {
    marginBottom: verticleScale(10),
  },
  regularPurpleText: {
    fontSize: moderateScale(15),
    fontWeight: '500',
    color: Colors.purple,
    textDecorationLine: 'underline',
  },
  statusContainer: {
    backgroundColor: Colors.light,
    padding: moderateScale(10),
    position: 'absolute',
    width: '100%',
    marginTop: verticleScale(50),
    borderRadius: moderateScale(5),
  },
});

export default styles;
