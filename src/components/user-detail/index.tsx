import React, {useRef, useState} from 'react';
import {
  View,
  FlatList,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import Input from '~components/input';
import {CustomText} from '~components/texts';
import {CommonStyles, height, width} from '~utils';
import AppColors from '~utils/AppColors';
import {FontFamily} from '~utils/Fontfamily';
import styles from './styles';

const UserDetail = ({isVisible}: {isVisible?: any}) => {
  if (isVisible)
    return (
      <ScrollView style={styles.container}>
        <CustomText
          center
          size={4.5}
          lineHeight={width(5)}
          font={FontFamily.appFontSemiBold}
          color={AppColors.primaryPurple}
          textStyles={CommonStyles.marginLeft_3}>
          Tell us about you
        </CustomText>
        <Input
          placeholder="First Name"
          containerStyle={CommonStyles.marginVertical_1}
          innerContainerStyle={{borderColor: AppColors.white}}
        />
        <Input
          placeholder="Last Name"
          containerStyle={CommonStyles.marginVertical_1}
          innerContainerStyle={{borderColor: AppColors.white}}
        />
        <Input
          placeholder="Description"
          multiline
          numberOfLines={5}
          containerStyle={CommonStyles.marginVertical_1}
          innerContainerStyle={{
            borderColor: AppColors.white,
            height: height(20),
            justifyContent: 'flex-start',
          }}
        />
        <CustomText
          center
          size={4.5}
          lineHeight={width(5)}
          font={FontFamily.appFontSemiBold}
          color={AppColors.primaryPurple}
          textStyles={[CommonStyles.marginTop_5, CommonStyles.marginLeft_3]}>
          Job Information
        </CustomText>
        <Input
          placeholder="Job title"
          containerStyle={CommonStyles.marginVertical_1}
          innerContainerStyle={{borderColor: AppColors.white}}
        />
        <Input
          placeholder="Company"
          containerStyle={CommonStyles.marginVertical_1}
          innerContainerStyle={{borderColor: AppColors.white}}
        />
      </ScrollView>
    );
  else return <></>;
};
export default UserDetail;
