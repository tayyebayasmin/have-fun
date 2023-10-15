import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {FlatList, View, TouchableOpacity, StyleSheet} from 'react-native';
import Button from '~components/button';
import ModalWrapper from '~components/modal-wrapper';
import {CustomText} from '~components/texts';
import {ScreenNames} from '~routes';
import {CommonStyles, height, width} from '~utils';
import AppColors from '~utils/AppColors';
import {FontFamily} from '~utils/Fontfamily';

interface Props {
  isVisible?: any;
  onClose?: () => void;
  values?: any;
  data?: any;
  setArray?: any;
  array?: any;
}
const InterestSelectionModal = ({
  isVisible,
  onClose,
  values = [],
  data,
  setArray,
  array,
}: Props) => {
  const navigation = useNavigation();
  return (
    <ModalWrapper
      isVisible={isVisible}
      onClose={onClose}
      avoidKeyboard={true}
      animationIn={'zoomInUp'}
      animationOut={'zoomOutDown'}>
      <View
        style={{
          height: height(60),
        }}
        testID="modal-container">
        <CustomText
          center
          size={6}
          lineHeight={width(7)}
          font={FontFamily.appFontSemiBold}
          color={AppColors.primaryPurple}
          textStyles={[CommonStyles.marginLeft_3, CommonStyles.marginBottom_3]}>
          Select up to 5 interests
        </CustomText>
        <FlatList
          style={{
            width: width(100),
            alignSelf: 'center',
          }}
          //@ts-ignore
          numColumns={'3'}
          data={data}
          contentContainerStyle={{
            alignItems: 'center',
          }}
          renderItem={({item, index}) => {
            return (
              <TouchableOpacity
                onPress={() => {
                  const temp = [...array];
                  const index = temp.indexOf(item?.name);
                  if (index === -1) {
                    temp.push(item?.name);
                  } else {
                    temp.splice(index, 1);
                  }
                  setArray(temp);
                }}
                style={[
                  styles.row,
                  {
                    backgroundColor: array.includes(item?.name)
                      ? AppColors.primary
                      : AppColors.white,
                  },
                ]}>
                <CustomText size={3.8} textStyles={CommonStyles.marginRight_1}>
                  {item?.image}
                </CustomText>
                <CustomText textStyles={CommonStyles.marginTop_0_5}>
                  {item?.name}
                </CustomText>
              </TouchableOpacity>
            );
          }}
        />
        <Button onPress={onClose}>Save</Button>
      </View>
    </ModalWrapper>
  );
};
export default InterestSelectionModal;

const styles = StyleSheet.create({
  container: {
    width: width(100),
    flex: 1,
    height: height(50),
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: width(2),
    paddingHorizontal: width(3),
    marginHorizontal: width(2),
    alignSelf: 'center',
    //@ts-ignore
    justifyContent: 'center',
    marginVertical: width(1.5),
    borderRadius: width(5),
    borderColor: AppColors.gray,
    borderWidth: width(0.4),
  },
});
