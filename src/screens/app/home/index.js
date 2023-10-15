import React, {useState, useRef} from 'react';
import {Image, TouchableOpacity, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {ScreenWrapper} from 'react-native-screen-wrapper';
import {Icons} from '~assets/images';
import {
  Filter,
  HeartIcon,
  Home1,
  Home2,
  Home4,
  Home5,
  Home6,
} from '~assets/SVG';
import {Button, CustomText, Header} from '~components';
import {ScreenNames} from '~routes';
import {width} from '~utils';
import AppColors from '~utils/AppColors';
import {HomeData} from '~utils/dummy';
import {FontFamily} from '~utils/Fontfamily';
import Carousel from 'react-native-snap-carousel';
import {CircularPercentageWithIcon} from '../match/percentage';
import styles from './styles';
import FilterModal from '~components/filter-modal';
import FilterModal2 from '~components/filter-modal2';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

const Home = ({navigation}) => {
  const [value, setValue] = useState(0);
  const carousalRef = useRef();
  const [showFilterModal, setShowFilterModal] = useState(false);
  const [showFilter2Modal, setShowFilter2Modal] = useState(false);
  const toggleFilter2Modal = () => setShowFilter2Modal(!showFilter2Modal);

  const toggleFilterModal = () => setShowFilterModal(!showFilterModal);
  console.log(HomeData[0].distance);
  return (
    <ScreenWrapper statusBarColor={'white'} barStyle="dark-content">
      <View style={styles.container}>
        <Image
          source={Icons.profile}
          style={{
            width: width(15),
            height: width(15),
            borderRadius: width(100),
          }}
        />
        <View
          style={{
            alignSelf: 'flex-end',
            flexDirection: 'row',
          }}>
          <TouchableOpacity
            style={{
              borderColor: AppColors.gray,
              borderWidth: width(0.2),
              width: width(10),
              height: width(10),
              justifyContent: 'center',
              borderRadius: width(100),
              alignItems: 'center',
              marginRight: width(2),
            }}
            onPress={() => navigation.navigate(ScreenNames.MATCH)}>
            <HeartIcon />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setShowFilterModal(true)}
            style={{
              borderColor: AppColors.gray,
              borderWidth: width(0.2),
              width: width(10),
              height: width(10),
              justifyContent: 'center',
              borderRadius: width(100),
              alignItems: 'center',
            }}>
            <Filter />
          </TouchableOpacity>
        </View>
        <View style={styles.back}>
          <View style={styles.front}>
            <Carousel
              ref={carousalRef}
              data={HomeData}
              layout={'tinder'}
              layoutCardOffset={`18`}
              onSnapToItem={index => setValue(index)}
              renderItem={({item, index}) => {
                return (
                  <LinearGradient
                    locations={[0, 0.97, 1.9]}
                    style={{
                      width: width(82),
                      alignSelf: 'center',
                      marginTop: width(3),
                      borderRadius: width(8),
                      height: width(90),
                    }}
                    colors={
                      index === value
                        ? ['#4B164C', '#C4C4C4', '#4B164C']
                        : ['white', 'white', 'white']
                    }>
                    <View
                      style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        marginHorizontal: width(5),
                        alignItems: 'center',
                        marginTop: width(5),
                      }}>
                      <View
                        style={{
                          borderColor: AppColors.white,
                          borderWidth: width(0.1),
                          width: width(30),
                          alignItems: 'center',
                          justifyContent: 'center',
                          borderRadius: width(8),
                          backgroundColor: AppColors.white10,
                          padding: width(2),
                        }}>
                        <CustomText color={AppColors.white}>
                          {HomeData[0].distance} away
                        </CustomText>
                      </View>
                      {index === value && (
                        <CircularPercentageWithIcon
                          percentage={HomeData[0].percentage}
                          color={AppColors.white}
                        />
                      )}
                    </View>
                    <View
                      style={{
                        position: 'absolute',
                        alignSelf: 'center',
                        bottom: width(5),
                      }}>
                      <View
                        style={{
                          flexDirection: 'row',
                          width: width(15),
                          justifyContent: 'space-between',
                          alignSelf: 'center',
                          marginBottom: width(5),
                        }}>
                        <Home5 />
                        <Home4 />
                      </View>
                      <CustomText
                        center
                        size={5.2}
                        color={AppColors.white}
                        font={FontFamily.appFontSemiBold}
                        lineHeight={width(6)}>
                        {HomeData[0].name}
                      </CustomText>
                      <CustomText
                        center
                        size={4}
                        color={AppColors.white}
                        font={FontFamily.appFontRegular}
                        lineHeight={width(8)}>
                        {HomeData[0].address}
                      </CustomText>
                    </View>
                  </LinearGradient>
                );
              }}
              sliderWidth={width(90)}
              itemWidth={width(90)}
            />

            <View
              style={{
                flexDirection: 'row',
                width: width(80),
                position: 'absolute',
                bottom: width(5),
                marginHorizontal: width(5),
                justifyContent: 'space-between',
              }}>
              <TouchableOpacity
                onPress={() => {
                  carousalRef.current.snapToNext();
                }}
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
                onPress={() => {
                  carousalRef.current.snapToNext();
                }}
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
                onPress={() => {
                  carousalRef.current.snapToNext();
                }}
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
          </View>
        </View>
        <FilterModal
          isVisible={showFilterModal}
          onClose={toggleFilterModal}
          onApply={toggleFilterModal}
          onPressBodyFilter={() => {
            setShowFilterModal(false);
            setShowFilter2Modal(true);
          }}
        />
        <FilterModal2
          isVisible={showFilter2Modal}
          onClose={toggleFilter2Modal}
          onApply={toggleFilter2Modal}
          onPressBodyFilter={toggleFilter2Modal}
        />
      </View>
    </ScreenWrapper>
  );
};

export default Home;
