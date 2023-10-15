import MultiSlider from '@ptomasroos/react-native-multi-slider';
import {Close} from '~assets/SVG';
import {Button, CustomText, ModalWrapper} from '~components';
import AppColors from '~utils/AppColors';
import {FontFamily} from '~utils/Fontfamily';
import React, {useCallback, useRef, useState} from 'react';
import {
  View,
  FlatList,
  Image,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import {CommonStyles, height, width} from '~utils';
import {
  dummyAsstype,
  dummyboybodytype,
  dummybodytype,
  dummyBreasttype,
} from '~utils/dummy';
import Carousel from 'react-native-snap-carousel';
import {Icons} from '~assets/images';

interface Props {
  isVisible?: any;
  onClose: () => void;
  values?: any;
  onApply?: () => void;
  onPressBodyFilter?: () => void;
}
const FilterModal2 = ({isVisible, onClose, onApply}: Props) => {
  const [ass, setass] = useState('');
  const carouselRef = useRef(null);
  const [multiSliderValue, setMultiSliderValue] = useState([15, 20]);
  const [prefer, setPrefer] = useState(true);
  const [gender, setGender] = useState('man');
  const [breast, setBreast] = useState('');

  const multiSliderValuesChange = (values: any) => setMultiSliderValue(values);
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

  return (
    <ModalWrapper
      isVisible={isVisible}
      onClose={onClose}
      avoidKeyboard={true}
      animationIn={'zoomInUp'}
      animationOut={'zoomOutDown'}>
      <View style={styles.modalContainer} testID="modal-container">
        <View style={styles.headerView}>
          <TouchableOpacity
            onPress={onClose}
            style={{position: 'absolute', right: 0}}>
            <Close height={28} width={28} color={AppColors.primaryPurple} />
          </TouchableOpacity>
          <CustomText
            size={5.5}
            color={AppColors.primaryPurple}
            lineHeight={height(6)}
            font={FontFamily.appFontSemiBold}>
            Body Filter
          </CustomText>
        </View>
        <View
          style={{
            marginTop: width(2),
            width: width(90),
            alignSelf: 'center',
            borderBottomWidth: width(0.6),
            borderColor: AppColors.grey15,
          }}
        />
        {gender === 'man' && (
          //@ts-ignore
          <ScrollView style={styles.container}>
            <CustomText
              center
              size={4}
              lineHeight={width(4.5)}
              font={FontFamily.appFontSemiBold}
              color={AppColors.primaryPurple}
              textStyles={[
                CommonStyles.marginTop_2,
                CommonStyles.marginLeft_3,
              ]}>
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
              textStyles={[
                CommonStyles.marginTop_2,
                CommonStyles.marginLeft_3,
              ]}>
              What is an ideal size for his masculinity?🍆
            </CustomText>
            <View style={{alignSelf: 'center'}}>
              <MultiSlider
                enabledOne
                enabledTwo
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
              textStyles={[
                CommonStyles.marginTop_2,
                CommonStyles.marginLeft_3,
              ]}>
              Which ass type do prefer for men?
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
                        backgroundColor: prefer
                          ? item?.color
                          : AppColors.grey15,
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
                marginBottom: width(5),
              }}>
              <CustomText center>No Preference</CustomText>
            </TouchableOpacity>

            <Button containerStyle={{width: width(42)}} onPress={onApply}>
              Apply
            </Button>
          </ScrollView>
        )}
        {gender === 'woman' && (
          //@ts-ignore
          <ScrollView style={styles.container}>
            <CustomText
              center
              size={4}
              lineHeight={width(4.5)}
              font={FontFamily.appFontSemiBold}
              color={AppColors.primaryPurple}
              textStyles={[
                CommonStyles.marginTop_2,
                CommonStyles.marginLeft_3,
              ]}>
              Which body type do you prefer?
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
              textStyles={[
                CommonStyles.marginTop_2,
                CommonStyles.marginLeft_3,
              ]}>
              Which ass type do you prefer?
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
              textStyles={[
                CommonStyles.marginTop_2,
                CommonStyles.marginLeft_3,
              ]}>
              Which breast type do you like?
            </CustomText>
            <View
              style={{
                height: height(23),
                alignItems: 'center',
                marginHorizontal: width(3),
                justifyContent: 'center',
                marginBottom: width(5),
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
            </View>
            <Button containerStyle={{width: width(42)}} onPress={onApply}>
              Apply
            </Button>
          </ScrollView>
        )}
      </View>
    </ModalWrapper>
  );
};
export default FilterModal2;

const styles = StyleSheet.create({
  modalContainer: {
    backgroundColor: 'white',
    width: width(100),
    borderRadius: 20,
    height: height(80),
    alignSelf: 'center',
    alignItems: 'center',
    paddingBottom: height(3),
  },
  headerView: {
    width: width(100),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingRight: width(1),
  },
  inputStyle: {
    width: width(35),
    height: height(6),
    borderBottomWidth: width(0.4),
    color: AppColors.black,
  },
  accuteBedView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: height(2),
    paddingVertical: height(1),
    justifyContent: 'space-between',
  },
  interFacilityView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: width(5),
    alignItems: 'center',
  },
  selectedTab: {
    backgroundColor: AppColors.black,
    paddingVertical: height(1),
    marginRight: width(2),
    borderRadius: width(5),
    paddingHorizontal: width(4),
  },
  notSelectedTab: {
    borderColor: AppColors.black,
    paddingVertical: height(1),
    marginRight: width(2),
    borderRadius: width(5),
    paddingHorizontal: width(4),
    borderWidth: width(0.3),
  },
  markerStyle: {
    borderColor: AppColors.black,
    height: height(2.3),
    width: width(4.3),
    borderWidth: width(0.4),
    marginHorizontal: width(2),
  },
  trackStyle: {
    backgroundColor: AppColors.black30,
  },
  selectedStyle: {
    backgroundColor: AppColors.black,
  },
  checkBoxStyle: {
    marginTop: -2,
    height: height(3),
    width: height(3),
    marginRight: width(1),
  },
});
