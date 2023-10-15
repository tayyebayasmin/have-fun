import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React, {useState, useRef} from 'react';
import {Image, FlatList, View, TouchableOpacity} from 'react-native';
import {ScreenWrapper} from 'react-native-screen-wrapper';
import {CustomText, Header} from '~components';
import {ScreenNames} from '~routes';
import {CommonStyles, height, width} from '~utils';
import AppColors from '~utils/AppColors';
import {chat} from '~utils/dummy';
import {FontFamily} from '~utils/Fontfamily';
import styles from './styles';

const Chat = ({navigation, route}: NativeStackScreenProps<any>) => {
  return (
    <ScreenWrapper
      statusBarColor={AppColors.primaryPurple}
      barStyle="light-content">
      <View style={styles.container}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginTop: width(3),
            marginLeft: width(2),
          }}>
          <Header
            containerStyle={{
              backgroundColor: AppColors.white10,
              borderColor: AppColors.white,
              borderWidth: width(0.1),
            }}
            color={AppColors.white}
            onPress={() => {
              navigation.goBack();
            }}
          />
          <CustomText
            size={5}
            center
            textStyles={{
              width: width(60),
              alignItems: 'center',
              justifyContent: 'center',
            }}
            color={AppColors.white}
            font={FontFamily.appFontSemiBold}>
            Messages
          </CustomText>
        </View>
        <CustomText
          size={5}
          textStyles={[CommonStyles.marginTop_2, CommonStyles.paddingLeft_2]}
          color={AppColors.white}
          lineHeight={height(5)}
          font={FontFamily.appFontSemiBold}>
          Recent Matches
        </CustomText>
        <View style={{height: width(34), paddingLeft: width(2)}}>
          <FlatList
            data={[1, 2, 3, 4, 5, 6]}
            horizontal
            renderItem={({item, index}) => {
              return (
                <View
                  style={{
                    height: width(32),
                    width: width(30),
                    marginRight: width(5),
                    borderRadius: width(7),
                    backgroundColor: AppColors.gray,
                  }}>
                  {/* <Image source={}/> */}
                </View>
              );
            }}
          />
        </View>
        <View
          style={{
            backgroundColor: AppColors.white,
            width: width(100),
            paddingVertical: width(4),
            borderRadius: width(8),
          }}>
          <FlatList
            data={chat}
            renderItem={({item, index}) => {
              return (
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate(ScreenNames.CHATING, {
                      index: index,
                    })
                  }
                  style={{flexDirection: 'row', alignItems: 'center'}}>
                  <View
                    style={{
                      height: width(15),
                      width: width(15),
                      marginRight: width(5),
                      borderRadius: width(100),
                      marginLeft: width(5),
                      marginVertical: width(3),
                      backgroundColor: AppColors.gray,
                    }}>
                    {/* <Image source={}/> */}
                  </View>
                  <View>
                    <CustomText font={FontFamily.appFontSemiBold}>
                      {item?.name}
                    </CustomText>
                    <View
                      style={{
                        flexDirection: 'row',
                        width: width(70),
                        justifyContent: 'space-between',
                      }}>
                      <CustomText>{item?.chat}</CustomText>
                      <CustomText right>{item?.time}</CustomText>
                    </View>
                  </View>
                </TouchableOpacity>
              );
            }}
          />
        </View>
      </View>
    </ScreenWrapper>
  );
};

export default Chat;
