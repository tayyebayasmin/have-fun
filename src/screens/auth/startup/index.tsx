import React from 'react';
import {Image, Text, View} from 'react-native';
import {ScreenWrapper} from 'react-native-screen-wrapper';
import {Button, CustomText} from '~components';
import styles from './styles';
import AppColors from '~utils/AppColors';
import {Icons} from '~assets/images';
import {FontFamily} from '~utils/Fontfamily';
import {ScreenNames} from '~routes';
import {CommonStyles, width} from '~utils';
import {Call} from '~assets/SVG';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

const Startup = ({navigation}: NativeStackScreenProps<any>) => {
  return (
    <ScreenWrapper statusBarColor={'white'} barStyle="dark-content">
      <View style={styles.container}>
        <Image source={Icons.startup} style={styles.image} />
        <View style={styles.containerinner}>
          <CustomText
            font={FontFamily.appFontSemiBold}
            size={6}
            center
            lineHeight={width(7)}>
            Find your preferences partners
          </CustomText>
          <CustomText
            size={3.5}
            font={FontFamily.appFontRegular}
            color={AppColors.gray}
            center
            textStyles={CommonStyles.marginTop_2}>
            Join us with other millions of people and find your best matches
          </CustomText>
          <Button
            containerStyle={styles.btn}
            Icon={Call}
            onPress={() => navigation.navigate(ScreenNames.LOGIN)}>
            Login With Phone
          </Button>
          <View style={styles.row}>
            <CustomText color={AppColors.black}>
              Don't have an account?{' '}
            </CustomText>
            <CustomText
              font={FontFamily.appFontSemiBold}
              color={AppColors.primary}
              onPress={() => navigation.navigate(ScreenNames.SIGNUP)}>
              Sign Up
            </CustomText>
          </View>
        </View>
      </View>
    </ScreenWrapper>
  );
};

export default Startup;
