import React, {useMemo} from 'react';
import {
  Text,
  TouchableOpacity,
  ActivityIndicator,
  View,
  Image,
  ViewStyle,
} from 'react-native';
import {Icons} from '~assets/images';
import {Search} from '~assets/SVG';
import {CustomText} from '~components/texts';
import {CommonStyles} from '~utils';
import AppColors from '~utils/AppColors';
import {FontFamily} from '~utils/Fontfamily';
import styles from './styles';

interface Props {
  onPress?: () => any;
  color?: string;
  textColor?: string;
  containerStyle?: ViewStyle;
  mainContainer?: any;
  disabled?: boolean;
  isLoading?: boolean;
  title?: string;
  loaderColor?: string;
  activeOpacity?: number;
  placeHolder?: string;
  Icon?: any;
  isBadge?: boolean;
  value?: string | null;
  size?: number;
  searchIcon?: boolean;
  placeholderColor?: string;
  ButtonIcon?: JSX.Element;
  valColor?: string;
  children?: any;
  testID?: string;
  variant?: any;
  touchableOpacityProps?: any;
  textStyle?: any;
  textProps?: any;
  IconChat?: any;
  loader?: boolean;
  customDisableColor?: string;
}
const Button = ({
  onPress,
  Icon,
  children = 'Button',
  variant = 'primary',
  containerStyle = {},
  touchableOpacityProps,
  textStyle = {},
  textProps = {},
  disabled = false,
  loader = false,
  IconChat,
  customDisableColor = AppColors.grey,
}: Props) => {
  const getStyles = useMemo(() => {
    return {
      container: {
        ...styles.container,
        ...(disabled
          ? {backgroundColor: customDisableColor}
          : variant === 'primary'
          ? styles.primaryContainer
          : variant === 'yellow'
          ? styles.yellowContainer
          : variant === 'red'
          ? styles.redContainer
          : styles.orangeContainer),
      },
    };
  }, [variant, disabled]);

  return (
    <TouchableOpacity
      style={[getStyles.container, containerStyle]}
      disabled={disabled}
      onPress={onPress}
      {...touchableOpacityProps}>
      {loader ? (
        <ActivityIndicator size="small" color={AppColors.white} />
      ) : (
        <View style={CommonStyles.rowAlignJustifyCenter}>
          {Icon && (
            <View style={styles.icon}>
              <Icon />
            </View>
          )}
          {IconChat && <IconChat />}
          <Text
            style={[
              styles.primaryText,
              textStyle,
              {marginLeft: Icon ? 0 : IconChat ? 5 : 0},
            ]}
            {...textProps}>
            {children}
          </Text>
        </View>
      )}
    </TouchableOpacity>
  );
};

export const DropDownButton = ({
  value,
  placeHolder = '',
  containerStyle,
  onPress,
  Icon = false,
  searchIcon = false,
  disabled = false,
  placeholderColor = AppColors.black40,
  title,
  valColor = AppColors.black,
  mainContainer,
}: Props) => {
  return (
    <View style={mainContainer}>
      {title && (
        <CustomText
          fontFam={FontFamily.appFontMedium}
          size={4}
          color={AppColors.white}
          textStyles={styles.title}>
          {title}
        </CustomText>
      )}
      <TouchableOpacity
        activeOpacity={0.9}
        style={[styles.selectContainer, containerStyle]}
        disabled={disabled}
        onPress={onPress}>
        <CustomText
          color={value ? valColor : placeholderColor}
          size={3.5}
          font={FontFamily.appFontLight}
          numberOfLines={2}>
          {value ?? placeHolder}
        </CustomText>
        {Icon ? (
          <Image source={Icons.downArrow} style={styles.iconStyle} />
        ) : (
          <View />
        )}

        {searchIcon && <Search />}
      </TouchableOpacity>
    </View>
  );
};

export default Button;
