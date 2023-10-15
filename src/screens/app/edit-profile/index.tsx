import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React, {useState, useRef} from 'react';
import {TouchableOpacity, ScrollView, View, Image} from 'react-native';
import {ScreenWrapper} from 'react-native-screen-wrapper';
import {Icons} from '~assets/images';
import {Button, CustomText, Header} from '~components';
import Input from '~components/input';
import InterestSelectionModal from '~components/interest-selection';
import UploadPhoto from '~components/upload-photo';
import {ScreenNames} from '~routes';
import {CommonStyles, height, width} from '~utils';
import AppColors from '~utils/AppColors';
import {FontFamily} from '~utils/Fontfamily';
import styles from './styles';
const EditProfile = ({navigation}: NativeStackScreenProps<any>) => {
  const [name, setName] = useState('Nadia Lipshutz');
  const [dob, setDOB] = useState('20/10/2000');
  const [gender, setGender] = useState('Woman');
  const [modal, setModal] = useState(false);
  const [loc, setLoc] = useState('Hamburg, Germany');
  const [about, setAbout] = useState(
    'A good listener. I love having a good talk to know each other’s side 😍.',
  );
  const [interest, setInterest] = useState([
    '🏞 Nature',
    '✈ Travel',
    '📝 Writing',
    '🤼 People',
    '⛹️‍♀️Gym & Fitness',
  ]);
  return (
    <ScreenWrapper
      statusBarColor={'white'}
      barStyle="dark-content"
      translucent
      scrollType="scroll">
      <View style={styles.container}>
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
            textStyles={{width: width(55), marginTop: width(5)}}
            font={FontFamily.appFontSemiBold}>
            Edit Profile
          </CustomText>
        </View>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={{height: height(50)}}>
            <UploadPhoto isVisible={true} editProfile={true} />
          </View>

          <CustomText color={AppColors.gray} letterSpacing={0.3}>
            PERSONAL DETAILS
          </CustomText>
          <CustomText
            color={AppColors.black}
            letterSpacing={0.3}
            textStyles={CommonStyles.marginTop_3}>
            Full Name
          </CustomText>
          <Input
            value={name}
            onChange={val => setName(val)}
            containerStyle={{
              borderColor: 'transparent',
              width: width(90),
              marginTop: width(2),
            }}
            innerContainerStyle={{borderColor: 'transparent', width: width(90)}}
          />
          <CustomText
            color={AppColors.black}
            letterSpacing={0.3}
            textStyles={CommonStyles.marginTop_2}>
            Date of Birth
          </CustomText>
          <Input
            value={dob}
            onChange={val => setDOB(val)}
            containerStyle={{
              borderColor: 'transparent',
              width: width(90),
              marginTop: width(2),
            }}
            innerContainerStyle={{borderColor: 'transparent', width: width(90)}}
          />
          <CustomText
            color={AppColors.black}
            letterSpacing={0.3}
            textStyles={CommonStyles.marginTop_2}>
            About
          </CustomText>
          <Input
            value={about}
            onChange={val => setAbout(val)}
            multiline
            numberOfLines={5}
            containerStyle={{
              borderColor: 'transparent',
              width: width(90),
              height: height(12),
              marginTop: width(2),
            }}
            innerContainerStyle={{
              borderColor: 'transparent',
              width: width(90),
              height: height(12),
            }}
            inputStyle={{
              borderColor: 'transparent',
              width: width(90),
              height: height(12),
            }}
          />
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <CustomText
              color={AppColors.black}
              letterSpacing={0.3}
              textStyles={CommonStyles.marginTop_2}>
              My Interests
            </CustomText>
            <TouchableOpacity
              style={{alignSelf: 'center'}}
              onPress={() => setModal(true)}>
              <CustomText
                color={AppColors.primary}
                textStyles={CommonStyles.marginTop_1}>
                Edit
              </CustomText>
            </TouchableOpacity>
          </View>
          <View
            style={{
              flexDirection: 'row',
              flexWrap: 'wrap',
            }}>
            {interest?.map(item => {
              return (
                <View
                  style={{
                    flexDirection: 'row',
                    alignContent: 'center',
                    borderColor: AppColors.grey,
                    borderWidth: width(0.2),
                    width: width(28),
                    marginRight: width(2),
                    height: width(9),
                    marginVertical: width(1),
                    alignItems: 'center',
                    borderRadius: width(6),
                    padding: width(2),
                  }}>
                  <CustomText>{item}</CustomText>
                  <TouchableOpacity
                    onPress={() => {
                      let temp = [...interest];
                      const filteredCategories = temp.filter(
                        category => category !== item,
                      );
                      setInterest(filteredCategories);
                    }}>
                    <Image
                      source={Icons.cross}
                      style={{tintColor: AppColors.grey10}}
                    />
                  </TouchableOpacity>
                </View>
              );
            })}
          </View>
          <CustomText
            color={AppColors.black}
            letterSpacing={0.3}
            textStyles={CommonStyles.marginTop_2}>
            Location
          </CustomText>
          <Input
            value={loc}
            onChange={val => setLoc(val)}
            containerStyle={{
              borderColor: 'transparent',
              width: width(90),
              marginTop: width(2),
            }}
            innerContainerStyle={{borderColor: 'transparent', width: width(90)}}
          />
          <CustomText
            color={AppColors.black}
            letterSpacing={0.3}
            textStyles={CommonStyles.marginTop_2}>
            Gender
          </CustomText>
          <Input
            value={gender}
            onChange={val => setGender(val)}
            containerStyle={{
              borderColor: 'transparent',
              width: width(90),
              marginTop: width(2),
            }}
            innerContainerStyle={{borderColor: 'transparent', width: width(90)}}
          />
          <Button
            containerStyle={{
              backgroundColor: AppColors.primary,
              marginTop: width(8),
            }}
            onPress={() =>
              gender === 'man'
                ? navigation.navigate(ScreenNames.BODY_TYPE_MAN)
                : navigation.navigate(ScreenNames.BODY_TYPE_WOMAN)
            }>
            Change Body
          </Button>
          <Button
            onPress={() => navigation.navigate(ScreenNames.BOTTOM_TAB)}
            //@ts-ignore
            containerStyle={[
              CommonStyles.marginTop_2,
              CommonStyles.marginBottom_4,
            ]}>
            Save Changes
          </Button>
        </ScrollView>
        <InterestSelectionModal
          isVisible={modal}
          data={[
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
          ]}
          setArray={setInterest}
          array={interest}
          onClose={() => setModal(false)}
        />
      </View>
    </ScreenWrapper>
  );
};

export default EditProfile;
