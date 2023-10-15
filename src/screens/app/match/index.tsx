import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React, {useState, useRef} from 'react';
import {Image, ImageBackground, View} from 'react-native';
import {ScreenWrapper} from 'react-native-screen-wrapper';
import {Icons} from '~assets/images';
import {Chat, Swip} from '~assets/SVG';
import {Button, CustomText, Header} from '~components';
import {ScreenNames} from '~routes';
import {height, width} from '~utils';
import AppColors from '~utils/AppColors';
import {FontFamily} from '~utils/Fontfamily';
import {CircularPercentageWithIcon} from './percentage';
import styles from './styles';
const Match = ({navigation}: NativeStackScreenProps<any>) => {
  return (
    <ScreenWrapper statusBarColor={'white'} barStyle="dark-content" translucent>
      <View style={styles.container}>
        <Header
          onPress={() => {
            navigation.goBack();
          }}
        />
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            alignSelf: 'center',
          }}>
          <CustomText
            size={6}
            lineHeight={height(5)}
            color={AppColors.primaryPurple}
            font={FontFamily.appFontSemiBold}
            center>
            You and{' '}
          </CustomText>
          <CustomText
            size={6}
            lineHeight={height(5)}
            color={AppColors.primary}
            font={FontFamily.appFontSemiBold}
            center>
            Alfredo{' '}
          </CustomText>
          <CustomText
            size={6}
            lineHeight={height(5)}
            color={AppColors.primaryPurple}
            font={FontFamily.appFontSemiBold}
            center>
            liked each
          </CustomText>
        </View>
        <CustomText
          size={6}
          lineHeight={height(5)}
          color={AppColors.primaryPurple}
          font={FontFamily.appFontSemiBold}
          center>
          others!
        </CustomText>
        <View
          style={{
            flexDirection: 'row',
            alignSelf: 'center',
            marginTop: width(20),
          }}>
          <ImageBackground
            source={Icons.stranger}
            resizeMode="contain"
            style={{width: width(40), height: width(45)}}></ImageBackground>
          <View
            style={{
              position: 'absolute',
              left: '35%',
              zIndex: 1,
              backgroundColor: AppColors.primaryPurple,
              borderRadius: width(100),
              padding: width(2),
              width: width(18),
              alignSelf: 'center',
              alignItems: 'center',
              justifyContent: 'center',
              height: width(18),
            }}>
            <CircularPercentageWithIcon
              percentage={80}
              Icon={undefined}
              color={AppColors.primary}
            />
          </View>
          <ImageBackground
            source={Icons.you}
            resizeMode="contain"
            style={{width: width(40), height: width(45)}}></ImageBackground>
        </View>
        <Button IconChat={Chat} containerStyle={{marginTop: width(35)}}>
          Send a message
        </Button>
        <Button
          IconChat={Swip}
          onPress={() => navigation.navigate(ScreenNames.BOTTOM_TAB)}
          textStyle={{color: AppColors.primary}}
          containerStyle={{backgroundColor: 'white', marginTop: width(5)}}>
          Keep Swiping
        </Button>
      </View>
    </ScreenWrapper>
  );
};

export default Match;
