import { useNavigation } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { Platform, StatusBar, StyleSheet, Text, View } from 'react-native';
import { LoadingView } from '../component/LoadingView';
import { getToken } from '../util/axiosPlugin';

export default function Splash() {
  const navigation = useNavigation();

  useEffect(() => {
    login();
  }, []);

  const login = async () => {
    getToken()
      .then(() => {
        navigation.navigate('Root', { screen: 'TabOne' });
      })
      .catch((err) => {
        navigation.navigate('Landing');
        console.log(err);
      });
  };

  return <LoadingView setShow={true} />;
}
