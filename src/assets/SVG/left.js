import React from 'react';
import Svg, {Path} from 'react-native-svg';

const NextArrowSvg = ({color = 'black', height = 31.69, width = 31.69}) => {
  return (
    <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <Path
        d="M19 12L5 12"
        stroke="white"
        strokeWidth="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M19 12L13 6"
        stroke="white"
        strokeWidth="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M19 12L13 18"
        stroke="white"
        strokeWidth="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
};
export default NextArrowSvg;
