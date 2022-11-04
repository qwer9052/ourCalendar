import React, { forwardRef, useImperativeHandle, useRef } from 'react';
import { View, StyleProp, ViewStyle } from 'react-native';
import { Modalize } from 'react-native-modalize';
//import { COLORS } from '../common/script/style';

type ModalizeProps = {
  navigationRef: any;
  body: any;
  height: number;
  showHandle?: boolean | undefined;
  modalStyle?: StyleProp<ViewStyle> | undefined;
  onClosed?: () => void | undefined;
};

const ModalizePopup = forwardRef((props: ModalizeProps, ref) => {
  const modalizeRef = useRef<Modalize>(null);

  useImperativeHandle(ref, () => ({
    open: () => {
      console.log(1);
      modalizeRef.current?.open();
    },
    close: () => {
      console.log(2);
      modalizeRef.current?.close();
    },
  }));

  return (
    <Modalize
      //handleStyle={{ backgroundColor: props.showHandle ? 'rgba(0,0,0,0)' : 'rgba(0,0,0,0)' }}
      scrollViewProps={{ bounces: false, scrollEnabled: false }}
      ref={modalizeRef}
      rootStyle={{ zIndex: 1000 }}
      modalStyle={props.modalStyle}
      disableScrollIfPossible={false}
      onClosed={props.onClosed}
      modalHeight={props.height}
      children={<View style={{ height: props.height }}>{props.body}</View>}
    />
  );
});
export default React.memo(ModalizePopup);
