import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import Modal from 'react-native-modal';
import {CustomText} from '~components/texts';
import styles from './styles';

interface DropMenuProps {
  isVisible: boolean;
  onClose: () => void;
  onPressFirstBtn: () => void;
  onPressSecondBtn: () => void;
  firstBtnText: string;
  secondBtnText: string;
  thirdText?: string | null;
  onPressThirdBtn?: () => void;
}
const DropDownMenu = ({
  isVisible = false,
  onClose = () => {},
  onPressFirstBtn,
  onPressSecondBtn = () => {},
  firstBtnText = '',
  secondBtnText = '',
  thirdText = null,
  onPressThirdBtn = () => {},
}: DropMenuProps) => {
  return (
    <Modal
      isVisible={isVisible}
      onBackdropPress={onClose}
      onBackButtonPress={onClose}
      animationIn="fadeInUpBig"
      animationInTiming={1000}
      testID="dropDownMenu">
      <View style={styles.modalContainer}>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            activeOpacity={0.7}
            style={styles.button}
            onPress={onPressFirstBtn}>
            <CustomText>{firstBtnText}</CustomText>
          </TouchableOpacity>

          <View style={styles.line} />
          <TouchableOpacity
            activeOpacity={0.7}
            style={styles.button}
            onPress={onPressSecondBtn}>
            <CustomText>{secondBtnText}</CustomText>
          </TouchableOpacity>

          {thirdText !== null && (
            <>
              <View style={styles.line} />
              <TouchableOpacity
                activeOpacity={0.7}
                style={styles.button}
                onPress={onPressThirdBtn}>
                <CustomText>{thirdText}</CustomText>
              </TouchableOpacity>
            </>
          )}
        </View>
        <TouchableOpacity
          activeOpacity={0.9}
          style={styles.cancelBtn}
          onPress={onClose}>
          <CustomText>Cancel</CustomText>
        </TouchableOpacity>
      </View>
    </Modal>
  );
};
export default DropDownMenu;
