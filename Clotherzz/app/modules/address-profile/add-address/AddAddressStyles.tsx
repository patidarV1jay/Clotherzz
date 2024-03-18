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
  header: {
    backgroundColor: Colors.purple,
    flexDirection: 'row',
    paddingHorizontal: horizontalScale(10),
    marginBottom: verticleScale(40),
    zIndex: 1,
  },
  addAddressText: {
    fontWeight: 'bold',
    color: Colors.light,
    fontSize: moderateScale(18),
    marginLeft: horizontalScale(10),
    marginBottom: verticleScale(20),
  },
  title: {
    color: Colors.dark,
    fontWeight: '400',
    fontSize: moderateScale(15),
  },
  inputBox: {
    borderRadius: moderateScale(5),
    paddingLeft: horizontalScale(10),
    borderWidth: 1,
    borderColor: Colors.offShade,
  },
  inputBoxText: {
    color: Colors.dark,
    fontWeight: '500',
    fontSize: moderateScale(16),
    height: verticleScale(90),
    textAlignVertical: 'center',
  },
  heading: {
    fontWeight: '500',
    fontSize: moderateScale(15),
    marginBottom: verticleScale(5),
    color: Colors.gray,
  },
  horizontalSpacing: {
    marginHorizontal: horizontalScale(10),
    marginBottom: verticleScale(35),
  },
  saveButton: {
    backgroundColor: Colors.purple,
    borderRadius: moderateScale(10),
    alignItems: 'center',
    height: verticleScale(80),
    marginTop: verticleScale(45),
  },
  lightColor: {
    color: Colors.light,
  },
});

export default styles;
