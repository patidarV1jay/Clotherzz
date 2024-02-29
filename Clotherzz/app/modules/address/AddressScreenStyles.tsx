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
  wrapperContainer: {},
  header: {
    backgroundColor: Colors.light,
    flexDirection: 'row',
    paddingHorizontal: horizontalScale(20),
    margin: horizontalScale(10),
    borderRadius: moderateScale(5),
    paddingVertical: verticleScale(10),
  },
  hrLine: {
    flex: 1,
    borderTopWidth: 1,
    alignSelf: 'center',
  },
  colorLine: {
    borderColor: Colors.purple,
  },
});

export default styles;
