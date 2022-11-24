import React, { useCallback, useEffect, useState } from 'react';
import { Alert, Animated, Image, LayoutAnimation, Pressable, StyleSheet, Text, View } from 'react-native';
import LottieView from 'lottie-react-native';
import BorderItem from './BorderItem';
import { Post } from '../type/post';
import { COLORS } from '../style/css/commonStyle';
import { axiosJwtPostInstance } from '../util/axiosPlugin';
import { useFocusEffect } from '@react-navigation/native';
import { IconArrowDownGray } from '../collection/icons';
import { layoutAnimation } from '../style/animate/animate';
import { LoadingView } from './LoadingView';

type BorderItemsType = {
  scrollY: Animated.Value | undefined;
  search: string | undefined;
  marginTop: number;
};

function BorderItems(props: BorderItemsType) {
  const [list, setList] = useState<Post[]>([]);

  const renderList = (props: { index: number; item: Post }) => {
    const { index, item } = props;
    return <BorderItem key={'post_' + index} {...item} />;
  };

  useEffect(() => {}, []);

  useFocusEffect(
    useCallback(() => {
      post();
    }, []),
  );

  const post = () => {
    axiosJwtPostInstance
      .get(`post?search=${props.search}`)
      .then((res) => {
        // res.data.map((e) => {
        //   console.log(e);
        // });
        setList(res.data);
        layoutAnimation();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Animated.FlatList
      bounces={false}
      scrollEventThrottle={16}
      ItemSeparatorComponent={() => <View style={styles.itemSeparator} />}
      ListHeaderComponent={
        <View style={{ marginTop: props.marginTop, paddingHorizontal: 16, justifyContent: 'flex-end', flexDirection: 'row' }}>
          {/* <Pressable onPress={() => Alert.alert('ASdasd')} style={{ justifyContent: 'center' }}>
            <Text style={{ fontSize: 15 }}>정렬</Text>
          </Pressable>
          <IconArrowDownGray width={15} /> */}
        </View>
      }
      style={{ flexGrow: 1, width: '100%' }}
      data={list}
      renderItem={renderList}
      onScroll={
        props.scrollY &&
        Animated.event(
          [
            {
              nativeEvent: {
                contentOffset: { y: props.scrollY },
              },
            },
          ],
          { useNativeDriver: true },
        )
      }
    />
  );
}

const styles = StyleSheet.create({
  itemSeparator: {
    height: 1,
    marginVertical: 6,
    backgroundColor: COLORS.black_100,
  },
});

export default BorderItems;
