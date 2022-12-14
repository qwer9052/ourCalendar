import React from 'react';
import { StyleSheet, View } from 'react-native';
import LottieView from 'lottie-react-native';

const styles = StyleSheet.create({
  loading_able: {
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    position: 'absolute',
    backgroundColor: 'rgba(255,255,255,0.7)',
    zIndex: 1000,
  },
});

type LoadingViewTypes = {
  setShow: boolean;
};

export function LoadingView(props: LoadingViewTypes) {
  return props.setShow ? (
    <View style={styles.loading_able}>
      <LottieView
        style={{ width: 80, height: 80, marginTop: 'auto', marginBottom: 'auto', marginLeft: 'auto', marginRight: 'auto' }}
        source={require('../assets/lottie/loading.json')}
        autoPlay={true}
        loop={true}
      />
    </View>
  ) : null;
}
