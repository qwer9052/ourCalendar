import React from 'react';
import { Animated, Image, Pressable, StyleSheet, Text, View } from 'react-native';
import LottieView from 'lottie-react-native';
import { PressableOpacity } from './PressableOpacity';
import { useNavigation } from '@react-navigation/native';
import { Comment, Post } from '../type/post';
import { IconMessageWhite, IconPasswordGray, IconThumbWhite } from '../collection/icons';

type CommentDetailItemype = Comment & {
  onPressItem?: Function;
};

function CommentDetailItem(props: CommentDetailItemype) {
  const navigation = useNavigation();
  const { content, creDt, del, tbUser, onPressItem } = props;
  return (
    <PressableOpacity style={{ paddingVertical: 8, paddingHorizontal: 16 }}>
      <View style={{ flexDirection: 'row', paddingVertical: 8 }}>
        <View style={{ backgroundColor: '#222', width: 32, height: 32, borderRadius: 16 }} />
        <View style={{ marginLeft: 15 }}>
          <Text>{''}</Text>
          <Text>{tbUser?.name}</Text>
        </View>
      </View>
      <View style={{ paddingLeft: 10, paddingVertical: 5 }}>
        <Text style={{ fontSize: 20, fontWeight: 'bold' }}>{''}</Text>
      </View>
      <>
        <Text numberOfLines={3}>{content}</Text>
      </>
      <View style={{ flexDirection: 'row', flex: 1, marginTop: 20 }}>
        <Pressable style={{ flex: 0.33, alignItems: 'center', justifyContent: 'center', alignContent: 'center' }}>
          <IconThumbWhite width={16} />
        </Pressable>
      </View>
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

export default CommentDetailItem;
