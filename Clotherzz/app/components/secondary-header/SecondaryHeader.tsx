import { CaretLeft, Heart } from 'phosphor-react-native';
import React from 'react';
import { Pressable, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Colors, moderateScale } from '../../themes';
import styles from './SecondaryHeaderStyles';
import { PropsType } from './types';
import useSecondaryHeader from './useSecondaryHeader';

const SecondaryHeader = ({ title }: PropsType) => {
  const { navigation } = useSecondaryHeader();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.wrapperContainer}>
        <View style={styles.backHeader}>
          <Pressable onPress={navigation.goBack}>
            <CaretLeft
              weight="bold"
              size={moderateScale(26)}
              color={Colors.light}
            />
          </Pressable>
          <Text style={styles.cartText}>{title}</Text>
        </View>
        <Pressable>
          <Heart color={Colors.light} weight="bold" size={moderateScale(26)} />
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default SecondaryHeader;
