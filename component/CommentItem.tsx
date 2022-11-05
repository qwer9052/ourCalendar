import React from 'react';
import { Animated, Image, Pressable, StyleSheet, Text, View } from 'react-native';
import LottieView from 'lottie-react-native';
import { PressableOpacity } from './PressableOpacity';
import { useNavigation } from '@react-navigation/native';
import { Post } from '../type/post';
import { IconMessageBlack, IconMessageWhite, IconPasswordGray, IconThumbBlack, IconThumbWhite } from '../collection/icons';
import { COLORS } from '../style/css/commonStyle';

type CommentItemType = {};

function CommentItem(props: CommentItemType) {
  const navigation = useNavigation();

  return (
    <View style={{ paddingHorizontal: 16, paddingVertical: 16, borderBottomWidth: 1, borderBottomColor: COLORS.black_100 }}>
      <View>
        <Text>username</Text>
      </View>
      <View>
        <Text>content</Text>
      </View>
      <View style={{ flexDirection: 'row', flex: 1, marginTop: 20, alignContent: 'center', alignItems: 'center' }}>
        <View>
          <Text>credt</Text>
        </View>
        <PressableOpacity style={{ marginHorizontal: 8, flexDirection: 'row', alignContent: 'center', alignItems: 'center' }}>
          <IconThumbBlack width={12} height={12} />
          <Text style={{ fontSize: 13, marginLeft: 5 }}>좋아요</Text>
        </PressableOpacity>
        <PressableOpacity style={{ marginHorizontal: 8, flexDirection: 'row', alignContent: 'center', alignItems: 'center' }}>
          <IconMessageBlack width={11} height={11} />
          <Text style={{ fontSize: 13, marginLeft: 5 }}>대댓글</Text>
        </PressableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});

export default CommentItem;
