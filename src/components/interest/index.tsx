import React, {useCallback, useRef, useState} from 'react';
import {
  View,
  FlatList,
  Image,
  ScrollView,
  TouchableOpacity,
  Slider,
} from 'react-native';
import {CustomText} from '~components/texts';
import {CommonStyles, height, width} from '~utils';
import AppColors from '~utils/AppColors';
import {dummyAsstype, dummyboybodytype} from '~utils/dummy';
import {FontFamily} from '~utils/Fontfamily';
import Carousel from 'react-native-snap-carousel';
import styles from './styles';
import {Icons} from '~assets/images';
import MultiSlider from '@ptomasroos/react-native-multi-slider';
const Interest = ({isVisible}: {isVisible: any}) => {
  const [ass, setass] = useState('');
  const carouselRef = useRef(null);
  const [multiSliderValue, setMultiSliderValue] = useState([15, 20]);
  const [prefer, setPrefer] = useState(true);
  const multiSliderValuesChange = (values: any) => setMultiSliderValue(values);
  const renderItem = ({item, index}: {item: any; index: number}) => {
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

  if (isVisible)
    return (
      <ScrollView style={styles.container}>
        <CustomText
          center
          size={4}
          lineHeight={width(4.5)}
          font={FontFamily.appFontSemiBold}
          color={AppColors.primaryPurple}
          textStyles={[CommonStyles.marginTop_2, CommonStyles.marginLeft_3]}>
          Which body type do you Prefer?
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
          What is an ideal size for his masculinity?🍆
        </CustomText>
        <View style={{alignSelf: 'center'}}>
          <MultiSlider
            enabledOne
            enabledTwo
            trackStyle={{backgroundColor: AppColors.grey15, height: width(1)}}
            selectedStyle={{
              backgroundColor: AppColors.primary,
              height: width(1),
            }}
            markerStyle={{
              backgroundColor: AppColors.primary,
              width: width(5),
              height: width(5),
            }}
            values={[multiSliderValue[0], multiSliderValue[1]]}
            allowOverlap={false}
            sliderLength={width(80)}
            onValuesChange={multiSliderValuesChange}
            min={10}
            max={40}
            step={1}
            snapped
          />
          <CustomText center size={4.5} lineHeight={height(4)}>
            {multiSliderValue[0]}cm - {multiSliderValue[1]}cm
          </CustomText>
        </View>
        <CustomText
          center
          size={4}
          lineHeight={width(4.5)}
          font={FontFamily.appFontSemiBold}
          color={AppColors.primaryPurple}
          textStyles={[CommonStyles.marginTop_2, CommonStyles.marginLeft_3]}>
          Which ass type do prefer for men?
        </CustomText>
        <View style={{height: height(20)}}>
          <FlatList
            data={dummyAsstype}
            horizontal
            renderItem={({item, index}: {item: any; index: number}) => {
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
        </View>
        <TouchableOpacity
          onPress={() => setPrefer(!prefer)}
          //@ts-ignore
          style={{
            backgroundColor: prefer ? AppColors.white : AppColors.grey15,
            borderColor: width(1),
            borderWidth: width(0.1),
            width: width(30),
            padding: width(2),
            marginTop: width(2),
            borderRadius: width(5),
            alignSelf: 'center',
            marginBottom: width(15),
          }}>
          <CustomText center>No Preference</CustomText>
        </TouchableOpacity>
      </ScrollView>
    );
  else return <></>;
};
export default Interest;
