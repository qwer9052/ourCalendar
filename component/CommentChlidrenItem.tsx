import React from 'react';
import { Animated, Image, Pressable, StyleSheet, Text, View } from 'react-native';
import LottieView from 'lottie-react-native';
import { PressableOpacity } from './PressableOpacity';
import { useNavigation } from '@react-navigation/native';
import { Comment, CommentChildren, Post } from '../type/post';
import moment from 'moment';
import { IconMessageBlack, IconMessageWhite, IconPasswordGray, IconThumbBlack, IconThumbWhite } from '../collection/icons';
import { COLORS } from '../style/css/commonStyle';
import { dateFormat } from '../util/dateUtil';

type CommentItemType = CommentChildren & {
  backgroundColor?: string | undefined;
  marginLeft?: number | undefined;
};

function CommentChlidrenItem(props: CommentItemType) {
  const { commentId, tbUser, del, content, parentId, creDt, backgroundColor, marginLeft } = props;
  const navigation = useNavigation();

  return (
    <View
      style={{
        paddingHorizontal: 16,
        paddingVertical: 16,
        flexDirection: 'row',
        backgroundColor: backgroundColor ? backgroundColor : COLORS.black_000,
        borderBottomWidth: 1,
        borderBottomColor: COLORS.black_000,
      }}
    >
      <View style={{ marginLeft: marginLeft ? marginLeft : 16 }}>
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
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});

export default CommentChlidrenItem;
