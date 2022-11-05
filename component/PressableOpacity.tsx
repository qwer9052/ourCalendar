import React from 'react';
import { Pressable, PressableProps } from 'react-native';

export function PressableOpacity(props: PressableProps) {
  return <Pressable {...props} style={({ pressed }) => [{ opacity: pressed ? 0.7 : 1.0 }, props.style]} />;
}
