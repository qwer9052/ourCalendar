import React, { lazy, useState } from 'react';
import { StyleSheet, View, Text, Image, Animated, SafeAreaView, Platform, StatusBar } from 'react-native';
//import { BorderItems } from '../component/BorderItems';

const BorderItems = lazy(() => import('../component/BorderItems'));

const list = [
  'https://s.pstatic.net/static/www/mobile/edit/20221103/mobile_165908272282.jpg',
  'https://s.pstatic.net/static/www/mobile/edit/20221103/mobile_165908272282.jpg',
  'https://s.pstatic.net/static/www/mobile/edit/20221103/mobile_165908272282.jpg',
  'https://s.pstatic.net/static/www/mobile/edit/20221103/mobile_165908272282.jpg',
  'https://s.pstatic.net/static/www/mobile/edit/20221103/mobile_165908272282.jpg',
  'https://s.pstatic.net/static/www/mobile/edit/20221103/mobile_165908272282.jpg',
  'https://s.pstatic.net/static/www/mobile/edit/20221103/mobile_165908272282.jpg',
  'https://s.pstatic.net/static/www/mobile/edit/20221103/mobile_165908272282.jpg',
  'https://s.pstatic.net/static/www/mobile/edit/20221103/mobile_165908272282.jpg',
  'https://s.pstatic.net/static/www/mobile/edit/20221103/mobile_165908272282.jpg',
];

const HEADER_HEIGHT = Platform.OS == 'ios' ? 90 : 70 + StatusBar.currentHeight;

function TabTwo() {
  const [scrollY] = useState(new Animated.Value(0));
  const [offsetAnim] = useState(Animated.diffClamp(scrollY, 0, HEADER_HEIGHT));

  const headerY = offsetAnim.interpolate({
    inputRange: [0, HEADER_HEIGHT],
    outputRange: [0, -HEADER_HEIGHT],
    extrapolate: 'clamp',
  });

  return (
    <SafeAreaView style={styles.container}>
      <Animated.View
        style={[
          {
            position: 'absolute',
            left: 0,
            right: 0,
            top: 0,
            height: HEADER_HEIGHT,
            backgroundColor: '#fdd',
            zIndex: 1000,
            elevation: 1000,
            transform: [{ translateY: headerY }],
            justifyContent: 'center',
          },
        ]}
      >
        <Text style={styles.headerText}>HEADER</Text>
      </Animated.View>
      <BorderItems scrollY={scrollY} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red',
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    zIndex: 10000,
  },
  headerText: {
    justifyContent: 'center',
    fontWeight: 'bold',
    fontSize: 20,
    alignContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
});

export default TabTwo;
