import React from 'react';
import { Animated, Image, Pressable, StyleSheet, Text, View } from 'react-native';
import LottieView from 'lottie-react-native';
import { PressableOpacity } from './PressableOpacity';

type BorderItemType = {
  postId: number;
  title: string;
  content: string;
  creDt: Date;
  postType: number;
  del: number;
};

/**
 * 
      postId: 1,
      title: '제목입니다.',
      content:
        '내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용',
      creDt: new Date('2022-10-10 16:13:42'),
      postType: 1,
      del: 0,
 */

function BorderItem(props: BorderItemType) {
  const { postId, title, content, creDt, postType, del } = props;
  return (
    <PressableOpacity style={{ paddingVertical: 8, paddingHorizontal: 16 }}>
      <View style={{ flexDirection: 'row', paddingVertical: 8 }}>
        <View style={{ backgroundColor: '#222', width: 32, height: 32, borderRadius: 16 }} />
        <Text>creDt : {creDt.toDateString()}</Text>
      </View>
      <View style={{ paddingLeft: 10, paddingVertical: 5 }}>
        <Text style={{ fontSize: 20, fontWeight: 'bold' }}>{title}</Text>
      </View>
      <>
        <Text numberOfLines={3}>{content}</Text>
      </>
    </PressableOpacity>
  );
}

const styles = StyleSheet.create({
  loading_able: {
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    position: 'absolute',
    backgroundColor: 'rgba(255,255,255,0.1)',
    zIndex: 1000,
  },
});

export default BorderItem;
