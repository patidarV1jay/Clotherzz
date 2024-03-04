import { StyleSheet } from 'react-native';
import {
  Colors,
  horizontalScale,
  moderateScale,
  verticleScale,
} from '../../../../themes';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
  },
  wrapperContainer: {
    width: '100%',
    alignItems: 'flex-start',
    backgroundColor: Colors.light,
    borderRadius: moderateScale(5),
    padding: moderateScale(10),
  },
  dot: {
    width: horizontalScale(24),
    height: verticleScale(54),
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  grayLine: {
    width: horizontalScale(2),
    height: verticleScale(50),
    backgroundColor: Colors.offShade,
    marginLeft: horizontalScale(11),
  },
  absoluteContainer: {
    width: '10%',
    alignItems: 'center',
    padding: moderateScale(50),
    position: 'absolute',
    top: 0,
  },
  button: {
    height: 50,
    width: 200,
    backgroundColor: 'orange',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    alignSelf: 'center',
  },
  statusView: {
    width: 120,
    height: 30,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 50,
  },
  text: {
    position: 'absolute',
    marginLeft: horizontalScale(40),
    width: horizontalScale(200),
    fontSize: moderateScale(15),
    fontWeight: '500',
  },
  greenColor: {
    color: Colors.green,
  },
  grayColor: {
    color: Colors.offShade,
  },
});

export default styles;
