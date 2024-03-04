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
  emptyOrder: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: Colors.light,
  },
  noOrder: {
    height: verticleScale(450),
    width: horizontalScale(300),
    marginTop: verticleScale(80),
  },
  noOrderText: {
    fontWeight: '500',
    color: Colors.dark,
    fontSize: moderateScale(18),
  },
  moreWidth: {
    width: '60%',
    alignItems: 'center',
    marginTop: verticleScale(50)
  },
  hrLine:{
    flex:1,
    borderTopWidth:1,
    borderColor: Colors.gray
  }
});

export default styles;
