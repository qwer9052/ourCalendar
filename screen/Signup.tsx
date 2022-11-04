import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { Alert, Image, Keyboard, KeyboardAvoidingView, Platform, StatusBar, StyleSheet, TouchableWithoutFeedback, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { TextInput, Text, Button, HelperText } from 'react-native-paper';
import { axiosInstance, axiosJwtInstance } from '../util/axiosPlugin';
import { handleError, handleOnchange } from '../util/common';
import { isValidEmail } from '../util/stringUtil';

export default function Signup() {
  const navigation = useNavigation();
  const [signupDisable, setSignupDisable] = useState(true);
  const [errors, setErrors] = useState<any>({ email: null, name: null, pwd: null, pwdConfirm: null });
  const [inputs, setInputs] = React.useState({ email: '', name: '', pwd: '', pwdConfirm: '' });

  useEffect(() => {
    checkInputs();
  }, [errors]);

  const validEmail = (email: string) => {
    if (!isValidEmail(email)) {
      handleError('이메일을 확인해 주세요', 'email', setErrors);
    } else {
      handleError('', 'email', setErrors);
    }
  };
  const validName = (name: string) => {
    if (name.length < 2) {
      handleError('이름을 입력해 주세요', 'name', setErrors);
    } else {
      handleError('', 'name', setErrors);
    }
  };

  const validPwd = (pwd: string) => {
    if (pwd.length < 6) {
      handleError('비밀번호를 입력해 주세요', 'pwd', setErrors);
    } else {
      handleError('', 'pwd', setErrors);
    }
  };

  const validPwdConfirm = (pwdConfirm: string) => {
    if (pwdConfirm.length < 6) {
      handleError('비밀번호 확인을 입력해 주세요', 'pwdConfirm', setErrors);
    } else if (pwdConfirm != inputs.pwd) {
      handleError('비밀번호가 같지 않습니다.', 'pwdConfirm', setErrors);
    } else {
      handleError('', 'pwdConfirm', setErrors);
    }
  };

  const checkInputs = () => {
    setTimeout(() => {
      let disable = false;
      Object.values(errors).forEach((e) => {
        if (e == null) {
          disable = true;
        } else if (e.length > 0) {
          disable = true;
        }
      });
      setSignupDisable(disable);
    }, 100);
  };

  const submit = () => {
    axiosInstance
      .post('/user', {
        email: inputs.email,
        pwd: inputs.pwd,
        name: inputs.name,
      })
      .then((res) => {
        Alert.alert('성공');
        console.log(res);
      })
      .catch((err) => {
        Alert.alert('오류');
        console.log(err);
      });
  };

  return (
    <ScrollView style={{ backgroundColor: '#fff' }}>
      <TouchableWithoutFeedback style={{ flex: 1, justifyContent: 'center', alignContent: 'center' }} onPress={Keyboard.dismiss}>
        <View style={{ flex: 1, paddingHorizontal: 16 }}>
          {/* md-logo-ionic */}
          <View style={{ justifyContent: 'center', alignContent: 'center', alignItems: 'center', margin: 30 }}>
            <Text style={{ fontSize: 18, fontWeight: 'bold' }}>회원 정보를 입력해 주세요</Text>
          </View>
          <View style={{ marginBottom: 10 }}>
            <Text>회원가입 정보</Text>
          </View>
          <TextInput
            style={{ height: 48 }}
            label='Email'
            keyboardType={'email-address'}
            maxLength={20}
            value={inputs.email}
            onChangeText={(text) => {
              handleOnchange(text, 'email', setInputs);
              validEmail(text);
            }}
          />
          <HelperText type='error' visible={true}>
            {errors.email}
          </HelperText>

          <TextInput
            style={{ height: 48 }}
            label='Name'
            maxLength={8}
            value={inputs.name}
            onChangeText={(text) => {
              handleOnchange(text, 'name', setInputs);
              validName(text);
            }}
          />
          <HelperText type='error' visible={true}>
            {errors.name}
          </HelperText>

          <TextInput
            style={{ height: 48 }}
            label='Password'
            value={inputs.pwd}
            secureTextEntry
            maxLength={10}
            onChangeText={(text) => {
              handleOnchange(text, 'pwd', setInputs);
              validPwd(text);
            }}
          />
          <HelperText type='error' visible={true}>
            {errors.pwd}
          </HelperText>

          <TextInput
            style={{ height: 48 }}
            label='Password Confirm'
            value={inputs.pwdConfirm}
            secureTextEntry
            maxLength={10}
            onChangeText={(text) => {
              handleOnchange(text, 'pwdConfirm', setInputs);
              validPwdConfirm(text);
            }}
          />
          <HelperText type='error' visible={true}>
            {errors.pwdConfirm}
          </HelperText>

          <Button disabled={signupDisable} contentStyle={{ height: 50 }} style={{ marginTop: 20 }} mode='contained' onPress={submit}>
            제출
          </Button>
        </View>
      </TouchableWithoutFeedback>
    </ScrollView>
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
