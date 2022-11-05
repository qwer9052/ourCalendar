import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { Alert, Platform, Pressable, StatusBar, StyleSheet, Text, View } from 'react-native';
import { ScrollView, TextInput } from 'react-native-gesture-handler';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
import { useDispatch } from 'react-redux';
import { IconPlusBlack, IconXGray } from '../../collection/icons';
import { loadingAction } from '../../store/actions';
import { COLORS } from '../../style/css/commonStyle';
import { axiosJwtPostInstance } from '../../util/axiosPlugin';
import { goBack } from '../../util/common';

const HEADER_HEIGHT = Platform.OS == 'ios' ? 90 : 70 + StatusBar.currentHeight;

export default function PostWrite() {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const insets = useSafeAreaInsets();
  const [inputs, setInputs] = useState({ title: '', content: '' });

  useEffect(() => {
    // dispatch(loadingAction(true));
    // setTimeout(() => {
    //   dispatch(loadingAction(false));
    // }, 3000);
  }, []);

  const alert = () =>
    Alert.alert(
      // 말그대로 Alert를 띄운다
      '', // 첫번째 text: 타이틀 제목
      '글을 등록 하시겠습니까?', // 두번째 text: 그 밑에 작은 제목
      [
        // 버튼 배열
        {
          text: '아니요', // 버튼 제목
          style: 'cancel',
        },
        { text: '등록', onPress: valid }, //버튼 제목
        // 이벤트 발생시 로그를 찍는다
      ],
      { cancelable: false },
    );

  const valid = () => {
    if (inputs.title.length < 2) {
      Alert.alert('', '제목을 확인해주세요.', [{ text: '확인' }]);
      return;
    }
    if (inputs.content.length < 2) {
      Alert.alert('', '내용을 확인해주세요.', [{ text: '확인' }]);
      return;
    }
    submit();
  };

  const submit = () => {
    dispatch(loadingAction(true));
    axiosJwtPostInstance
      .post('/post', inputs)

      .then((res) => {
        console.log(res);
        Alert.alert('등록 되었습니다.');
        goBack(navigation);
      })
      .catch((err) => {
        console.log(err);
        Alert.alert('실패.');
      })
      .finally(() => {
        dispatch(loadingAction(false));
      });
  };

  return (
    <SafeAreaView style={styles.container}>
      <View
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
            transform: [{ translateY: 0 }],
            justifyContent: 'center',
          },
        ]}
      >
        <View style={{ marginTop: 12, position: 'relative', backgroundColor: '#ffa' }}>
          <View style={{ position: 'absolute', left: 0, right: 0 }}>
            <Text style={styles.headerText}>글 쓰기</Text>
          </View>
          <Pressable onPress={() => goBack(navigation)} hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }} style={{ position: 'absolute', left: 16 }}>
            <IconXGray width={16} height={16} />
          </Pressable>
          <Pressable onPress={alert} hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }} style={{ position: 'absolute', right: 16 }}>
            <Text style={{ fontSize: 16, fontWeight: '400' }}>등록</Text>
          </Pressable>
        </View>
      </View>

      <View style={{ marginTop: HEADER_HEIGHT - insets.top, flex: 1 }}>
        <ScrollView style={{ paddingHorizontal: 16, paddingTop: 20 }}>
          <TextInput
            autoFocus
            value={inputs.title}
            maxLength={10}
            style={{ fontSize: 17 }}
            placeholder={'제목을 입력해주세요.'}
            onChangeText={(text) =>
              setInputs((e) => {
                return { ...e, title: text };
              })
            }
          />
          <View style={{ height: 1, backgroundColor: COLORS.black_100, marginVertical: 16 }} />
          <TextInput
            value={inputs.content}
            style={{ fontSize: 17 }}
            multiline
            placeholder={'내용 입력해주세요.'}
            onChangeText={(text) =>
              setInputs((e) => {
                return { ...e, content: text };
              })
            }
          />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  headerText: {
    justifyContent: 'center',
    fontWeight: 'bold',
    fontSize: 18,
    alignSelf: 'center',
  },
});
