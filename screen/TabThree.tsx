import React, { useCallback, useEffect, useState } from 'react';
import { Platform, StatusBar, StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-paper';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { axiosJwtInstance } from '../util/axiosPlugin';
import { User } from '../type/user';
import { useDispatch } from 'react-redux';
import { loadingAction } from '../store/actions';
import { writeToStorage } from '../util/asyncStorage';

export default function TabThree() {
  const navigation = useNavigation();
  const [userInfo, setUserInfo] = useState<User>();
  const dispatch = useDispatch();

  useEffect(() => {}, []);

  useFocusEffect(
    useCallback(() => {
      dispatch(loadingAction(true));

      setTimeout(() => {
        dispatch(loadingAction(false));
      }, 3000);
      user();
    }, []),
  );

  const user = () => {
    axiosJwtInstance
      .get('/user')
      .then((res) => {
        console.log(res.data);
        setUserInfo(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const logout = () => {
    writeToStorage('token', '').then(() => {});
  };

  return (
    <View style={styles.container}>
      <Text>{userInfo?.name}</Text>
      <Text>{userInfo?.email}</Text>
      <Text>{userInfo?.userId}</Text>
      <Button icon='camera' mode='contained' onPress={() => navigation.navigate('Login')}>
        Login 이동
      </Button>
      <Button icon='camera' mode='contained' onPress={() => navigation.navigate('Signup')}>
        Signup 이동
      </Button>
      <Button icon='camera' mode='contained' onPress={logout}>
        로그아웃
      </Button>
      {/* Use a light status bar on iOS to account for the black space above the modal */}
      <StatusBar />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
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
