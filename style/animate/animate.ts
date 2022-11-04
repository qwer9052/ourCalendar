import { Animated, Platform, StatusBar, StyleSheet, Text, View, LayoutAnimation } from 'react-native';

export const fade = (valueState: Animated.Value, toValue: number, duration: number) => {
  return Animated.timing(valueState, {
    toValue: toValue, //0 | 1  사라질건지 보여질건지 선택  fadeInAnimState와 반대여야함
    duration: duration, // 애니메이션 시간
    useNativeDriver: true,
  });
};

export const layoutAnimation = () => {
  const layoutAnimConfig = {
    duration: 300,
    create: {
      duration: 100,
      type: LayoutAnimation.Types.easeInEaseOut,
      property: LayoutAnimation.Properties.opacity,
    },
    update: {
      type: LayoutAnimation.Types.easeInEaseOut,
    },
    delete: {
      duration: 100,
      type: LayoutAnimation.Types.easeInEaseOut,
      property: LayoutAnimation.Properties.opacity,
    },
  };
  return LayoutAnimation.configureNext(layoutAnimConfig);
};
