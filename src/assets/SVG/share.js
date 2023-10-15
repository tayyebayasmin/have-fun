import React from 'react';
import Svg, {Path, Rect, ClipPath, G, Defs} from 'react-native-svg';

const Share = ({color = 'black', height = 31.69, width = 31.69}) => {
  return (
    <Svg width="16" height="17" viewBox="0 0 16 17" fill="none">
      <G clip-path="url(#clip0_1103_10892)">
        <Path
          d="M14.0002 2.45801L9.66684 14.458C9.63759 14.5218 9.59063 14.5759 9.53154 14.6138C9.47245 14.6518 9.40371 14.6719 9.3335 14.6719C9.26329 14.6719 9.19456 14.6518 9.13547 14.6138C9.07638 14.5759 9.02942 14.5218 9.00017 14.458L6.66684 9.79134L2.00017 7.45801C1.93634 7.42876 1.88225 7.3818 1.84433 7.32271C1.80641 7.26362 1.78625 7.19489 1.78625 7.12468C1.78625 7.05446 1.80641 6.98573 1.84433 6.92664C1.88225 6.86755 1.93634 6.82059 2.00017 6.79134L14.0002 2.45801Z"
          stroke="white"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_1103_10892">
          <Rect
            width="16"
            height="16"
            fill="white"
            transform="translate(0 0.458008)"
          />
        </ClipPath>
      </Defs>
    </Svg>
  );
};
export default Share;
