import React, {forwardRef, useImperativeHandle, useState} from 'react';
import {Image, View} from 'react-native';
import Modal from 'react-native-modal';
import AppColors from '~utils/AppColors';
import {CommonStyles, width} from '~utils';
import {Button, CustomText} from '~components';
import styles from './styles';
import {FontFamily} from '~utils/Fontfamily';
import {Icons} from '~assets/images';

const VerifiedModal = ({onPressStarted}: {onPressStarted?: any}, ref: any) => {
  const [isVisible, setVisible] = useState(false);
  useImperativeHandle(ref, () => ({
    show: function () {
      setVisible(true);
    },
    hide: function () {
      setVisible(false);
    },
  }));
  return (
    <Modal isVisible={isVisible} animationOut={'zoomOutDown'} testID="modal">
      <View style={styles.modalInnerContainer}>
        <Image source={Icons.tick} style={{marginTop: width(5)}} />
        <CustomText
          color={'#22172A'}
          size={5}
          lineHeight={width(7)}
          textStyles={CommonStyles.marginTop_2}
          font={FontFamily.appFontSemiBold}>
          You’re Verified
        </CustomText>
        <View style={styles.textView}>
          <CustomText
            size={4}
            textStyles={[
              CommonStyles.textAlignCenter,
              CommonStyles.marginTop_2,
            ]}
            color={AppColors.grey10}>
            Your account is verified, let’s start make friends!
          </CustomText>
        </View>
        <Button
          containerStyle={CommonStyles.marginTop_5}
          onPress={onPressStarted}>
          Get started
        </Button>
      </View>
    </Modal>
  );
};
export default forwardRef(VerifiedModal);
