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
    marginTop: verticleScale(20),
  },
  orderContianer: {
    backgroundColor: Colors.light,
    padding: moderateScale(15),
    paddingVertical: verticleScale(25),
  },
  orderNoText: {
    fontWeight: '500',
    fontSize: moderateScale(16),
    color: Colors.dark,
  },
  grayText: {
    color: Colors.gray,
    fontSize: moderateScale(14),
    marginVertical: verticleScale(5),
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  button: {
    borderWidth: 2,
    borderColor: Colors.purple,
    padding: moderateScale(7),
    paddingHorizontal: horizontalScale(25),
    borderRadius: moderateScale(5),
  },
  buttonText: {
    color: Colors.purple,
    fontWeight: '500',
    fontSize: moderateScale(15),
  },
  bottomSpace: {
    marginBottom: verticleScale(20),
  },
  greenText: {
    fontWeight: '500',
    color: Colors.green,
    fontSize: moderateScale(16),
  },
});

export default styles;
