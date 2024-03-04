import { useState, useRef } from 'react';
import { Animated } from 'react-native';
import { verticleScale } from '../../../../themes';

const useProgress = () => {
  const [selectedStep, setSelectedStep] = useState(1);
  const progress1 = useRef(new Animated.Value(0)).current;
  const progress2 = useRef(new Animated.Value(0)).current;
  const progress3 = useRef(new Animated.Value(0)).current;
  const progress4 = useRef(new Animated.Value(0)).current;

  const start1 = () => {
    Animated.timing(progress1, {
      toValue: verticleScale(50),
      duration: 3000,
      useNativeDriver: false,
    }).start();
  };
  const start2 = () => {
    Animated.timing(progress2, {
      toValue: verticleScale(50),
      duration: 3000,
      useNativeDriver: false,
    }).start();
  };
  const start3 = () => {
    Animated.timing(progress3, {
      toValue: verticleScale(50),
      duration: 3000,
      useNativeDriver: false,
    }).start();
  };
  const start4 = () => {
    Animated.timing(progress4, {
      toValue: verticleScale(50),
      duration: 3000,
      useNativeDriver: false,
    }).start();
  };

  const handleSlider = () => {
    if (selectedStep == 1) {
      start1();
    }
    if (selectedStep == 2) {
      start2();
    }
    if (selectedStep == 3) {
      start3();
    }
    if (selectedStep == 4) {
      start4();
    }
    if (selectedStep == 0) {
      setSelectedStep(selectedStep + 1);
    } else {
      setTimeout(() => {
        setSelectedStep(selectedStep + 1);
      }, 3000);
    }
  };
  return {
    progress1,
    progress2,
    progress3,
    progress4,
    selectedStep,
    handleSlider,
  };
};

export default useProgress;
