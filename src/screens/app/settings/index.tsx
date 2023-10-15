import MultiSlider from '@ptomasroos/react-native-multi-slider';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React, {useState, useRef} from 'react';
import {
  TouchableOpacity,
  Switch,
  View,
  ScrollView,
  TextInput,
} from 'react-native';
import {ScreenWrapper} from 'react-native-screen-wrapper';
import {Icons} from '~assets/images';
import {RightArrowSvg} from '~assets/SVG';
import {CustomText, Header} from '~components';
import {CommonStyles, height, width} from '~utils';
import AppColors from '~utils/AppColors';
import {languages} from '~utils/dummy';
import {FontFamily} from '~utils/Fontfamily';
import styles from './styles';
const Settings = ({navigation}: NativeStackScreenProps<any>) => {
  const [multiSliderValue, setMultiSliderValue] = useState([15]);
  const multiSliderValuesChange = (values: any) => setMultiSliderValue(values);
  const [lan, setLan] = useState(languages);
  const [selectedLanguageyState, setSelectedLanguageState] = useState(null);
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  const onPress = (value: any) => {
    setSelectedLanguageState(value?.name);
  };
  return (
    <ScreenWrapper
      statusBarColor={'white'}
      barStyle="dark-content"
      translucent
      scrollType="scroll">
      <ScrollView style={styles.container}>
        <View style={{flexDirection: 'row'}}>
          <Header
            onPress={() => {
              navigation.goBack();
            }}
          />
          <CustomText
            center
            color="#22172A"
            size={5.5}
            lineHeight={width(7)}
            textStyles={{width: width(60), marginTop: width(5)}}
            font={FontFamily.appFontSemiBold}>
            Settings
          </CustomText>
        </View>
        <CustomText
          color={AppColors.gray}
          letterSpacing={0.3}
          size={4}
          textStyles={CommonStyles.marginTop_1}>
          DISCOVERY SETTINGS
        </CustomText>
        <TouchableOpacity
          style={{
            marginVertical: width(5),
            backgroundColor: AppColors.white,
            flexDirection: 'row',
            height: width(17),
            paddingRight: width(5),
            alignItems: 'center',
            justifyContent: 'space-between',
            borderRadius: width(5),
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <CustomText
              color={AppColors.black}
              font={FontFamily.appFontRegular}
              size={4.2}
              textStyles={[
                CommonStyles.marginLeft_5,
                CommonStyles.marginTop_1,
              ]}>
              Location
            </CustomText>
          </View>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <CustomText
              color={AppColors.black}
              font={FontFamily.appFontRegular}
              size={4}
              textStyles={[
                CommonStyles.marginLeft_5,
                CommonStyles.marginTop_0_5,
                CommonStyles.marginRight_1,
              ]}>
              Hamburg, Germany
            </CustomText>
            <RightArrowSvg
              height={width(5)}
              color={AppColors.gray}
              width={width(5)}
            />
          </View>
        </TouchableOpacity>
        <View
          style={{
            backgroundColor: AppColors.white,
            padding: width(2),
            borderRadius: width(3),
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: width(5),
            }}>
            <CustomText
              size={4.5}
              color={AppColors.primaryPurple}
              lineHeight={height(4)}
              font={FontFamily.appFontSemiBold}>
              Distance Preference
            </CustomText>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <CustomText
                size={4}
                color={AppColors.primary}
                lineHeight={height(4)}
                textStyles={CommonStyles.marginRight_2}
                font={FontFamily.appFontSemiBold}>
                {multiSliderValue[0]}km
              </CustomText>
            </View>
          </View>
          <MultiSlider
            enabledOne
            trackStyle={{
              backgroundColor: AppColors.grey15,
              height: width(1),
            }}
            selectedStyle={{
              backgroundColor: AppColors.primary,
              height: width(1),
            }}
            markerStyle={{
              backgroundColor: AppColors.primary,
              width: width(5),
              height: width(5),
            }}
            values={[multiSliderValue[0]]}
            allowOverlap={false}
            sliderLength={width(87)}
            onValuesChange={multiSliderValuesChange}
            min={10}
            max={40}
            step={1}
            snapped
          />
          <View
            style={{
              width: width(90),
              borderBottomWidth: width(0.6),
              borderColor: AppColors.grey15,
            }}
          />
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: width(5),
            }}>
            <CustomText
              size={4}
              color={AppColors.gray}
              lineHeight={height(4)}
              font={FontFamily.appFontRegular}>
              Only show people in this range
            </CustomText>
            <Switch
              trackColor={{
                //@ts-ignore
                false: AppColors.grey15 == 30,
                true: AppColors.primary,
              }}
              thumbColor={isEnabled ? AppColors.white : AppColors.white}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleSwitch}
              value={isEnabled}
            />
          </View>
        </View>
        <CustomText
          color={AppColors.gray}
          letterSpacing={0.3}
          size={4}
          textStyles={CommonStyles.marginTop_3}>
          PRIVACY
        </CustomText>
        <TouchableOpacity
          style={{
            marginTop: width(2),
            backgroundColor: AppColors.white,
            flexDirection: 'row',
            height: width(17),
            paddingRight: width(5),
            alignItems: 'center',
            justifyContent: 'space-between',
            borderRadius: width(5),
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <CustomText
              color={AppColors.black}
              font={FontFamily.appFontRegular}
              size={4.2}
              textStyles={[CommonStyles.marginLeft_5]}>
              Notifications
            </CustomText>
          </View>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <RightArrowSvg
              height={width(5)}
              color={AppColors.gray}
              width={width(5)}
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            backgroundColor: AppColors.white,
            flexDirection: 'row',
            height: width(17),
            marginTop: width(2),
            paddingRight: width(5),
            marginBottom: width(2),
            alignItems: 'center',
            justifyContent: 'space-between',
            borderRadius: width(5),
          }}>
          <View>
            <CustomText
              color={AppColors.black}
              font={FontFamily.appFontRegular}
              size={4.2}
              textStyles={[
                CommonStyles.marginLeft_5,
                CommonStyles.marginTop_1,
              ]}>
              Privacy Policy
            </CustomText>
            <CustomText
              color={AppColors.gray}
              font={FontFamily.appFontRegular}
              size={3.5}
              textStyles={[
                CommonStyles.marginLeft_5,
                CommonStyles.marginTop_1,
              ]}>
              Choose what data you share with us
            </CustomText>
          </View>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <RightArrowSvg
              height={width(5)}
              color={AppColors.gray}
              width={width(5)}
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            backgroundColor: AppColors.white,
            flexDirection: 'row',
            height: width(17),
            paddingRight: width(5),
            alignItems: 'center',
            justifyContent: 'space-between',
            borderRadius: width(5),
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <CustomText
              color={AppColors.black}
              font={FontFamily.appFontRegular}
              size={4.2}
              textStyles={[
                CommonStyles.marginLeft_5,
                CommonStyles.marginTop_1,
              ]}>
              Terms and Services
            </CustomText>
          </View>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <RightArrowSvg
              height={width(5)}
              color={AppColors.gray}
              width={width(5)}
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            backgroundColor: AppColors.primary,
            flexDirection: 'row',
            height: width(17),
            marginTop: width(2),
            paddingRight: width(5),
            alignItems: 'center',
            justifyContent: 'space-between',
            borderRadius: width(5),
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <CustomText
              color={AppColors.black}
              font={FontFamily.appFontRegular}
              size={4.2}
              textStyles={[
                CommonStyles.marginLeft_5,
                CommonStyles.marginTop_1,
              ]}>
              Delete Account
            </CustomText>
          </View>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <RightArrowSvg
              height={width(5)}
              color={AppColors.gray}
              width={width(5)}
            />
          </View>
        </TouchableOpacity>
        <CustomText
          color={AppColors.primary}
          font={FontFamily.appFontSemiBold}
          size={4.7}
          center
          textStyles={[CommonStyles.marginTop_5]}>
          Log out
        </CustomText>
      </ScrollView>
    </ScreenWrapper>
  );
};

export default Settings;
