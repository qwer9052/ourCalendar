import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { Alert, Image, Keyboard, KeyboardAvoidingView, Platform, StatusBar, StyleSheet, TouchableWithoutFeedback, View } from 'react-native';
import { TextInput, Text, Button } from 'react-native-paper';
import { Token } from '../type/token';
import { writeToStorage } from '../util/asyncStorage';
import { axiosInstance } from '../util/axiosPlugin';
import { handleOnchange } from '../util/common';

export default function Login() {
  const navigation = useNavigation();

  const [errors, setErrors] = useState<any>({ email: null, pwd: null });
  const [inputs, setInputs] = useState({ email: '', pwd: '' });

  const submit = () => {
    axiosInstance
      .post('/user/login', {
        email: inputs.email,
        pwd: inputs.pwd,
      })
      .then((res) => {
        console.log(res.data);
        const { accessToken, refreshToken } = res.data;
        const token: Token = {
          accessToken: accessToken,
          refreshToken: refreshToken,
        };
        writeToStorage('token', JSON.stringify(token));
        navigation.navigate('Root', { screen: 'TabOne' });
      })
      .catch((err) => {
        Alert.alert('오류');
        console.log(err);
      });
  };

  return (
    <TouchableWithoutFeedback style={{ flex: 1, justifyContent: 'center', alignContent: 'center', backgroundColor: 'white' }} onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        style={{ justifyContent: 'center', alignContent: 'center', flex: 1, paddingHorizontal: 16, backgroundColor: 'white' }}
      >
        {/* md-logo-ionic */}
        <View style={{ justifyContent: 'center', alignContent: 'center', alignItems: 'center', marginBottom: 30 }}>
          <Text style={{ fontSize: 18, fontWeight: 'bold' }}>OurCalendar에 오신걸 환영합니다</Text>
        </View>
        <View style={{ marginBottom: 10 }}>
          <Text>계정 정보</Text>
        </View>
        <TextInput
          style={{ height: 48, marginBottom: 10 }}
          label='Email'
          keyboardType={'email-address'}
          maxLength={20}
          value={inputs.email}
          onChangeText={(text) => {
            handleOnchange(text, 'email', setInputs);
          }}
        />
        <TextInput
          style={{ height: 48 }}
          label='Password'
          value={inputs.pwd}
          secureTextEntry
          maxLength={10}
          onChangeText={(text) => {
            handleOnchange(text, 'pwd', setInputs);
          }}
        />
        <Button contentStyle={{ height: 50 }} style={{ marginTop: 20, marginBottom: 100 }} mode='contained' onPress={submit}>
          로그인
        </Button>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
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
