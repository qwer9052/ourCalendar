import { useNavigation } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import { Platform } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const useScreenTransitionEnded = () => {
  const navigation = useNavigation();

  const [isTransitionFinished, setTransitionFinished] = useState(false);

  useEffect(() => {
    const unsubscribe = navigation.addListener('transitionEnd', () => {
      setTransitionFinished(true);
    });

    return unsubscribe;
  }, [navigation]);

  return isTransitionFinished;
};

export const useKeyboardVerticalOffset = (offset = 0) => {
  const isTransitionFinished = useScreenTransitionEnded();
  return isTransitionFinished ? (Platform.OS === 'ios' ? offset : offset + 35) : 0;
};
