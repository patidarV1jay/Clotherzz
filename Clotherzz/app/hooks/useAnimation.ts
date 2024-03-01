import { useRef, useEffect } from 'react';
import { Animated } from 'react-native';

const useAnimation = () => {
  const slide = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    Animated.timing(slide, {
      toValue: 0.5,
      duration: 1000,
      useNativeDriver: false,
    }).start();
  }, []);

  return {
    slide,
  };
};

export default useAnimation;
