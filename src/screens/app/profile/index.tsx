import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React, {useState, useRef} from 'react';
import {Image, TouchableOpacity, View} from 'react-native';
import {ScreenWrapper} from 'react-native-screen-wrapper';
import {Icons} from '~assets/images';
import {
  Account,
  Chat,
  Language,
  RightArrowSvg,
  Setting,
  Swip,
} from '~assets/SVG';
import {Button, CustomText, Header} from '~components';
import {ScreenNames} from '~routes';
import {CommonStyles, height, width} from '~utils';
import AppColors from '~utils/AppColors';
import {FontFamily} from '~utils/Fontfamily';
import {CircularPercentageWithIcon} from './percentage.js';
import styles from './styles';
const Profile = ({navigation}: NativeStackScreenProps<any>) => {
  return (
    <ScreenWrapper statusBarColor={'white'} barStyle="dark-content">
      <View style={styles.container}>
        <Image
          source={Icons.profile}
          style={{
            borderRadius: width(100),
            alignSelf: 'center',
            marginTop: width(5),
            borderColor: AppColors.primary,
            borderWidth: width(0.5),
          }}
        />
        <CustomText
          center
          color={AppColors.primaryPurple}
          size={5}
          textStyles={{marginTop: width(2)}}
          font={FontFamily.appFontSemiBold}
          lineHeight={width(7)}>
          Nadia Lipshutz, 20
        </CustomText>
        <CustomText
          center
          color={AppColors.gray}
          size={4.6}
          textStyles={{marginTop: width(2)}}
          font={FontFamily.appFontMedium}
          lineHeight={width(5)}>
          FLORIDA, US
        </CustomText>

        <View
          style={{
            borderRadius: width(5),
            flexDirection: 'row',
            alignItems: 'center',
            padding: width(2),
            width: width(95),
            alignSelf: 'center',
            marginVertical: width(6),
            backgroundColor: AppColors.primary,
          }}>
          <CircularPercentageWithIcon
            percentage={70}
            color={AppColors.purple}
            Icon={undefined}
          />
          <CustomText
            color={AppColors.white}
            textStyles={{width: width(40), marginLeft: width(3)}}>
            Complete your profile to stand out
          </CustomText>
          <Button
            onPress={() => navigation.navigate(ScreenNames.EDIT_PROFILE)}
            containerStyle={{width: width(30)}}
            textStyle={{fontSize: width(3)}}>
            Edit Profile
          </Button>
        </View>
        <TouchableOpacity
          onPress={() => navigation.navigate(ScreenNames.EDIT_PROFILE)}
          style={{
            backgroundColor: AppColors.white,
            flexDirection: 'row',
            height: width(20),
            paddingRight: width(5),
            alignItems: 'center',
            justifyContent: 'space-between',
            borderRadius: width(5),
          }}>
          <View
            style={{
              flexDirection: 'row',
              padding: width(5),
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Account />
            <CustomText
              color={AppColors.black}
              font={FontFamily.appFontRegular}
              size={4.6}
              textStyles={[
                CommonStyles.marginLeft_5,
                CommonStyles.marginTop_1,
              ]}>
              My Account
            </CustomText>
          </View>
          <RightArrowSvg
            height={width(5)}
            color={AppColors.gray}
            width={width(5)}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate(ScreenNames.CHOOSE_LANGUAGE)}
          style={{
            marginVertical: width(5),
            backgroundColor: AppColors.white,
            flexDirection: 'row',
            height: width(20),
            paddingRight: width(5),
            alignItems: 'center',
            justifyContent: 'space-between',
            borderRadius: width(5),
          }}>
          <View
            style={{
              flexDirection: 'row',
              padding: width(5),
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Language />
            <CustomText
              color={AppColors.black}
              font={FontFamily.appFontRegular}
              size={4.6}
              textStyles={[
                CommonStyles.marginLeft_5,
                CommonStyles.marginTop_1,
              ]}>
              Language
            </CustomText>
          </View>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <CustomText
              color={AppColors.black}
              font={FontFamily.appFontRegular}
              size={4}
              textStyles={[
                CommonStyles.marginLeft_5,
                CommonStyles.marginTop_1,
                CommonStyles.marginRight_1,
              ]}>
              English
            </CustomText>
            <RightArrowSvg
              height={width(5)}
              color={AppColors.gray}
              width={width(5)}
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate(ScreenNames.SETTINGS)}
          style={{
            backgroundColor: AppColors.white,
            flexDirection: 'row',
            height: width(20),
            paddingRight: width(5),
            alignItems: 'center',

            justifyContent: 'space-between',
            borderRadius: width(5),
          }}>
          <View
            style={{
              flexDirection: 'row',
              padding: width(5),
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Setting />
            <CustomText
              color={AppColors.black}
              font={FontFamily.appFontRegular}
              size={4.6}
              textStyles={[
                CommonStyles.marginLeft_5,
                CommonStyles.marginTop_1,
              ]}>
              Settings
            </CustomText>
          </View>

          <RightArrowSvg
            height={width(5)}
            color={AppColors.gray}
            width={width(5)}
          />
        </TouchableOpacity>
      </View>
    </ScreenWrapper>
  );
};

export default Profile;
