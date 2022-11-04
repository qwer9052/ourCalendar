import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Image, Keyboard, KeyboardAvoidingView, Platform, StatusBar, StyleSheet, TouchableWithoutFeedback, View } from 'react-native';
import { TextInput, Text, Button } from 'react-native-paper';

export default function Login() {
  const navigation = useNavigation();
  const [email, setEmail] = React.useState('');
  const [pwd, setPwd] = React.useState('');
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
        <TextInput style={{ height: 48, marginBottom: 10 }} label='Email' keyboardType={'email-address'} maxLength={20} value={email} onChangeText={(text) => setEmail(text)} />
        <TextInput style={{ height: 48 }} label='Password' value={pwd} secureTextEntry maxLength={10} onChangeText={(text) => setPwd(text)} />
        <Button contentStyle={{ height: 50 }} style={{ marginTop: 20, marginBottom: 100 }} mode='contained' onPress={() => navigation.navigate('Login')}>
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
