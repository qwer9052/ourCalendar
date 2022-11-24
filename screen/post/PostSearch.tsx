import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { Alert, Platform, Pressable, StatusBar, StyleSheet, View, TextInput } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
import { useDispatch } from 'react-redux';
import { Text, Button } from 'react-native-paper';
import { IconBackBlack, IconPlusBlack, IconXGray } from '../../collection/icons';
import { loadingAction } from '../../store/actions';
import { COLORS } from '../../style/css/commonStyle';
import { axiosJwtPostInstance } from '../../util/axiosPlugin';
import { goBack, handleOnchange } from '../../util/common';
import BorderItems from '../../component/BorderItems';

export default function PostSearch() {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const insets = useSafeAreaInsets();
  const [errors, setErrors] = useState<any>({ search: null });
  const [inputs, setInputs] = useState({ search: '' });

  return (
    <SafeAreaView style={styles.container}>
      <View style={{ flex: 1 }}>
        <View style={{ flexDirection: 'row', alignContent: 'center', alignItems: 'center', borderBottomColor: COLORS.black_100, borderBottomWidth: 1 }}>
          <Pressable onPress={() => goBack(navigation)}>
            <IconBackBlack fill={'#000'} style={{ paddingHorizontal: 20 }} />
          </Pressable>
          <TextInput
            autoFocus
            style={{ height: 42, fontSize: 22, flex: 1 }}
            maxLength={20}
            returnKeyType={'done'}
            onSubmitEditing={(props) => handleOnchange(props.nativeEvent.text, 'search', setInputs)}
          />
        </View>
        {inputs.search ? (
          <BorderItems scrollY={undefined} search={inputs.search} marginTop={0} />
        ) : (
          <View style={{ flex: 0.5, justifyContent: 'center', alignItems: 'center', height: 100 }}>
            <Text>찾으려는 검색어를 입력하세요</Text>
          </View>
        )}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  headerText: {
    justifyContent: 'center',
    fontWeight: 'bold',
    fontSize: 18,
    alignSelf: 'center',
  },
});
