import { RouteProp, useNavigation } from '@react-navigation/native';
import React, { lazy, useEffect, useRef, useState } from 'react';
import { Keyboard, KeyboardAvoidingView, Platform, Pressable, ScrollView, StatusBar, StyleSheet, Text, View, KeyboardEvent, Animated, Alert } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
import { IconArrowDownGray, IconBackBlack, IconMessageBlack, IconMessageWhite, IconPasswordGray, IconPlusBlack, IconSearchBlack, IconThumbBlack, IconThumbWhite } from '../../collection/icons';
import CommentChlidrenItem from '../../component/CommentChlidrenItem';
import CommentDetailItem from '../../component/CommentDetailItem';
import CommentItem from '../../component/CommentItem';
import CommentItems from '../../component/CommentItems';
import PostDetailItem from '../../component/PostDetailItem';
import { PressableOpacity } from '../../component/PressableOpacity';
import { RootStackParamList } from '../../navigation/types';
import { layoutAnimation } from '../../style/animate/animate';
import { COLORS } from '../../style/css/commonStyle';
import { Comment, Post } from '../../type/post';
import { axiosJwtPostInstance } from '../../util/axiosPlugin';
import { goBack } from '../../util/common';
import { useKeyboard } from '../../util/useKeyboard';
import { useKeyboardVerticalOffset } from '../../util/useScreenTransitionEnded';

const BorderItem = lazy(() => import('../../component/BorderItem'));

type commentDetail = {
  route: RouteProp<RootStackParamList, 'CommentDetail'>;
};

export default function CommentDetail(props: commentDetail) {
  const { commentId } = props.route.params;
  const navigation = useNavigation();
  const [item, setItem] = useState<Comment>({});
  const [comment, setComment] = useState('');
  const insets = useSafeAreaInsets();
  const refInput = useRef<TextInput>(null);

  useEffect(() => {
    getComment();
  }, []);

  const getComment = () => {
    axiosJwtPostInstance
      .get(`/post/comment/${commentId}`)
      .then((res) => {
        setItem(res.data);
        layoutAnimation();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const reqComment = () => {
    if (comment.length < 1) {
      Alert.alert('', '댓글을 입력해주세요.', [{ text: '확인' }]);
      return;
    }

    axiosJwtPostInstance
      .post(`post/comment/${commentId}`, { content: comment })
      .then((res) => {
        setComment('');
        Alert.alert('', '댓글이 등록되었습니다.', [{ text: '확인' }]);
        getComment();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const alert = () => {
    Keyboard.dismiss();
    Alert.alert(
      '',
      '글을 등록 하시겠습니까?',
      [
        {
          text: '아니요',
          style: 'cancel',
        },
        { text: '등록', onPress: reqComment },
      ],
      { cancelable: false },
    );
  };

  return (
    <SafeAreaView style={{ backgroundColor: COLORS.white, flex: 1 }}>
      <View
        style={[
          {
            height: 43,
            backgroundColor: '#fff',
            borderBottomWidth: 1,
            borderBottomColor: COLORS.black_100,
            justifyContent: 'center',
          },
        ]}
      >
        <View style={{ marginTop: 'auto', marginBottom: 12, position: 'relative' }}>
          <Pressable onPress={() => goBack(navigation)} hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }} style={{ position: 'absolute', left: 16 }}>
            <IconBackBlack fill={COLORS.black_800} width={16} height={16} />
          </Pressable>
          <Pressable hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }} style={{ marginLeft: 'auto', right: 16 }}>
            <IconSearchBlack fill={COLORS.white} />
          </Pressable>
        </View>
      </View>

      <ScrollView style={{ flex: 1 }}>
        <CommentDetailItem {...item} onPressItem={() => refInput.current?.focus()} />
        <View
          style={{
            marginVertical: 16,
            borderTopWidth: 1,
            borderTopColor: COLORS.black_000,
          }}
        >
          {/* <Text>시간순</Text>
          <IconArrowDownGray width={15} height={15} /> */}
        </View>
        {item.children?.map((e) => {
          return <CommentChlidrenItem backgroundColor='#fff' marginLeft={1} key={e.creDt + '_' + e.commentId} {...e} />;
        })}
      </ScrollView>
      <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : undefined} style={{ position: 'absolute', bottom: 0, width: '100%', backgroundColor: '#fff' }}>
        <Animated.View
          style={[
            { backgroundColor: '#fff', borderTopColor: COLORS.black_100, borderTopWidth: 1, width: '100%', paddingHorizontal: 16, marginBottom: insets.bottom, flexDirection: 'row', paddingTop: 10 },
          ]}
        >
          <TextInput
            ref={refInput}
            maxLength={30}
            style={{ fontSize: 16, flex: 1 }}
            placeholderTextColor={COLORS.black_100}
            placeholder='댓글을 남겨주세요'
            onChangeText={setComment}
            value={comment}
          />
          <Pressable onPress={alert} style={{ justifyContent: 'flex-end' }}>
            <Text style={{}}>등록</Text>
          </Pressable>
        </Animated.View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  headerText: {
    justifyContent: 'center',
    fontWeight: 'bold',
    fontSize: 18,
    alignSelf: 'center',
  },
  itemSeparator: {
    height: 100,
    marginVertical: 60,
    backgroundColor: COLORS.black_100,
  },
});
