import { Bag, MagnifyingGlass } from 'phosphor-react-native';
import React from 'react';
import { Pressable, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Colors, moderateScale } from '../../themes';
import styles from './MainHeaderStyles';
import useMainHeader from './useMainHeader';
import { PropsType } from './types';

const MainHeader = ({ title }: PropsType) => {
  const { navigateToSearchScreen, navigateToCart } = useMainHeader();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.wrapperContainer}>
        <View style={styles.rowContainer}>
          <Text style={styles.text}>{title}</Text>
          <View style={styles.headerIcons}>
            <Pressable
              onPress={navigateToSearchScreen}
              style={styles.headerIcon}>
              <MagnifyingGlass
                color={Colors.light}
                weight="bold"
                size={moderateScale(28)}
              />
            </Pressable>
            <Pressable onPress={navigateToCart}>
              <Bag
                color={Colors.light}
                weight="bold"
                size={moderateScale(28)}
              />
            </Pressable>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default MainHeader;
