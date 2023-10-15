import React, {useRef, useState} from 'react';
import {
  View,
  FlatList,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {CustomText} from '~components/texts';
import {CommonStyles, height, width} from '~utils';
import AppColors from '~utils/AppColors';
import {dummyAsstype, dummyboybodytype} from '~utils/dummy';
import {FontFamily} from '~utils/Fontfamily';
import Carousel from 'react-native-snap-carousel';
import styles from './styles';
import {Icons} from '~assets/images';
import HorizontalPicker from '@vseslav/react-native-horizontal-picker';
import {Button} from '~components';
import {ScreenWrapper} from 'react-native-screen-wrapper';
import {ScreenNames} from '~routes';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
const BodyTypeManScreen = ({navigation}: NativeStackScreenProps<any>) => {
  const [ass, setass] = useState('');
  const carouselRef = useRef(null);
  const [prefer, setPrefer] = useState(true);
  const Items = Array.from(Array(60).keys());
  const renderItem = ({item, index}: {item: any; index: any}) => {
    return (
      <View
        style={{
          width: width(32),
          backgroundColor: item?.color,
          borderRadius: width(5),
          paddingVertical: width(2),
          alignItems: 'center',
          justifyContent: 'center',
          paddingHorizontal: width(2),
          marginTop: width(3),
        }}>
        <Image source={item?.image} resizeMode="contain" />
        <CustomText size={3} center font={FontFamily.appFontSemiBold}>
          {item?.name}
        </CustomText>
      </View>
    );
  };
  const _renderItem = (item: any, index: any) => (
    <View style={{width: 80, height: height(5)}}>
      <CustomText
        size={5.5}
        font={FontFamily.appFontSemiBold}
        lineHeight={width(9)}
        color={AppColors.primaryPurple}>
        {item} cm
      </CustomText>
    </View>
  );
  return (
    <ScreenWrapper
      statusBarColor={'white'}
      barStyle="dark-content"
      translucent
      scrollType="scroll">
      <ScrollView style={styles.container}>
        <CustomText
          center
          size={4}
          lineHeight={width(4.5)}
          font={FontFamily.appFontSemiBold}
          color={AppColors.primaryPurple}
          textStyles={[CommonStyles.marginTop_5, CommonStyles.marginLeft_3]}>
          Which body type do you have?
        </CustomText>
        <View style={{height: height(33)}}>
          <Carousel
            ref={carouselRef}
            layout={'default'}
            data={dummyboybodytype}
            renderItem={renderItem}
            sliderWidth={width(100)}
            itemWidth={width(35)}
            firstItem={1}
          />
        </View>
        <CustomText
          center
          size={4}
          lineHeight={width(4.5)}
          font={FontFamily.appFontSemiBold}
          color={AppColors.primaryPurple}
          textStyles={[CommonStyles.marginTop_2, CommonStyles.marginLeft_3]}>
          What is your masculinity size?🍆
        </CustomText>
        <Image
          source={Icons.height}
          resizeMode="contain"
          style={CommonStyles.marginTop_2}
        />
        <View style={{height: height(5)}}>
          <HorizontalPicker
            data={Items}
            onChange={pos => console.log(pos)}
            defaultIndex={12}
            contentContainerStyle={{height: height(5)}}
            renderItem={_renderItem}
            itemWidth={width(30)}
          />
        </View>
        <CustomText
          center
          size={4}
          lineHeight={width(4.5)}
          font={FontFamily.appFontSemiBold}
          color={AppColors.primaryPurple}
          textStyles={[CommonStyles.marginTop_2, CommonStyles.marginLeft_3]}>
          Which ass type do have?
        </CustomText>
        <View style={{height: height(35)}}>
          <FlatList
            data={dummyAsstype}
            horizontal
            renderItem={({item, index}: {item: any; index: any}) => {
              return (
                <TouchableOpacity
                  onPress={() => setass(item?.name)}
                  style={{
                    marginTop: width(2),
                    height: height(19),
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginHorizontal: width(3),
                    backgroundColor: prefer ? item?.color : AppColors.grey15,
                    width: width(25),
                    padding: width(1),
                    borderRadius: width(2),
                  }}>
                  {ass == item?.name && (
                    <Image
                      source={Icons.Icon}
                      style={{
                        zIndex: 1,
                        top: width(2),
                        left: width(2),
                        position: 'absolute',
                      }}
                    />
                  )}
                  <Image source={item?.image} />
                </TouchableOpacity>
              );
            }}
          />
          <Button
            containerStyle={{marginTop: width(2)}}
            onPress={() => navigation.navigate(ScreenNames.EDIT_PROFILE)}>
            Save
          </Button>
        </View>
      </ScrollView>
    </ScreenWrapper>
  );
};
export default BodyTypeManScreen;
