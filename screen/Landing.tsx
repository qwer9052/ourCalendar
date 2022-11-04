import React, { useEffect, useState } from 'react';
import { Dimensions, Platform, StatusBar, StyleSheet, Text, View, Animated } from 'react-native';
import { Button } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import FastImage from 'react-native-fast-image';

export default function Landing() {
  const navigation = useNavigation();
  const screenWidth = Dimensions.get('screen').width;
  const screenHeight = Dimensions.get('screen').height;
  const [slideAnimState] = useState(new Animated.Value(0));

  const slideRight = Animated.timing(slideAnimState, {
    toValue: -1000 + screenWidth,
    duration: 10000,
    useNativeDriver: true,
  });
  const slideLeft = Animated.timing(slideAnimState, {
    toValue: 0,
    duration: 10000,
    useNativeDriver: true,
  });
  // const slide = Animated.timing(slideAnimState, {
  //   toValue: 0,
  //   duration: 400,
  //   useNativeDriver: true,
  // });
  useEffect(() => {
    Animated.loop(Animated.sequence([slideRight, Animated.delay(100), slideLeft])).start();
  });

  const animStyle = {
    transform: [
      {
        translateX: slideAnimState,
      },
    ],
  };

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 24, fontWeight: 'bold', textAlign: 'center' }}>OurCalendar</Text>
      <Animated.View style={[animStyle, { width: 1000 }]}>
        <FastImage resizeMode={FastImage.resizeMode.contain} style={{ height: screenHeight / 2, width: 1000 }} source={require('../assets/images/png/landing.png')} />
      </Animated.View>
      <View style={{ paddingHorizontal: 16 }}>
        <Button mode='contained' contentStyle={{ height: 48 }} style={{ marginBottom: 10 }} onPress={() => navigation.navigate('Login')}>
          로그인
        </Button>
        <Button mode={'text'} contentStyle={{ height: 48 }} onPress={() => navigation.navigate('Signup')}>
          회원가입 하기
        </Button>
      </View>

      {/* Use a light status bar on iOS to account for the black space above the modal */}
      <StatusBar />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
