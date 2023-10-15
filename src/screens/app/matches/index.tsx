import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React, {useState, useRef} from 'react';
import {FlatList, Image, TouchableOpacity, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {ScreenWrapper} from 'react-native-screen-wrapper';
import {Icons} from '~assets/images';
import {Chat, Filter, HeartIcon, Home5, Home6, Swip} from '~assets/SVG';
import {Button, CustomText, Header} from '~components';
import FilterModal from '~components/filter-modal';
import FilterModal2 from '~components/filter-modal2';
import {ScreenNames} from '~routes';
import {height, width} from '~utils';
import AppColors from '~utils/AppColors';
import {matches} from '~utils/dummy';
import {FontFamily} from '~utils/Fontfamily';
import styles from './styles';
const Matches = ({navigation}: NativeStackScreenProps<any>) => {
  const [showFilterModal, setShowFilterModal] = useState(false);
  const [showFilter2Modal, setShowFilter2Modal] = useState(false);
  const toggleFilter2Modal = () => setShowFilter2Modal(!showFilter2Modal);

  const toggleFilterModal = () => setShowFilterModal(!showFilterModal);
  return (
    <ScreenWrapper statusBarColor={'white'} barStyle="dark-content">
      <View style={styles.container}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <Header
            onPress={() => {
              navigation.goBack();
            }}
          />
          <CustomText
            size={5.5}
            color={AppColors.primaryPurple}
            lineHeight={height(6)}
            font={FontFamily.appFontSemiBold}>
            Matches
          </CustomText>
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
        <View style={{width: width(17)}}>
          <TouchableOpacity
            onPress={() => navigation.navigate(ScreenNames.MATCH)}
            style={{
              backgroundColor: AppColors.white,
              padding: width(5),
              width: width(17),
              height: width(17),
              borderColor: AppColors.primary,
              borderWidth: width(0.3),
              alignItems: 'center',

              justifyContent: 'center',
              borderRadius: width(25),
            }}>
            <View
              style={{
                backgroundColor: AppColors.primaryLight,
                padding: width(5),
                width: width(15),
                height: width(15),
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: width(25),
              }}>
              <Home6 />
            </View>
          </TouchableOpacity>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <CustomText color={AppColors.primaryPurple}>Likes </CustomText>
            <CustomText color={AppColors.primary}>25 </CustomText>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginTop: width(2),
          }}>
          <CustomText
            size={4.5}
            color={AppColors.primaryPurple}
            font={FontFamily.appFontSemiBold}
            lineHeight={height(5)}>
            Your Matches
          </CustomText>
          <CustomText
            size={4.5}
            font={FontFamily.appFontSemiBold}
            color={AppColors.primary}
            lineHeight={height(5)}>
            {' '}
            47{' '}
          </CustomText>
        </View>
        <FlatList
          data={matches}
          showsVerticalScrollIndicator={false}
          //@ts-ignore
          numColumns={'2'}
          renderItem={({item, index}) => {
            console.log(item);
            return (
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate(ScreenNames.MATCH_PROFILE_DETAIL, {
                    item: item,
                  })
                }>
                <LinearGradient
                  colors={['#4B164C', '#C4C4C4', '#4B164C']}
                  style={{
                    width: width(42),
                    height: width(55),
                    marginLeft: width(2),
                    marginBottom: width(2),
                    borderRadius: width(6),
                  }}>
                  <LinearGradient
                    locations={[0, 0.97, 1.9]}
                    style={{
                      borderColor: AppColors.primary,
                      borderWidth: width(1),
                      alignSelf: 'center',
                      borderRadius: width(6),
                      width: width(42),
                      height: width(55),
                    }}
                    colors={['#4B164C', '#C4C4C4', '#4B164C']}>
                    <View
                      style={{
                        width: width(30),
                        alignSelf: 'center',
                        marginTop: width(3),
                        backgroundColor: AppColors.primary,
                        borderBottomLeftRadius: width(7),
                        borderBottomRightRadius: width(7),
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}>
                      <CustomText color={AppColors.white}>
                        {item?.percentage}% Match
                      </CustomText>
                    </View>
                    <View
                      style={{
                        borderColor: AppColors.white,
                        borderWidth: width(0.1),
                        width: width(30),
                        marginBottom: width(2),
                        alignItems: 'center',
                        justifyContent: 'center',
                        alignSelf: 'center',
                        marginTop: width(20),
                        borderRadius: width(8),
                        backgroundColor: AppColors.white10,
                        padding: width(2),
                      }}>
                      <CustomText color={AppColors.white}>
                        {item?.distance}km away
                      </CustomText>
                    </View>
                    <CustomText
                      center
                      size={4.5}
                      color={AppColors.white}
                      font={FontFamily.appFontSemiBold}
                      lineHeight={width(6)}>
                      {item?.name}
                    </CustomText>
                    <CustomText
                      center
                      size={3.5}
                      color={AppColors.white}
                      font={FontFamily.appFontRegular}
                      lineHeight={width(8)}>
                      {item?.address}
                    </CustomText>
                  </LinearGradient>
                </LinearGradient>
              </TouchableOpacity>
            );
          }}
        />
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

export default Matches;
