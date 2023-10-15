import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React, {useState, useRef} from 'react';
import {Image, ScrollView, View, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {ScreenWrapper} from 'react-native-screen-wrapper';
import {Icons} from '~assets/images';
import {Calender, Home1, Home2, Home6, Share} from '~assets/SVG';
import {Button, CustomText, Header} from '~components';
import {CommonStyles, height, width} from '~utils';
import AppColors from '~utils/AppColors';
import {FontFamily} from '~utils/Fontfamily';
import {CircularPercentageWithIcon} from './percentage';
import styles from './styles';
const MatchProfileDetail = ({
  navigation,
  route,
}: NativeStackScreenProps<any>) => {
  //@ts-ignore
  const {item} = route?.params;
  console.log(item);
  return (
    <ScreenWrapper
      scrollType="scroll"
      statusBarColor={'white'}
      barStyle="light-content"
      translucent>
      <LinearGradient
        locations={[0, 0.2, 0.9]}
        style={{
          alignSelf: 'center',
          width: width(100),
          height: height(100),
        }}
        colors={['#C4C4C4', '#C4C4C4', '#4B164C']}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginTop: width(10),
            marginLeft: width(5),
            justifyContent: 'space-between',
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
          <View
            style={{
              backgroundColor: AppColors.white30,
              width: width(20),
              padding: width(3),
              marginRight: width(5),
              flexDirection: 'row',
              justifyContent: 'center',
              borderRadius: width(5),
            }}>
            <Share />
            <CustomText
              color={AppColors.white}
              size={4}
              textStyles={CommonStyles.marginLeft_1}
              font={FontFamily.appFontSemiBold}>
              {item?.distance}km
            </CustomText>
          </View>
        </View>
        <ScrollView showsVerticalScrollIndicator={false}>
          <CustomText
            center
            size={7}
            textStyles={{marginTop: width(50)}}
            color={AppColors.white}
            font={FontFamily.appFontSemiBold}
            lineHeight={width(8)}>
            {item?.name}
          </CustomText>
          <CustomText
            center
            size={5.5}
            color={AppColors.white}
            font={FontFamily.appFontRegular}
            lineHeight={width(8)}>
            {item?.address}
          </CustomText>
          <View
            style={{
              borderColor: AppColors.primary,
              borderWidth: width(0.5),
              marginTop: width(3),
              alignSelf: 'center',
              backgroundColor: AppColors.primaryPurple,
              width: width(40),
              borderRadius: width(8),
              padding: width(1),
              justifyContent: 'space-between',
              alignItems: 'center',
              flexDirection: 'row',
            }}>
            <CircularPercentageWithIcon
              percentage={item?.percentage}
              Icon={undefined}
              color={undefined}
            />
            <CustomText
              center
              size={5.2}
              color={AppColors.white}
              textStyles={CommonStyles.marginRight_4}
              font={FontFamily.appFontRegular}
              lineHeight={width(8)}>
              Match
            </CustomText>
          </View>
          <View
            style={{
              width: width(100),
              marginTop: width(5),
              borderTopLeftRadius: width(8),
              borderTopRightRadius: width(8),
              backgroundColor: AppColors.white,
            }}>
            <View
              style={{
                paddingTop: width(5),
              }}>
              <CustomText
                size={4}
                color={AppColors.gray}
                textStyles={{marginLeft: width(5), marginTop: width(5)}}>
                About
              </CustomText>
              <CustomText
                size={4}
                textStyles={{marginLeft: width(5), marginTop: width(2)}}>
                {item?.about}
              </CustomText>
              <CustomText
                size={4}
                color={AppColors.gray}
                textStyles={{marginLeft: width(5), marginTop: width(5)}}>
                Interest
              </CustomText>
              <View
                style={{
                  flexDirection: 'row',
                  flexWrap: 'wrap',
                  marginVertical: width(7),
                }}>
                {item?.interest.map((item: any, index: any) => {
                  return (
                    <View
                      style={{
                        marginTop: width(2),
                        marginLeft: width(2),
                        borderColor: AppColors.grey,
                        paddingVertical: width(2),
                        width: width(25),
                        height: height(5),
                        alignItems: 'center',
                        borderRadius: width(5),
                        borderWidth: width(0.3),
                      }}>
                      <CustomText>{item}</CustomText>
                    </View>
                  );
                })}
              </View>
              <View
                style={{
                  width: width(100),
                  height: height(20),
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  flexDirection: 'row',
                  paddingHorizontal: width(25),
                  backgroundColor: '#ffe6e6',
                }}>
                <View style={{alignItems: 'center'}}>
                  <View
                    style={{
                      backgroundColor: AppColors.primary,
                      width: width(13),
                      alignItems: 'center',
                      height: width(13),
                      justifyContent: 'center',
                      borderRadius: width(100),
                    }}>
                    <Image source={Icons.gender} />
                  </View>
                  <CustomText
                    textStyles={CommonStyles.marginTop_1}
                    color={AppColors.grey}
                    font={FontFamily.appFontMedium}>
                    Gender
                  </CustomText>
                  <CustomText
                    color={AppColors.primaryPurple}
                    font={FontFamily.appFontMedium}>
                    {item?.gender}
                  </CustomText>
                </View>
                <View style={{alignItems: 'center'}}>
                  <View
                    style={{
                      backgroundColor: AppColors.primary,
                      width: width(13),
                      alignItems: 'center',
                      height: width(13),
                      justifyContent: 'center',
                      borderRadius: width(100),
                    }}>
                    <Image source={Icons.calender} />
                  </View>
                  <CustomText
                    textStyles={CommonStyles.marginTop_1}
                    color={AppColors.grey}
                    font={FontFamily.appFontMedium}>
                    Age
                  </CustomText>
                  <CustomText
                    color={AppColors.primaryPurple}
                    font={FontFamily.appFontMedium}>
                    {item?.age} years old
                  </CustomText>
                </View>
              </View>
              <CustomText
                size={5}
                lineHeight={height(5)}
                textStyles={CommonStyles.marginLeft_2}
                font={FontFamily.appFontSemiBold}>
                {item?.nickname}'s Info
              </CustomText>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginHorizontal: width(5),
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}>
                  <Image source={Icons.height1} />
                  <CustomText
                    size={4}
                    color={AppColors.black}
                    textStyles={CommonStyles.marginLeft_2}
                    font={FontFamily.appFontLight}>
                    Height
                  </CustomText>
                </View>
                <CustomText
                  size={4}
                  color={AppColors.black}
                  textStyles={CommonStyles.marginLeft_2}
                  font={FontFamily.appFontSemiBold}>
                  {item?.height} cm
                </CustomText>
              </View>
              <View
                style={{
                  width: width(90),
                  marginVertical: width(2),
                  alignSelf: 'center',
                  borderBottomWidth: width(0.6),
                  borderColor: AppColors.grey15,
                }}
              />
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginHorizontal: width(5),
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}>
                  <Image source={Icons.language} />
                  <CustomText
                    size={4}
                    color={AppColors.black}
                    textStyles={CommonStyles.marginLeft_2}
                    font={FontFamily.appFontLight}>
                    Speak
                  </CustomText>
                </View>
                <CustomText
                  size={4}
                  color={AppColors.black}
                  textStyles={CommonStyles.marginLeft_2}
                  font={FontFamily.appFontSemiBold}>
                  {item?.Speak.join(', ')}
                </CustomText>
              </View>
              <View
                style={{
                  width: width(90),
                  marginVertical: width(2),
                  alignSelf: 'center',
                  borderBottomWidth: width(0.6),
                  borderColor: AppColors.grey15,
                }}
              />
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginHorizontal: width(5),
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}>
                  <Image source={Icons.language} />
                  <CustomText
                    size={4}
                    color={AppColors.black}
                    textStyles={CommonStyles.marginLeft_2}
                    font={FontFamily.appFontLight}>
                    Country of Residence
                  </CustomText>
                </View>
                <CustomText
                  size={4}
                  color={AppColors.black}
                  textStyles={CommonStyles.marginLeft_2}
                  font={FontFamily.appFontSemiBold}>
                  {item?.residence}
                </CustomText>
              </View>
              <View
                style={{
                  width: width(90),
                  marginVertical: width(2),
                  alignSelf: 'center',
                  borderBottomWidth: width(0.6),
                  borderColor: AppColors.grey15,
                }}
              />
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginHorizontal: width(5),
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}>
                  <Image source={Icons.language} />
                  <CustomText
                    size={4}
                    color={AppColors.black}
                    textStyles={CommonStyles.marginLeft_2}
                    font={FontFamily.appFontLight}>
                    Country of Origin
                  </CustomText>
                </View>
                <CustomText
                  size={4}
                  color={AppColors.black}
                  textStyles={[CommonStyles.marginLeft_2]}
                  font={FontFamily.appFontSemiBold}>
                  {item?.origin}
                </CustomText>
              </View>
              <View
                style={{
                  width: width(90),
                  marginVertical: width(2),
                  alignSelf: 'center',
                  borderBottomWidth: width(0.6),
                  marginBottom: width(40),
                  borderColor: AppColors.grey15,
                }}
              />
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              width: width(80),
              alignSelf: 'center',
              position: 'absolute',
              padding: width(2),
              borderRadius: width(10),
              shadowColor: AppColors.white,
              shadowOffset: {
                width: 0,
                height: 2,
              },
              shadowOpacity: 0.25,
              shadowRadius: 3.84,
              elevation: 6,
              backgroundColor: AppColors.white,
              bottom: width(5),
              marginHorizontal: width(5),
              justifyContent: 'space-between',
            }}>
            <TouchableOpacity
              style={{
                shadowColor: AppColors.white,
                shadowOffset: {
                  width: 0,
                  height: 2,
                },
                shadowOpacity: 0.25,
                shadowRadius: 3.84,
                elevation: 3,
                backgroundColor: AppColors.white,
                width: width(18),
                height: width(18),
                borderRadius: width(100),
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Home1 />
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                backgroundColor: '#4B164C',
                width: width(18),
                height: width(18),
                borderRadius: width(100),
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Home2 />
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                backgroundColor: AppColors.primary,
                width: width(18),
                height: width(18),
                borderRadius: width(100),
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Home6 />
            </TouchableOpacity>
          </View>
        </ScrollView>
      </LinearGradient>
    </ScreenWrapper>
  );
};

export default MatchProfileDetail;
