import React from 'react';
import { Pressable, Text, View } from 'react-native';
import { moderateScale } from '../../themes';
import styles from './ProfileTabStyles';
import { PropsType } from './types';
import {
  AddressBook,
  User,
  ShoppingCart,
  Notepad,
} from 'phosphor-react-native';

const ScreensCard = ({
  navigateToScreen,
  IconName,
  title,
  subtitle,
}: PropsType) => {
  let Icon;
  switch (IconName) {
    case (IconName = 'User'):
      Icon = User;
      break;
    case (IconName = 'ShoppingCart'):
      Icon = ShoppingCart;
      break;
    case (IconName = 'AddressBook'):
      Icon = AddressBook;
      break;
    case (IconName = 'Notepad'):
      Icon = Notepad;
      break;

    default:
      break;
  }
  return (
    <View>
      <Pressable style={styles.section} onPress={navigateToScreen}>
        {Icon && <Icon size={moderateScale(30)} />}
        <View style={styles.rightColumn}>
          <Text style={styles.myAddressesText}>{title}</Text>
          <Text style={styles.subTitle}>{subtitle}</Text>
        </View>
      </Pressable>
      <View style={styles.hrLine} />
    </View>
  );
};

export default ScreensCard;
