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
    backgroundColor: Colors.light,
    paddingHorizontal: horizontalScale(10),
  },
  wrapperContainer: {
    paddingVertical: verticleScale(20),
  },
  dot: {
    width: horizontalScale(24),
    height: verticleScale(54),
    borderRadius: 15,
    backgroundColor: 'black',
    textAlign: 'center',
    textAlignVertical: 'center',
    color: 'white',
  },
  grayLine: {
    width: horizontalScale(2),
    height: verticleScale(50),
    backgroundColor: Colors.offShade,
    marginLeft: horizontalScale(10),
  },

  greenColor: {
    color: Colors.green,
  },
  grayColor: {
    color: Colors.offShade,
  },
  orderStatusText: {
    position: 'absolute',
    color: 'black',
    left: horizontalScale(40),
    top: verticleScale(5),
  },
});

export default styles;
