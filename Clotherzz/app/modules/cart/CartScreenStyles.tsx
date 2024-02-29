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
    margin: horizontalScale(10),
  },
  header: {
    backgroundColor: Colors.light,
    flexDirection: 'row',
    paddingHorizontal: horizontalScale(20),
    borderRadius: moderateScale(5),
    paddingVertical: verticleScale(10),
  },
  hrLine: {
    flex: 1,
    borderTopWidth: 1,
    alignSelf: 'center',
  },
  productImage: {
    height: verticleScale(250),
    width: horizontalScale(100),
  },
  cartItemContainer: {
    backgroundColor: Colors.light,
    marginVertical: verticleScale(40),
    padding: moderateScale(10),
    borderRadius: moderateScale(5),
    flexDirection: 'row',
    position: 'relative',
  },
  text: {
    fontWeight: '500',
    color: Colors.dark,
    fontSize: moderateScale(15),
    paddingRight: horizontalScale(5),
  },
  measureContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.fadeWhite,
    padding: moderateScale(5),
    borderRadius: moderateScale(5),
    marginRight: horizontalScale(5),
    marginTop: verticleScale(10),
  },
  row: {
    flexDirection: 'row',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: Colors.opaque,
  },
  modalWrapperContainer: {
    backgroundColor: Colors.purple,
    height: verticleScale(200),
    borderTopRightRadius: moderateScale(10),
    borderTopLeftRadius: moderateScale(10),
  },
  listItem: {
    alignSelf: 'center',
    backgroundColor: Colors.light,
    margin: horizontalScale(5),
    borderRadius: moderateScale(20),
  },
  listItemData: {
    fontWeight: 'bold',
    fontSize: moderateScale(15),
    color: Colors.dark,
  },
  listItemWrapper: {
    height: verticleScale(95),
    width: horizontalScale(45),
    alignItems: 'center',
    justifyContent: 'center',
  },
  emptyContainer: {
    flex: 1,
  },
  itemDescription: {
    marginLeft: horizontalScale(10),
  },
  title: {
    fontWeight: '500',
    color: Colors.dark,
    fontSize: moderateScale(15),
  },
  subTitle: {
    color: Colors.gray,
  },
  trashIcon: {
    position: 'absolute',
    right: horizontalScale(2),
    top: verticleScale(2),
  },
  footer: {
    backgroundColor: Colors.purple,
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: verticleScale(120),
    justifyContent: 'center',
  },
  placeOrderText: {
    color: Colors.purple,
    fontWeight: '500',
    alignSelf: 'center',
    fontSize: moderateScale(16),
  },
  placeOrderButton: {
    backgroundColor: Colors.light,
    marginHorizontal: horizontalScale(20),
    height: verticleScale(80),
    justifyContent: 'center',
    borderRadius: moderateScale(10),
  },
  iconText: {
    color: Colors.gray,
  },
  iconsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: verticleScale(20),
  },
  iconContainer: {
    alignItems: 'center',
    marginTop: verticleScale(15),
  },
});

export default styles;
