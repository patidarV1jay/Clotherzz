import { StyleSheet } from 'react-native';
import {
  Colors,
  horizontalScale,
  moderateScale,
  verticleScale,
} from '../../themes';

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.purple,
  },
  cartText: {
    fontWeight: 'bold',
    color: Colors.light,
    fontSize: moderateScale(18),
    marginLeft: horizontalScale(10),
  },
  wrapperContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: horizontalScale(10),
    marginBottom: verticleScale(20),
  },
  backHeader: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default styles;
