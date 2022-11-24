import React, { lazy, useState } from 'react';
import { RouteProp, useNavigation } from '@react-navigation/native';
import { StyleSheet, View, Text, Image, Animated, SafeAreaView, Platform, StatusBar, Pressable } from 'react-native';
import { IconPlusBlack, IconSearchBlack } from '../collection/icons';
import { COLORS } from '../style/css/commonStyle';
import { RootStackParamList, RootTabParamList } from '../navigation/types';
//import { BorderItems } from '../component/BorderItems';

const BorderItems = lazy(() => import('../component/BorderItems'));

const HEADER_HEIGHT = Platform.OS == 'ios' ? 90 : 70 + StatusBar.currentHeight;

function TabTwo() {
  const navigation = useNavigation();
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
            bottom: 0,
            height: HEADER_HEIGHT,
            backgroundColor: '#fff',
            zIndex: 1000,
            elevation: 1000,
            borderBottomWidth: 1,
            borderBottomColor: COLORS.black_100,
            transform: [{ translateY: headerY }],
            justifyContent: 'center',
          },
        ]}
      >
        <View style={{ marginTop: 'auto', marginBottom: 12, position: 'relative' }}>
          <View style={{ position: 'absolute', left: 0, right: 0 }}>
            <Text style={styles.headerText}>게시판</Text>
          </View>
          <Pressable onPress={() => navigation.navigate('PostWrite')} hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }} style={{ position: 'absolute', left: 16 }}>
            <IconPlusBlack width={22} height={22} />
          </Pressable>

          <Pressable onPress={() => navigation.navigate('PostSearch')} hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }} style={{ marginLeft: 'auto', right: 16 }}>
            <IconSearchBlack fill={COLORS.black_800} />
          </Pressable>
        </View>
      </Animated.View>
      <BorderItems scrollY={scrollY} search={''} marginTop={50} />
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
    fontSize: 18,
    alignSelf: 'center',
  },
});

export default TabTwo;
