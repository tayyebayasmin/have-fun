import React, {useEffect, useRef, useState} from 'react';
import {
  Image,
  Animated,
  TouchableOpacity,
  View,
  FlatList,
  ScrollView,
} from 'react-native';
import {ScreenWrapper} from 'react-native-screen-wrapper';
import {CustomText, Header, Input} from '~components';
import {ScreenNames} from '~routes';
import HorizontalPicker from '@vseslav/react-native-horizontal-picker';
import {CommonStyles, height, width} from '~utils';
import AppColors from '~utils/AppColors';
import {FontFamily} from '~utils/Fontfamily';
import styles from './styles';
import {NextArrowSvg, Tick} from '~assets/SVG';
import Men from '~assets/SVG/men';
import Women from '~assets/SVG/women';
import {Icons} from '~assets/images';
import {DropDownButton} from '~components/button';
import DropDownModal from '~components/drop-down-modal';
import {States} from '~utils/StateList';
import DropDown from '~components/drop-down';
import BodyType from '~components/body-type';
import Interest from '~components/interest';
import BodyTypeMan from '~components/body-type-man';
import InterestInWoman from '~components/interest-in-women';
import UserDetail from '~components/user-detail';
import SelectInterest from '~components/select-interest';
import UploadPhoto from '~components/upload-photo';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

const data = [
  {
    name: 'Fair',
    color: '#E8C4A4',
  },
  {
    name: 'Medium',
    color: '#E7B280',
  },
  {
    name: 'Mid Brown',
    color: '#C3A283',
  },
];
const puzzledata = [
  {
    name: 'Gaming',
    image: '🎮',
  },
  {
    name: 'Dancing',
    image: '💃',
  },
  {
    name: 'Language',
    image: '🗣',
  },
  {
    name: 'Music',
    image: '🎵',
  },
  {
    name: ' Movie',
    image: '🎬',
  },
  {
    name: 'Photography',
    image: '📸',
  },
  {
    name: 'Arcitecture',
    image: '🏛',
  },
  {
    name: 'Fashion',
    image: '👗',
  },
  {
    name: 'Book',
    image: '📚',
  },
  {
    name: ' Writing',
    image: '✍',
  },
  {
    name: 'Nature',
    image: '🏞',
  },
  {
    name: 'Painting',
    image: '🎨',
  },
  {
    name: 'Football',
    image: '⚽',
  },
  {
    name: 'People',
    image: '😊',
  },
  {
    name: 'Animals',
    image: '🐼',
  },
  {
    name: 'Gym & Fitness',
    image: '⛹️‍♀️',
  },
];
const SIGNUP = ({navigation, route}: NativeStackScreenProps<any>) => {
  const [showLanguageModal, setShowLanguageModal] = useState(false);
  const [selectedLanguageyState, setSelectedLanguageState] = useState(null);
  const [progress, setProgress] = useState(20);
  const [languages, setLanguages] = useState([]);
  const [index, setIndex] = useState(1);
  const [gender, setGender] = useState<any>('');
  const [genderDetail, setGenderDetail] = useState(false);
  const [interestIn, setInterestIn] = useState(false);
  const [array, setArray] = useState([]);
  const [interest, setInterest] = useState<any>('');
  const [color, setColor] = useState('');
  const [showStateModal, setShowStateModal] = useState(false);
  const [selectedState, setSelectedState] = useState(null);
  const [showCountryModal, setShowCountryModal] = useState(false);
  const [modal, setshowModal] = useState('');
  const [modal4, setmodal4] = useState('');
  const [selectedCountryState, setSelectedCountryState] = useState(null);
  const progressAnim = useRef(new Animated.Value(0)).current;
  const animateProgress = () => {
    //@ts-ignore
    Animated.timing(progressAnim, {
      toValue: progress,
      duration: 1800,
    }).start();
  };
  useEffect(() => {
    animateProgress();
  }, [progress]);

  const Items = Array.from(Array(200).keys());

  const renderItem = (item: any, index: any) => (
    <View style={{width: 80, height: height(5)}}>
      <CustomText
        size={5.5}
        font={FontFamily.appFontSemiBold}
        lineHeight={width(9)}
        color={AppColors.primaryPurple}>
        {item}
      </CustomText>
    </View>
  );
  return (
    <ScreenWrapper statusBarColor={'white'} scrollType="scroll" translucent>
      <View style={styles.container}>
        <Header
          onPress={() => {
            navigation.goBack();
          }}
        />
        {index == 1 && (
          <>
            <CustomText
              size={6}
              lineHeight={width(8)}
              center
              font={FontFamily.appFontSemiBold}
              color={AppColors.primaryPurple}
              textStyles={CommonStyles.marginTop_5}>
              What’s your name?
            </CustomText>
            <Input
              placeholder="Enter Your Name"
              containerStyle={CommonStyles.marginTop_3}
            />
          </>
        )}
        {index == 2 && (
          <>
            <CustomText
              size={6}
              lineHeight={width(8)}
              center
              font={FontFamily.appFontSemiBold}
              color={AppColors.primaryPurple}
              textStyles={CommonStyles.marginTop_5}>
              When is your birthdate?
            </CustomText>
            <Input
              placeholder="Enter Your Date of Birth"
              containerStyle={CommonStyles.marginTop_3}
            />
          </>
        )}
        {index == 3 && gender === '' && interest === '' && (
          <>
            <CustomText
              size={6}
              lineHeight={width(8)}
              center
              font={FontFamily.appFontSemiBold}
              color={AppColors.primaryPurple}
              textStyles={CommonStyles.marginTop_5}>
              What is your gender?
            </CustomText>
            <View style={[CommonStyles.rowJustifySpaceBtw, styles.box]}>
              <TouchableOpacity
                style={styles.bg}
                onPress={() => setGender('man')}>
                {gender === 'man' && (
                  <Image
                    source={Icons.Icon}
                    style={[
                      styles.select,
                      {tintColor: AppColors.primaryPurple},
                    ]}
                  />
                )}
                <View style={styles.gender}>
                  <Men />
                </View>
                <CustomText
                  textStyles={CommonStyles.marginTop_1}
                  color={AppColors.primaryPurple}
                  font={FontFamily.appFontSemiBold}>
                  Man
                </CustomText>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.bg}
                onPress={() => setGender('woman')}>
                {gender == 'woman' && (
                  <Image source={Icons.Icon} style={styles.select} />
                )}
                <View style={styles.genderWomen}>
                  <Women />
                </View>
                <CustomText
                  textStyles={CommonStyles.marginTop_1}
                  color={AppColors.primary}
                  font={FontFamily.appFontSemiBold}>
                  Moman
                </CustomText>
              </TouchableOpacity>
            </View>
          </>
        )}
        {(gender === 'man' || gender === 'woman') && interest === '' && (
          <>
            <CustomText
              size={6}
              lineHeight={width(8)}
              center
              font={FontFamily.appFontSemiBold}
              color={AppColors.primaryPurple}
              textStyles={CommonStyles.marginTop_5}>
              Which gender are you interested in?
            </CustomText>
            <View style={[CommonStyles.rowJustifySpaceBtw, styles.box]}>
              <TouchableOpacity
                style={styles.bg}
                onPress={() => setInterest('man')}>
                {interest == 'man' && (
                  <Image
                    source={Icons.Icon}
                    style={[styles.select, {tintColor: AppColors.primary}]}
                  />
                )}
                <View style={styles.genderWomen}>
                  <Men />
                </View>
                <CustomText
                  textStyles={CommonStyles.marginTop_1}
                  color={AppColors.primary}
                  font={FontFamily.appFontSemiBold}>
                  Man
                </CustomText>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.bg}
                onPress={() => setInterest('woman')}>
                {interest == 'woman' && (
                  <Image source={Icons.Icon} style={styles.select} />
                )}
                <View style={styles.gender}>
                  <Women />
                </View>
                <CustomText
                  textStyles={CommonStyles.marginTop_1}
                  color={AppColors.primaryPurple}
                  font={FontFamily.appFontSemiBold}>
                  Moman
                </CustomText>
              </TouchableOpacity>
            </View>
          </>
        )}
        {(interest === 'man' || interest === 'woman') &&
          !genderDetail &&
          modal != 'bodytype' && (
            <>
              <CustomText
                size={5}
                lineHeight={width(6)}
                center
                font={FontFamily.appFontSemiBold}
                color={AppColors.primaryPurple}
                textStyles={{marginTop: -20}}>
                Select your skin color
              </CustomText>
              <View>
                <FlatList
                  horizontal
                  data={data}
                  style={{height: width(35)}}
                  renderItem={({item}) => {
                    return (
                      <TouchableOpacity
                        onPress={() => setColor(item?.name)}
                        style={[
                          styles.skinColor,
                          {backgroundColor: item?.color},
                        ]}>
                        {color == item?.name && (
                          <Image
                            source={Icons.Icon}
                            style={[
                              styles.select,
                              {tintColor: AppColors.black30},
                            ]}
                          />
                        )}
                        <CustomText
                          color={AppColors.white}
                          font={FontFamily.appFontSemiBold}
                          textStyles={CommonStyles.marginBottom_1}>
                          {item?.name}
                        </CustomText>
                      </TouchableOpacity>
                    );
                  }}
                />
              </View>
              <CustomText
                size={5}
                lineHeight={width(6)}
                center
                font={FontFamily.appFontSemiBold}
                color={AppColors.primaryPurple}
                textStyles={CommonStyles.marginTop_2}>
                Select your height
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
                  defaultIndex={67}
                  contentContainerStyle={{height: height(5)}}
                  renderItem={renderItem}
                  itemWidth={width(30)}
                />
              </View>
              <CustomText
                size={4}
                lineHeight={width(4.5)}
                font={FontFamily.appFontSemiBold}
                color={AppColors.primaryPurple}
                textStyles={[
                  CommonStyles.marginTop_2,
                  CommonStyles.marginLeft_3,
                ]}>
                Where do you live?
              </CustomText>
              <DropDownButton
                placeHolder="Select Country"
                //@ts-ignore
                mainContainer={styles.dropDown}
                Icon
                value={selectedState}
                onPress={() => setShowStateModal(true)}
              />
              <CustomText
                size={4}
                lineHeight={width(4.5)}
                font={FontFamily.appFontSemiBold}
                color={AppColors.primaryPurple}
                textStyles={[
                  CommonStyles.marginTop_2,
                  CommonStyles.marginLeft_3,
                ]}>
                Where are you originally from?
              </CustomText>
              <DropDownButton
                placeHolder="Select Original Country"
                //@ts-ignore
                mainContainer={styles.dropDown}
                Icon
                value={selectedCountryState}
                onPress={() => setShowCountryModal(true)}
              />
              <CustomText
                size={4}
                lineHeight={width(4.5)}
                font={FontFamily.appFontSemiBold}
                color={AppColors.primaryPurple}
                textStyles={[
                  CommonStyles.marginTop_2,
                  CommonStyles.marginLeft_3,
                ]}>
                What Language do you speak?
              </CustomText>
              <DropDownButton
                placeHolder="Select Languages"
                //@ts-ignore
                mainContainer={styles.dropDown}
                Icon
                value={languages.join(', ')}
                onPress={() => setShowLanguageModal(true)}
              />
            </>
          )}
        {genderDetail && gender === 'woman' ? (
          <BodyType isVisible={genderDetail} />
        ) : (
          <BodyTypeMan isVisible={genderDetail} />
        )}
        {interestIn && interest === 'man' ? (
          <Interest isVisible={interestIn} />
        ) : (
          <InterestInWoman isVisible={interestIn} />
        )}
        {index === 4 && modal4 === 'userDetail' && (
          <UserDetail isVisible={modal4 === 'userDetail'} />
        )}
        {index === 4 && modal4 === 'selectInterest' && (
          <SelectInterest
            isVisible={modal4 === 'selectInterest'}
            data={puzzledata}
            setArray={setArray}
            array={array}
          />
        )}
        {index === 5 && modal4 === 'uploadphoto' && (
          <UploadPhoto
            isVisible={modal4 === 'uploadphoto'}
            onPressStarted={() => {
              navigation.navigate(ScreenNames.BOTTOM_TAB);
            }}
          />
        )}
        {index !== 3 && (
          <View style={styles.btm}>
            {modal4 !== 'uploadphoto' && (
              <TouchableOpacity
                style={styles.next}
                onPress={() => {
                  if (modal4 === 'userDetail') {
                    setmodal4('selectInterest');
                  } else if (modal4 === 'selectInterest') {
                    setmodal4('uploadphoto');
                    setProgress(100);
                    setIndex(index + 1);
                  } else {
                    setProgress(progress + 20);
                    setIndex(index + 1);
                  }
                }}>
                <NextArrowSvg />
              </TouchableOpacity>
            )}
            <View style={CommonStyles.rowAlignJustifyCenter}>
              <CustomText
                size={4}
                color={AppColors.primaryPurple}
                font={FontFamily.appFontSemiBold}
                textStyles={CommonStyles.marginBottom_1}>
                {index}{' '}
              </CustomText>
              <CustomText
                size={4}
                color={AppColors.primary}
                font={FontFamily.appFontSemiBold}
                textStyles={CommonStyles.marginBottom_1}>
                / 5
              </CustomText>
            </View>
            <View style={styles.progressBG}>
              <Animated.View
                style={[
                  styles.progress,
                  {
                    width: progressAnim.interpolate({
                      inputRange: [0, 100],
                      outputRange: ['0%', '100%'],
                    }),
                  },
                ]}>
                <CustomText>{''}</CustomText>
              </Animated.View>
            </View>
          </View>
        )}
        {index == 3 && (
          <View style={styles.btm}>
            {gender != '' && interest != '' && (
              <TouchableOpacity
                style={styles.next}
                onPress={() => {
                  if (genderDetail === false && interestIn === false) {
                    setGenderDetail(true);
                    setshowModal('bodytype');
                  } else if (genderDetail == true && interestIn === false) {
                    setGenderDetail(false);
                    setInterestIn(true);
                  } else {
                    setInterestIn(false);
                    setGenderDetail(false);
                    setIndex(index + 1);
                    setmodal4('userDetail');
                  }
                }}>
                <NextArrowSvg />
              </TouchableOpacity>
            )}
            <View style={CommonStyles.rowAlignJustifyCenter}>
              <CustomText
                size={4}
                color={AppColors.primaryPurple}
                font={FontFamily.appFontSemiBold}
                textStyles={CommonStyles.marginBottom_1}>
                {index}{' '}
              </CustomText>
              <CustomText
                size={4}
                color={AppColors.primary}
                font={FontFamily.appFontSemiBold}
                textStyles={CommonStyles.marginBottom_1}>
                / 5
              </CustomText>
            </View>
            <View style={styles.progressBG}>
              <Animated.View
                style={[
                  styles.progress,
                  {
                    width: progressAnim.interpolate({
                      inputRange: [0, 100],
                      outputRange: ['0%', '100%'],
                    }),
                  },
                ]}>
                <CustomText>{''}</CustomText>
              </Animated.View>
            </View>
          </View>
        )}
      </View>
      <DropDownModal
        isVisible={showStateModal}
        Data={States}
        text={'Country'}
        onClose={() => setShowStateModal(false)}
        onPress={value => {
          setSelectedState(value?.name);
          setShowStateModal(false);
        }}
      />
      <DropDownModal
        isVisible={showCountryModal}
        Data={States}
        text={'Country'}
        onClose={() => setShowCountryModal(false)}
        onPress={value => {
          setSelectedCountryState(value?.name);
          setShowCountryModal(false);
        }}
      />
      <DropDown
        isVisible={showLanguageModal}
        Data={States}
        text={'Language'}
        onClose={() => setShowLanguageModal(false)}
        onPressDone={(arr: any) => {
          setLanguages(arr);
          setShowLanguageModal(false);
        }}
        //@ts-ignore
        onPress={(value: Any) => {
          setSelectedLanguageState(value?.name);
        }}
      />
    </ScreenWrapper>
  );
};

export default SIGNUP;
