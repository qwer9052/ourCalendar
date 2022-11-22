import React from 'react';
import { Animated, Image, Pressable, StyleSheet, Text, View } from 'react-native';
import LottieView from 'lottie-react-native';
import { PressableOpacity } from './PressableOpacity';
import { useNavigation } from '@react-navigation/native';
import { Post } from '../type/post';
import { IconMessageWhite, IconPasswordGray, IconThumbWhite } from '../collection/icons';

type BorderItemType = Post & {};

function BorderItem(props: BorderItemType) {
  const navigation = useNavigation();
  const { postId, title, content, creDt, postType, del, tbUser } = props;
  return (
    <PressableOpacity onPress={() => navigation.navigate('PostDetail', { postId: postId })} style={{ paddingVertical: 8, paddingHorizontal: 16 }}>
      <View style={{ flexDirection: 'row', paddingVertical: 8 }}>
        <View style={{ backgroundColor: '#222', width: 32, height: 32, borderRadius: 16 }} />
        <View style={{ marginLeft: 15 }}>
          <Text>{postType}</Text>
          <Text>{tbUser?.name}</Text>
        </View>
      </View>
      <View style={{ paddingLeft: 10, paddingVertical: 5 }}>
        <Text style={{ fontSize: 20, fontWeight: 'bold' }}>{title}</Text>
      </View>
      <>
        <Text numberOfLines={3}>{content}</Text>
      </>
      <View style={{ flexDirection: 'row', flex: 1, marginTop: 20 }}>
        <Pressable style={{ flex: 1, alignItems: 'center', justifyContent: 'center', alignContent: 'center' }}>
          <IconThumbWhite width={16} />
        </Pressable>
        <Pressable onPress={() => navigation.navigate('PostDetail', { postId: postId })} style={{ flex: 1, alignItems: 'center', justifyContent: 'center', alignContent: 'center' }}>
          <IconMessageWhite width={15} />
        </Pressable>
        <Pressable style={{ flex: 1, alignItems: 'center', justifyContent: 'center', alignContent: 'center' }}>
          <IconPasswordGray fill={'#000'} width={17} />
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

export default BorderItem;
