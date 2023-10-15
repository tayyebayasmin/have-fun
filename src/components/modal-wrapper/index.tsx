import React from 'react';
import {View, ViewStyle} from 'react-native';
import Modal from 'react-native-modal';
import styles from './styles';

interface Props {
  children?: React.ReactNode;
  isVisible: boolean;
  containerStyle?: ViewStyle;
  avoidKeyboard?: boolean;
  onClose?(): void;
  animationIn?: any;
  animationOut?: any;
}
const ModalWrapper = ({
  children,
  isVisible,
  onClose,
  containerStyle,
  animationIn = 'slideInUp',
  animationOut = 'slideOutDown',
  avoidKeyboard = false,
}: Props) => {
  return (
    <Modal
      isVisible={isVisible}
      style={styles.modalContainer}
      animationIn={animationIn}
      animationOut={animationOut}
      onBackButtonPress={onClose}
      onBackdropPress={onClose}
      avoidKeyboard={avoidKeyboard}
      backdropOpacity={0.2}
      testID="modal">
      <View
        testID="inner-view"
        style={[
          styles.modalInnerContainer,
          containerStyle ? containerStyle : {},
        ]}>
        {children}
      </View>
    </Modal>
  );
};
export default ModalWrapper;
