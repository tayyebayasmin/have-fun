import React from 'react';
import {
  Image,
  StyleSheet,
  TouchableOpacity,
  ViewStyle,
  ImageSourcePropType,
} from 'react-native';
import AppColors from '~utils/AppColors';
import {Icons} from '~assets/images';

interface Props {
  size?: number;
  editButton?: boolean;
  onEditPress?(): void;
  editButtonStyle?: ViewStyle;
  containerStyle?: ViewStyle;
  source?: ImageSourcePropType | null;
  avatarStyle?: ViewStyle | {};
}

export default function Avatar({
  source,
  size = 130,
  editButton = true,
  onEditPress,
  avatarStyle,
  editButtonStyle,
  containerStyle = {},
}: Props) {
  const styles = StyleSheet.create({
    containerStyle: {
      height: size,
      width: size,
      overflow: 'hidden',
    },
    imageContainer: {
      height: size,
      width: size,
      borderRadius: size / 2,
      borderColor: AppColors.white,
      backgroundColor: AppColors.white10,
    },
    editButtonContainer: {
      height: size / 3.5,
      width: size / 3.5,
      borderRadius: size / 2,
      backgroundColor: AppColors.black90,
      position: 'absolute',
      bottom: 4,
      right: 8,
      alignItems: 'center',
      justifyContent: 'center',
      alignSelf: 'center',
    },
  });
  return (
    <TouchableOpacity
      style={[styles.containerStyle, containerStyle]}
      onPress={onEditPress}>
      <Image
        testID="avatar-img"
        //@ts-ignore
        source={source ?? Icons?.UserImage}
        style={[styles.imageContainer, avatarStyle ?? {}]}
      />
    </TouchableOpacity>
  );
}
