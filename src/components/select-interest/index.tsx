import React, {useState} from 'react';
import {FlatList, ScrollView, TouchableOpacity} from 'react-native';
import {CustomText} from '~components/texts';
import {CommonStyles, height, width} from '~utils';
import AppColors from '~utils/AppColors';
import {FontFamily} from '~utils/Fontfamily';
import styles from './styles';

interface Props {
  isVisible?: any;
  onClose?: () => void;
  values?: any;
  data?: any;
  setArray?: any;
  array?: any;
}
const SelectInterest = ({isVisible, array, data, setArray}: Props) => {
  if (isVisible)
    return (
      <ScrollView style={styles.container}>
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
      </ScrollView>
    );
  else return <></>;
};
export default SelectInterest;
