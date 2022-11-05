import { RouteProp, useNavigation } from '@react-navigation/native';
import React, { lazy, useEffect, useRef, useState } from 'react';
import { Keyboard, KeyboardAvoidingView, Platform, Pressable, ScrollView, StatusBar, StyleSheet, Text, View, KeyboardEvent, Animated, Alert } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
import { IconArrowDownGray, IconBackBlack, IconMessageBlack, IconMessageWhite, IconPasswordGray, IconPlusBlack, IconSearchBlack, IconThumbBlack, IconThumbWhite } from '../../collection/icons';
import CommentItem from '../../component/CommentItem';
import PostDetailItem from '../../component/PostDetailItem';
import { PressableOpacity } from '../../component/PressableOpacity';
import { RootStackParamList } from '../../navigation/types';
import { COLORS } from '../../style/css/commonStyle';
import { Post } from '../../type/post';
import { axiosJwtPostInstance } from '../../util/axiosPlugin';
import { goBack } from '../../util/common';
import { useKeyboard } from '../../util/useKeyboard';
import { useKeyboardVerticalOffset } from '../../util/useScreenTransitionEnded';

const BorderItem = lazy(() => import('../../component/BorderItem'));

type postDetail = {
  route: RouteProp<RootStackParamList, 'PostDetail'>;
};

export default function PostDetail(props: postDetail) {
  const { postId } = props.route.params;
  const navigation = useNavigation();
  const [item, setItem] = useState<Post>({});
  const [comment, setComment] = useState('');
  const insets = useSafeAreaInsets();
  const keyboardVerticalOffset = useKeyboardVerticalOffset(45);
  const refInput = useRef<TextInput>(null);

  // const [offsetAnim] = useState(Animated.diffClamp(scrollY, 0, HEADER_HEIGHT));

  // const headerY = offsetAnim.interpolate({
  //   inputRange: [0, HEADER_HEIGHT],
  //   outputRange: [0, -HEADER_HEIGHT],
  //   extrapolate: 'clamp',
  // });

  useEffect(() => {
    post();
  }, []);

  const post = () => {
    axiosJwtPostInstance
      .get(`post/${postId}`)
      .then((res) => {
        setItem(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const reqComment = () => {
    if (comment.length < 1) {
      return;
    }

    axiosJwtPostInstance
      .post(`post/comment/${postId}`)
      .then((res) => {
        Alert.alert('', '댓글이 등록되었습니다.', [{ text: '확인' }]);
      })
      .catch((err) => {
        console.log(err);
      });
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
        <PostDetailItem {...item} onPressItem={() => refInput.current?.focus()} />
        <View
          style={{
            padding: 10,
            borderBottomWidth: 1,
            borderBottomColor: COLORS.black_100,
            marginVertical: 16,
            borderTopWidth: 1,
            borderTopColor: COLORS.black_100,
            flexDirection: 'row',
            alignContent: 'center',
          }}
        >
          <Text>시간순</Text>
          <IconArrowDownGray width={15} height={15} />
        </View>
        <CommentItem />
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
          <Pressable onPress={reqComment} style={{ justifyContent: 'flex-end' }}>
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
