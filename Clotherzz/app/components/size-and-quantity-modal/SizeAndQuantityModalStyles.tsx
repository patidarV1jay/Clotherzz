import { StyleSheet } from 'react-native';
import {
  verticleScale,
  moderateScale,
  horizontalScale,
  Colors,
} from '../../themes';

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: Colors.opaque,
  },
  modalWrapperContainer: {
    backgroundColor: Colors.purple,
    height: verticleScale(250),
    borderTopRightRadius: moderateScale(10),
    borderTopLeftRadius: moderateScale(10),
  },
  listItem: {
    alignSelf: 'center',
    margin: horizontalScale(5),
    borderRadius: moderateScale(20),
    borderWidth: 1,
    borderColor: Colors.light,
  },
  listItemData: {
    fontWeight: 'bold',
    fontSize: moderateScale(15),
    color: Colors.light,
  },
  listItemDataFill: {
    fontWeight: 'bold',
    fontSize: moderateScale(15),
    color: Colors.purple,
  },
  listItemWrapper: {
    height: verticleScale(95),
    width: horizontalScale(45),
    alignItems: 'center',
    justifyContent: 'center',
  },
  fillListWrapper: {
    height: verticleScale(95),
    width: horizontalScale(45),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.green,
  },
  emptyContainer: {
    flex: 1,
    alignItems: 'center',
  },
  addCartButton: {
    marginHorizontal: horizontalScale(10),
    marginVertical: verticleScale(20),
    borderRadius: moderateScale(5),
    borderColor: Colors.light,
    borderWidth: 1,
  },
  addButtonText: {
    padding: moderateScale(7),
    alignSelf: 'center',
    color: Colors.light,
    fontSize: moderateScale(15),
    fontWeight: '500',
  },
});

export default styles;
