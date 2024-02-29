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
  wrapperContainer: {
    marginHorizontal: horizontalScale(10),
    marginBottom: verticleScale(20),
  },
  text: {
    color: Colors.dark,
    fontWeight: 'bold',
    fontSize: moderateScale(18),
  },
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headerIcons: {
    flexDirection: 'row',
  },
  headerIcon: {
    marginRight: horizontalScale(10),
  },
});

export default styles;
