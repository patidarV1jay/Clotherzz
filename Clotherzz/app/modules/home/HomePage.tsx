import React, { useEffect, useRef, useState } from 'react';
import {
  Dimensions,
  FlatList,
  Image,
  NativeScrollEvent,
  NativeSyntheticEvent,
  Text,
  View,
} from 'react-native';
import styles from './HomePageStyles';
import useHomePage from './useHomePage';
import { verticleScale, moderateScale, horizontalScale } from '../../themes';

const HomePage = () => {
  const screenWidth = Dimensions.get('window').width;
  const { handleChange, number, data, navigateSearchScreen } = useHomePage();
  const [activeIndex, setactiveIndex] = useState<number>(0);
  const listref = useRef<FlatList>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (activeIndex === data.length - 1) {
        listref.current &&
          listref?.current?.scrollToIndex({
            index: 0,
            animated: true,
          });
      } else {
        listref.current &&
          listref.current.scrollToIndex({
            index: activeIndex + 1,
            animated: true,
          });
      }
    }, 2000);
    return () => clearInterval(interval);
  }, [activeIndex]);

  const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const scrollPosition = event.nativeEvent.contentOffset.x;
    const index = scrollPosition / screenWidth;
    setactiveIndex(Math.ceil(index));
  };
  const getlistLayout = (_: any, index: number) => ({
    length: screenWidth,
    offset: screenWidth * index,
    index: index,
  });

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        ref={listref}
        renderItem={({ item }) => {
          return (
            <View style={{ width: screenWidth }}>
              <Image
                source={item.image}
                style={{
                  height: verticleScale(1000),
                  width: '98%',
                  marginLeft: horizontalScale(5),
                  borderWidth: moderateScale(4),
                  borderRadius: moderateScale(10),
                  marginTop: verticleScale(5),
                  resizeMode: 'cover',
                }}
              />
            </View>
          );
        }}
        pagingEnabled={true}
        horizontal
        showsHorizontalScrollIndicator={false}
        getItemLayout={getlistLayout}
        onScroll={handleScroll}
      />
      <Text style={{ color: 'black' }}>hey</Text>
    </View>
  );
};

export default HomePage;
