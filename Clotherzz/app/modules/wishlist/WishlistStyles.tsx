import { StyleSheet } from 'react-native';
import { Dimensions } from 'react-native';
import {
  Colors,
  horizontalScale,
  moderateScale,
  verticleScale,
} from '../../themes';

const width = Dimensions.get('window').width / 2;
const imageWidth = width - horizontalScale(10);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  listContainer: {
    width,
    marginTop: verticleScale(5),
  },
  image: {
    width: imageWidth,
    height: verticleScale(450),
  },
  title: {
    color: Colors.dark,
    fontSize: moderateScale(15),
    fontWeight: '500',
  },
  listWrapper: {
    alignSelf: 'center',
    marginBottom: verticleScale(50),
    backgroundColor: Colors.light,
  },
  hrLine: {
    borderTopWidth: 1,
    borderColor: Colors.offShade,
    marginVertical: verticleScale(20),
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: horizontalScale(10),
    paddingBottom: verticleScale(20),
  },
  footerText: {
    color: Colors.dark,
    fontWeight: '400',
    fontSize: moderateScale(15),
  },
  vrLine: {
    borderRightWidth: 1,
    borderColor: Colors.offShade,
  },
  subtitle: {
    color: Colors.gray,
  },
  itemDescription:{
    marginLeft: horizontalScale(5)
  }
});

export default styles;
