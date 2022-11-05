import { useNavigation } from '@react-navigation/native';
import React, { useLayoutEffect } from 'react';
import { Platform, StatusBar, StyleSheet, Text, View, Animated, SafeAreaView } from 'react-native';
import style from 'react-native-calendars/src/calendar/header/style';
import { ScrollView } from 'react-native-gesture-handler';

export default function TabTwo() {
  const navigation = useNavigation();

  let AnimatedHeaderValue = new Animated.Value(0);
  const Header_Max_Height = 150;
  const Header_Min_Height = 50;

  const animateHeaderBackgroundColor = AnimatedHeaderValue.interpolate({
    inputRange: [0, Header_Max_Height - Header_Min_Height],
    outputRange: ['blue', 'red'],
    extrapolate: 'clamp',
  });

  const animateHeaderHeight = AnimatedHeaderValue.interpolate({
    inputRange: [0, Header_Max_Height - Header_Min_Height],
    outputRange: [Header_Max_Height, Header_Min_Height],
    extrapolate: 'clamp',
  });

  return (
    <SafeAreaView style={styles.container}>
      <Animated.View
        style={[
          styles.header,
          {
            height: animateHeaderHeight,
            backgroundColor: animateHeaderBackgroundColor,
          },
        ]}
      >
        <Text style={styles.headerText}>React Native collapsibel</Text>
      </Animated.View>
      <ScrollView
        scrollEventThrottle={16}
        onScroll={Animated.event(
          [
            {
              nativeEvent: { contentOffset: { y: AnimatedHeaderValue } },
            },
          ],
          { useNativeDriver: false },
        )}
      >
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(
          (e) => {
            return (
              <Text>
                asdasda{'\n'}dasdasd : {e}
              </Text>
            );
          },
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
  header: {
    justifyContent: 'center',
    alignItems: 'center',
    left: 0,
    right: 0,
  },
  headerText: {
    color: '#fff',
    fontSize: 18,
    textAlign: 'center',
  },
});
