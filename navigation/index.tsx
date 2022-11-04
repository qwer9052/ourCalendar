import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as React from 'react';
import { useEffect } from 'react';
import { CardStyleInterpolators, createStackNavigator } from '@react-navigation/stack';
import { RootStackParamList, RootTabParamList, RootTabScreenProps } from './types';

import {
  IconHomeWhite,
  IconNewsGray,
  IconNewsWhite,
  IconStoreGray,
  IconStoreWhite,
  IconHomeGray,
  Icon_setting_gray,
  Icon_setting_white,
  Icon_calculate_white,
  Icon_calculate_gray,
  Icon_match_gray,
  Icon_match_white,
  IconPerson,
  IconCalendar,
  IconMessage,
} from '../collection/icons';
import { ModalScreen, TabFour, TabOne, TabThree, TabTwo, Login, Test2, Signup, Landing } from '../collection/screens';
import { navigationRef } from '../util/navigationService';
import { COLORS } from '../style/css/commonStyle';

export default function Navigation() {
  useEffect(() => {
    // console.log('loading : ' + loading);
  }, []);

  return (
    <NavigationContainer
      ref={navigationRef}
      //theme={defaultTheme}
      //onReady={() => Referral({ navigationRef: navigationRef })}
      //onStateChange={() => Referral({ navigationRef: navigationRef })}
    >
      {/* <DevButton /> */}
      {/* <LoadingView setShow={loading} /> */}
      <RootNavigator />
    </NavigationContainer>
  );
}

const Stack = createStackNavigator<RootStackParamList>();
function RootNavigator() {
  return (
    <Stack.Navigator initialRouteName='Landing'>
      <Stack.Screen
        name='Login'
        component={Login}
        options={{
          title: '로그인',
          headerBackTitle: ' ',
          headerShown: true,
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
          headerShadowVisible: false,
        }}
      />
      <Stack.Screen
        name='Signup'
        component={Signup}
        options={{
          title: '',
          headerBackTitle: ' ',
          headerShown: true,
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
          headerShadowVisible: false,
        }}
      />
      <Stack.Screen
        name='Landing'
        component={Landing}
        options={{
          headerShown: false,
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
          headerShadowVisible: false,
        }}
      />

      <Stack.Screen name='Test2' component={Test2} options={{ headerShown: true, cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS, headerShadowVisible: false }} />
      <Stack.Screen name='Root' component={BottomTabNavigator} options={{ headerShown: false, cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS, gestureEnabled: false }} />
      <Stack.Group screenOptions={{ presentation: 'modal' }}>
        <Stack.Screen name='ModalScreen' component={ModalScreen} />
      </Stack.Group>
    </Stack.Navigator>
  );
}

const BottomTab = createBottomTabNavigator<RootTabParamList>();
function BottomTabNavigator() {
  return (
    <BottomTab.Navigator
      initialRouteName='TabOne'
      screenOptions={{
        tabBarShowLabel: false,
      }}
    >
      <BottomTab.Screen
        name='TabOne'
        component={TabOne}
        options={() => ({
          tabBarIcon: ({ focused }) => (focused ? <IconCalendar width={25} height={25} fill={COLORS.black_800} /> : <IconCalendar width={25} height={25} fill={COLORS.black_100} />),
        })}
      />
      <BottomTab.Screen
        name='TabTwo'
        component={TabTwo}
        options={() => ({
          tabBarIcon: ({ focused }) => (focused ? <IconMessage width={30} height={30} fill={COLORS.black_800} /> : <IconMessage width={30} height={30} fill={COLORS.black_100} />),
        })}
      />
      <BottomTab.Screen
        name='TabThree'
        component={TabThree}
        options={() => ({
          tabBarIcon: ({ focused }) => (focused ? <IconPerson width={25} height={25} fill={COLORS.black_800} /> : <IconPerson width={25} height={25} fill={COLORS.black_100} />),
        })}
      />
    </BottomTab.Navigator>
  );
}
