import React, {useRef, useState} from 'react';
import {ScrollView, Image, View, TouchableOpacity, Alert} from 'react-native';
import {Icons} from '~assets/images';
import Avatar from '~components/avatar';
import Button from '~components/button';
import FilePickerModal from '~components/file-picker-modal';
import {CustomText} from '~components/texts';
import Verified from '~components/verified';
import {CommonStyles, height, width} from '~utils';
import AppColors from '~utils/AppColors';
import {FontFamily} from '~utils/Fontfamily';
import styles from './styles';

interface Props {
  isVisible?: any;
  onPressStarted?: () => void;
  editProfile?: boolean;
}
const UploadPhoto = ({isVisible, onPressStarted, editProfile}: Props) => {
  const [profile, setProfile] = useState(null);
  const [profile1, setProfile1] = useState(null);
  const [profile2, setProfile2] = useState(null);
  const [profile3, setProfile3] = useState(null);
  const [profile4, setProfile4] = useState(null);
  const [profile5, setProfile5] = useState(null);
  const modalRef = useRef<any>();
  const imageModalRef = useRef<any>();
  const imageModalRef1 = useRef<any>();
  const imageModalRef2 = useRef<any>();
  const imageModalRef3 = useRef<any>();
  const imageModalRef4 = useRef<any>();
  const imageModalRef5 = useRef<any>();

  if (isVisible)
    return (
      <ScrollView style={styles.container}>
        {!editProfile && (
          <CustomText
            center
            size={6}
            lineHeight={width(7)}
            font={FontFamily.appFontSemiBold}
            color={AppColors.primaryPurple}
            textStyles={[
              CommonStyles.marginLeft_3,
              CommonStyles.marginBottom_3,
            ]}>
            Upload your photos
          </CustomText>
        )}
        <View style={{flexDirection: 'row'}}>
          <View
            style={{
              backgroundColor: AppColors.purple20,
              width: width(55),
              height: width(55),
              borderRadius: width(5),
            }}>
            <Avatar
              avatarStyle={{
                width: width(55),
                height: width(55),
                borderRadius: width(5),
              }}
              containerStyle={styles.avatarContainer}
              onEditPress={() => imageModalRef.current.show()}
              //@ts-ignore
              source={profile?.path ? {uri: profile?.path} : null}
              size={90}
            />
            <TouchableOpacity
              onPress={() => imageModalRef.current.show()}
              style={{
                alignItems: 'center',
                width: width(32),
                padding: width(2),
                flexDirection: 'row',
                borderRadius: width(5),
                alignSelf: 'center',
                justifyContent: 'space-between',
                position: 'absolute',
                bottom: width(7),
                backgroundColor: AppColors.white20,
              }}>
              <Image source={Icons.camera} resizeMode="contain" />
              <CustomText color={AppColors.white}>Upload Photo</CustomText>
            </TouchableOpacity>
          </View>
          <View>
            {profile1 == null && (
              <TouchableOpacity
                onPress={() => imageModalRef1.current.show()}
                style={{
                  backgroundColor: AppColors.white,
                  width: width(28),
                  alignItems: 'center',
                  padding: width(2),
                  borderRadius: width(5),
                  marginLeft: width(7),
                  marginBottom: width(2),
                  justifyContent: 'center',
                }}>
                <Image source={Icons.face} resizeMode="contain" />
                <View
                  style={{
                    backgroundColor: AppColors.primary,
                    width: width(15),
                    flexDirection: 'row',
                    padding: width(1),
                    borderRadius: width(2),
                    marginTop: width(5),
                  }}>
                  <Image source={Icons.plus} resizeMode="contain" />
                  <CustomText color={AppColors.white}>Add</CustomText>
                </View>
              </TouchableOpacity>
            )}
            {profile1 != null && (
              <>
                <TouchableOpacity
                  onPress={() => setProfile1(null)}
                  style={{
                    position: 'absolute',
                    backgroundColor: AppColors.primary,
                    right: width(2),
                    zIndex: 1,
                    top: width(2),
                    borderRadius: width(5),
                  }}>
                  <Image source={Icons.cross} />
                </TouchableOpacity>
                <Avatar
                  avatarStyle={{
                    width: width(28),
                    height: width(28),
                    borderRadius: width(5),
                  }}
                  containerStyle={{
                    marginLeft: width(7),
                    marginBottom: width(2),
                    width: width(28),
                    height: width(28),
                    borderRadius: width(5),
                    backgroundColor: 'red',
                  }}
                  //@ts-ignore
                  source={profile1?.path ? {uri: profile1?.path} : null}
                  size={10}
                />
              </>
            )}
            {profile2 == null && (
              <TouchableOpacity
                onPress={() => imageModalRef2.current.show()}
                style={{
                  backgroundColor: AppColors.white,
                  width: width(28),
                  alignItems: 'center',
                  padding: width(2),
                  borderRadius: width(5),
                  marginLeft: width(7),
                  marginBottom: width(2),
                  justifyContent: 'center',
                }}>
                <Image source={Icons.face} resizeMode="contain" />
                <View
                  style={{
                    backgroundColor: AppColors.primary,
                    width: width(15),
                    flexDirection: 'row',
                    padding: width(1),
                    borderRadius: width(2),
                    marginTop: width(5),
                  }}>
                  <Image source={Icons.plus} resizeMode="contain" />
                  <CustomText color={AppColors.white}>Add</CustomText>
                </View>
              </TouchableOpacity>
            )}
            {profile2 != null && (
              <View>
                <TouchableOpacity
                  onPress={() => setProfile2(null)}
                  style={{
                    position: 'absolute',
                    backgroundColor: AppColors.primary,
                    right: width(2),
                    zIndex: 1,
                    top: width(2),
                    borderRadius: width(5),
                  }}>
                  <Image source={Icons.cross} />
                </TouchableOpacity>
                <Avatar
                  avatarStyle={{
                    width: width(28),
                    height: width(28),
                    borderRadius: width(5),
                  }}
                  containerStyle={{
                    marginLeft: width(7),
                    marginBottom: width(2),
                    width: width(28),
                    height: width(28),
                    borderRadius: width(5),
                    backgroundColor: 'red',
                  }}
                  //@ts-ignore
                  source={profile2?.path ? {uri: profile2?.path} : null}
                  size={10}
                />
              </View>
            )}
          </View>
        </View>
        <View style={{flexDirection: 'row'}}>
          {profile3 == null && (
            <TouchableOpacity
              onPress={() => imageModalRef3.current.show()}
              style={{
                backgroundColor: AppColors.white,
                width: width(28),
                alignItems: 'center',
                padding: width(2),
                borderRadius: width(5),
                marginTop: width(5),
                marginLeft: width(2),
                marginBottom: width(2),
                justifyContent: 'center',
              }}>
              <Image source={Icons.face} resizeMode="contain" />
              <View
                style={{
                  backgroundColor: AppColors.primary,
                  width: width(15),
                  flexDirection: 'row',
                  padding: width(1),
                  borderRadius: width(2),
                  marginTop: width(5),
                }}>
                <Image source={Icons.plus} resizeMode="contain" />
                <CustomText color={AppColors.white}>Add</CustomText>
              </View>
            </TouchableOpacity>
          )}
          {profile3 != null && (
            <View style={{marginTop: width(5)}}>
              <TouchableOpacity
                onPress={() => setProfile3(null)}
                style={{
                  position: 'absolute',
                  backgroundColor: AppColors.primary,
                  right: width(2),
                  zIndex: 1,
                  top: width(2),
                  borderRadius: width(5),
                }}>
                <Image source={Icons.cross} />
              </TouchableOpacity>
              <Avatar
                avatarStyle={{
                  width: width(28),
                  height: width(28),
                  borderRadius: width(5),
                }}
                containerStyle={{
                  marginLeft: width(2),
                  marginBottom: width(2),
                  width: width(28),
                  height: width(28),
                  borderRadius: width(5),
                  backgroundColor: 'red',
                }}
                //@ts-ignore
                source={profile3?.path ? {uri: profile3?.path} : null}
                size={10}
              />
            </View>
          )}
          {profile4 == null && (
            <TouchableOpacity
              onPress={() => imageModalRef4.current.show()}
              style={{
                backgroundColor: AppColors.white,
                width: width(28),
                alignItems: 'center',
                padding: width(2),
                borderRadius: width(5),
                marginTop: width(5),
                marginLeft: width(2),
                marginBottom: width(2),
                justifyContent: 'center',
              }}>
              <Image source={Icons.face} resizeMode="contain" />
              <View
                style={{
                  backgroundColor: AppColors.primary,
                  width: width(15),
                  flexDirection: 'row',
                  padding: width(1),
                  borderRadius: width(2),
                  marginTop: width(5),
                }}>
                <Image source={Icons.plus} resizeMode="contain" />
                <CustomText color={AppColors.white}>Add</CustomText>
              </View>
            </TouchableOpacity>
          )}
          {profile4 != null && (
            <View style={{marginTop: width(5)}}>
              <TouchableOpacity
                onPress={() => setProfile4(null)}
                style={{
                  position: 'absolute',
                  backgroundColor: AppColors.primary,
                  right: width(2),
                  zIndex: 1,
                  top: width(2),
                  borderRadius: width(5),
                }}>
                <Image source={Icons.cross} />
              </TouchableOpacity>
              <Avatar
                avatarStyle={{
                  width: width(28),
                  height: width(28),
                  borderRadius: width(5),
                }}
                containerStyle={{
                  marginLeft: width(2),
                  marginBottom: width(2),
                  width: width(28),
                  height: width(28),
                  borderRadius: width(5),
                  backgroundColor: 'red',
                }}
                //@ts-ignore
                source={profile4?.path ? {uri: profile4?.path} : null}
                size={10}
              />
            </View>
          )}
          {profile5 == null && (
            <TouchableOpacity
              onPress={() => imageModalRef5.current.show()}
              style={{
                backgroundColor: AppColors.white,
                width: width(28),
                alignItems: 'center',
                padding: width(2),
                borderRadius: width(5),
                marginTop: width(5),
                marginLeft: width(2),
                marginBottom: width(2),
                justifyContent: 'center',
              }}>
              <Image source={Icons.face} resizeMode="contain" />
              <View
                style={{
                  backgroundColor: AppColors.primary,
                  width: width(15),
                  flexDirection: 'row',
                  padding: width(1),
                  borderRadius: width(2),
                  marginTop: width(5),
                }}>
                <Image source={Icons.plus} resizeMode="contain" />
                <CustomText color={AppColors.white}>Add</CustomText>
              </View>
            </TouchableOpacity>
          )}
          {profile5 != null && (
            <View style={{marginTop: width(5)}}>
              <TouchableOpacity
                onPress={() => setProfile5(null)}
                style={{
                  position: 'absolute',
                  backgroundColor: AppColors.primary,
                  right: width(2),
                  zIndex: 1,
                  top: width(2),
                  borderRadius: width(5),
                }}>
                <Image source={Icons.cross} />
              </TouchableOpacity>
              <Avatar
                avatarStyle={{
                  width: width(28),
                  height: width(28),
                  borderRadius: width(5),
                }}
                containerStyle={{
                  marginLeft: width(2),
                  marginBottom: width(2),
                  width: width(28),
                  height: width(28),
                  borderRadius: width(5),
                  backgroundColor: 'red',
                }}
                //@ts-ignore
                source={profile5?.path ? {uri: profile5?.path} : null}
                size={10}
              />
            </View>
          )}
        </View>
        <FilePickerModal
          ref={imageModalRef}
          onFilesSelected={img => {
            if (img.size / 1000000 <= 1) {
              setProfile(img);
            } else {
              Alert.alert('Image size cannot exceed 1MB');
            }
          }}
        />
        <FilePickerModal
          ref={imageModalRef1}
          onFilesSelected={img => {
            if (img.size / 1000000 <= 1) {
              setProfile1(img);
            } else {
              Alert.alert('Image size cannot exceed 1MB');
            }
          }}
        />
        <FilePickerModal
          ref={imageModalRef2}
          onFilesSelected={img => {
            if (img.size / 1000000 <= 1) {
              setProfile2(img);
            } else {
              Alert.alert('Image size cannot exceed 1MB');
            }
          }}
        />
        <FilePickerModal
          ref={imageModalRef3}
          onFilesSelected={img => {
            if (img.size / 1000000 <= 1) {
              setProfile3(img);
            } else {
              Alert.alert('Image size cannot exceed 1MB');
            }
          }}
        />
        <FilePickerModal
          ref={imageModalRef4}
          onFilesSelected={img => {
            if (img.size / 1000000 <= 1) {
              setProfile4(img);
            } else {
              Alert.alert('Image size cannot exceed 1MB');
            }
          }}
        />
        <FilePickerModal
          ref={imageModalRef5}
          onFilesSelected={img => {
            if (img.size / 1000000 <= 1) {
              setProfile5(img);
            } else {
              Alert.alert('Image size cannot exceed 1MB');
            }
          }}
        />
        {!editProfile && (
          <Button
            containerStyle={{marginTop: width(10)}}
            onPress={() => {
              console.log('hello');
              modalRef.current.show();
            }}>
            Next
          </Button>
        )}
        <Verified
          ref={modalRef}
          onPressStarted={() => {
            modalRef.current.hide();
            //@ts-ignore
            onPressStarted();
          }}
        />
      </ScrollView>
    );
  else return <></>;
};
export default UploadPhoto;
