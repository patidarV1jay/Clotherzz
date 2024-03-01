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
    marginTop: verticleScale(50),
    marginHorizontal: horizontalScale(20),
  },
  input: {
    padding: moderateScale(5),
    fontSize: 16,
    fontWeight: 'bold',
    paddingHorizontal: horizontalScale(10),
    paddingTop: verticleScale(20),
  },
  label: {
    paddingLeft: 10,
    position: 'absolute',
    color: Colors.offShade,
  },
  inputView: {
    marginBottom: verticleScale(50),
    borderRadius: moderateScale(5),
  },
  dobView: {
    marginHorizontal: horizontalScale(10),
    marginBottom: verticleScale(30),
    position: 'relative',
  },
  heading: {
    fontWeight: '500',
    fontSize: moderateScale(15),
    marginBottom: verticleScale(5),
    color: Colors.gray,
  },
  dobWrapper: {
    borderRadius: moderateScale(5),
    fontWeight: '500',
    paddingHorizontal: horizontalScale(10),
    borderWidth: 1,
    borderColor: Colors.offShade,
    height: verticleScale(90),
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
  },
  dobText: {
    color: Colors.dark,
    fontWeight: '500',
    fontSize: moderateScale(16),
  },
  genderText: {
    color: Colors.dark,
    fontWeight: '500',
    padding: moderateScale(8),
    fontSize: moderateScale(15),
  },
  dropDownContainer: {
    backgroundColor: Colors.light,
    borderRadius: moderateScale(5),
    marginVertical: verticleScale(5),
    paddingVertical: verticleScale(15),
    position: 'absolute',
    zIndex: 1,
    top: verticleScale(60),
    width: '50%',
    marginLeft: horizontalScale(5)
  },
  button: {
    backgroundColor: Colors.purple,
    marginTop: verticleScale(40),
    height: verticleScale(90),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: moderateScale(5),
  },
});

export default styles;
