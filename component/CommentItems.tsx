import React from 'react';
import { Animated, Image, Pressable, StyleSheet, Text, View } from 'react-native';
import LottieView from 'lottie-react-native';
import { PressableOpacity } from './PressableOpacity';
import { useNavigation } from '@react-navigation/native';
import { Comment, Post } from '../type/post';
import { IconMessageBlack, IconMessageWhite, IconPasswordGray, IconThumbBlack, IconThumbWhite } from '../collection/icons';
import { COLORS } from '../style/css/commonStyle';
import CommentItem from './CommentItem';

type CommentItemType = {
  comment: Comment[];
};

function CommentItems(props: CommentItemType) {
  const navigation = useNavigation();

  return (
    <View style={{ paddingBottom: 30 }}>
      {props.comment?.map((e) => {
        return <CommentItem key={e.creDt + '_' + e.commentId} {...e} />;
      })}
    </View>
  );
}

const styles = StyleSheet.create({});

export default CommentItems;
