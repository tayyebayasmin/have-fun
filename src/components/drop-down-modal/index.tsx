import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import {KeyboardAwareFlatList} from 'react-native-keyboard-aware-scroll-view';
import {Image} from 'react-native';
import {CustomText, Input, ModalWrapper} from '~components';
import styles from './styles';
import {CommonStyles, width} from '~utils';
import {CommonActions} from '@react-navigation/native';
import AppColors from '~utils/AppColors';

interface Props {
  isVisible: boolean;
  Search?: boolean;
  onClose: () => void;
  onPress: (val?: string | any) => void;
  Data: Array<any> | undefined;
  onChangeText?: (val: string) => void;
  onEndReached?: () => void;
  ListFooterComponent?: any;
  text?: string;
}
const DropDownModal = ({
  isVisible,
  onChangeText = () => {},
  Search = false,
  Data = [],
  onClose,
  onPress,
  onEndReached,
  ListFooterComponent,
  text,
}: Props) => {
  return (
    <ModalWrapper isVisible={isVisible} onClose={onClose}>
      <View style={styles.mainContainer}>
        {text && (
          <CustomText
            size={4}
            textStyles={{marginLeft: width(10)}}
            color={AppColors.gray}>
            Select {text}
          </CustomText>
        )}
        <KeyboardAwareFlatList
          data={Data}
          ListHeaderComponent={
            Search
              ? () => (
                  <View style={styles.inputContainer}>
                    <Input title="Search" onChange={onChangeText} />
                  </View>
                )
              : null
          }
          style={Search ? styles.autoFlat : styles.flatStyle}
          showsVerticalScrollIndicator={false}
          renderItem={({item}) => {
            return (
              <TouchableOpacity
                style={[styles.viewStyle, CommonStyles.rowAlignJustifyCenter]}
                onPress={() => onPress(item)}>
                <Image source={item?.image} />
                <CustomText textStyles={CommonStyles.marginLeft_2}>
                  {item?.name}
                </CustomText>
              </TouchableOpacity>
            );
          }}
          keyExtractor={(item, index) => index.toString()}
          ListFooterComponent={ListFooterComponent}
          onEndReached={onEndReached}
          onEndReachedThreshold={0.5}
        />
      </View>
    </ModalWrapper>
  );
};
export default DropDownModal;
