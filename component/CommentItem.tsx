import React from 'react';
import { Animated, Image, Pressable, StyleSheet, Text, View } from 'react-native';
import LottieView from 'lottie-react-native';
import { PressableOpacity } from './PressableOpacity';
import { useNavigation } from '@react-navigation/native';
import { Comment, Post } from '../type/post';
import { IconMessageBlack, IconMessageWhite, IconPasswordGray, IconThumbBlack, IconThumbWhite } from '../collection/icons';
import { COLORS } from '../style/css/commonStyle';
import CommentChlidrenItem from './CommentChlidrenItem';
import { dateFormat } from '../util/dateUtil';

type CommentItemType = Comment & {};

function CommentItem(props: CommentItemType) {
  const { commentId, tbUser, del, content, parentId, creDt, children } = props;
  const navigation = useNavigation();

  return (
    <View>
      <View style={{ paddingHorizontal: 16, paddingVertical: 16, borderBottomWidth: 1, borderBottomColor: COLORS.black_000 }}>
        <View>
          <Text>{tbUser.name}</Text>
        </View>
        <View>
          <Text>{content}</Text>
        </View>
        <View style={{ flexDirection: 'row', flex: 1, marginTop: 20, alignContent: 'center', alignItems: 'center' }}>
          <View>
            <Text>{dateFormat(creDt)}</Text>
          </View>
          <PressableOpacity style={{ marginHorizontal: 8, flexDirection: 'row', alignContent: 'center', alignItems: 'center' }}>
            <IconThumbBlack width={12} height={12} />
            <Text style={{ fontSize: 13, marginLeft: 5 }}>좋아요</Text>
          </PressableOpacity>
          <PressableOpacity
            onPress={() => navigation.navigate('CommentDetail', { commentId: commentId })}
            style={{ marginHorizontal: 8, flexDirection: 'row', alignContent: 'center', alignItems: 'center' }}
          >
            <IconMessageBlack width={11} height={11} />
            <Text style={{ fontSize: 13, marginLeft: 5 }}>대댓글</Text>
          </PressableOpacity>
        </View>
      </View>
      {children.map((e) => {
        return <CommentChlidrenItem key={e.creDt + '_' + e.commentId} {...e} />;
      })}
    </View>
  );
}

const styles = StyleSheet.create({});

export default CommentItem;
