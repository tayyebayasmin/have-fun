import React from 'react';
import {TouchableOpacity, ViewStyle} from 'react-native';
import {Back} from '~assets/SVG';
import styles from './styles';

interface Props {
  onPress?: () => void;
  containerStyle?: ViewStyle;
  color?: string;
}
const Header = ({onPress, containerStyle, color}: Props) => {
  return (
    <TouchableOpacity
      style={[styles.container, containerStyle]}
      onPress={onPress}>
      <Back color={color} />
    </TouchableOpacity>
  );
};

export default Header;
