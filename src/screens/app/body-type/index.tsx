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
import {dummyAsstype, dummybodytype, dummyBreasttype} from '~utils/dummy';
import {FontFamily} from '~utils/Fontfamily';
import Carousel from 'react-native-snap-carousel';
import styles from './styles';
import {Icons} from '~assets/images';
import {Button} from '~components';
import {ScreenNames} from '~routes';
import {ScreenWrapper} from 'react-native-screen-wrapper';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

const BodyTypeWoman = ({navigation}: NativeStackScreenProps<any>) => {
  const [ass, setass] = useState('');
  const [breast, setBreast] = useState('');
  const carouselRef = useRef(null);
  const renderItem = ({item, index}: {item: any; index: any}) => {
    return (
      <View
        style={{
          width: width(32),
          backgroundColor: item?.color,
          borderRadius: width(5),
          paddingVertical: width(2),
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

  return (
    <ScreenWrapper
      statusBarColor={'white'}
      barStyle="dark-content"
      scrollType="scroll">
      <View style={styles.container}>
        <CustomText
          center
          size={4}
          lineHeight={width(4.5)}
          font={FontFamily.appFontSemiBold}
          color={AppColors.primaryPurple}
          textStyles={[CommonStyles.marginTop_2, CommonStyles.marginLeft_3]}>
          Which body type do you have?
        </CustomText>
        <View style={{height: height(33)}}>
          <Carousel
            ref={carouselRef}
            layout={'default'}
            data={dummybodytype}
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
          Which ass type do you have?
        </CustomText>
        <View style={{height: height(20)}}>
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
                    backgroundColor: item?.color,
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
        </View>
        <CustomText
          center
          size={4}
          lineHeight={width(4.5)}
          font={FontFamily.appFontSemiBold}
          color={AppColors.primaryPurple}
          textStyles={[CommonStyles.marginTop_2, CommonStyles.marginLeft_3]}>
          Which breast type do you have?
        </CustomText>
        <View
          style={{
            height: height(33),
            alignItems: 'center',
            marginHorizontal: width(3),
            justifyContent: 'center',
            marginBottom: width(30),
          }}>
          <FlatList
            data={dummyBreasttype}
            horizontal
            renderItem={({item, index}) => {
              return (
                <TouchableOpacity
                  onPress={() => setBreast(item?.name)}
                  style={{
                    flexDirection: 'column',
                  }}>
                  <View
                    style={{
                      marginTop: width(2),
                      height: height(19),
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginRight: width(2),
                      backgroundColor: item?.color,
                      width: width(25),
                      padding: width(1),
                      borderRadius: width(2),
                    }}>
                    {breast == item?.name && (
                      <Image
                        resizeMode="contain"
                        source={Icons.Icon}
                        style={{
                          zIndex: 1,
                          top: width(2),
                          left: width(2),
                          position: 'absolute',
                        }}
                      />
                    )}
                    <Image source={item?.image} resizeMode="contain" />
                  </View>

                  <CustomText center font={FontFamily.appFontSemiBold}>
                    {item?.name}
                  </CustomText>
                </TouchableOpacity>
              );
            }}
          />
          <Button
            onPress={() => navigation.navigate(ScreenNames.EDIT_PROFILE)}
            containerStyle={{marginBottom: -25}}>
            Save
          </Button>
        </View>
      </View>
    </ScreenWrapper>
  );
};
export default BodyTypeWoman;
