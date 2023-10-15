import React from 'react';
import Svg, {Path, Rect, ClipPath, G, Defs} from 'react-native-svg';

const Calender = ({color = 'black', height = 31.69, width = 31.69}) => {
  return (
    <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <G clip-path="url(#clip0_856_20709)">
        <Path
          d="M10 19C12.7614 19 15 16.7614 15 14C15 11.2386 12.7614 9 10 9C7.23858 9 5 11.2386 5 14C5 16.7614 7.23858 19 10 19Z"
          stroke="white"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <Path
          d="M19 5L13.6 10.4"
          stroke="white"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <Path
          d="M19 5H14"
          stroke="white"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <Path
          d="M19 5V10"
          stroke="white"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_856_20709">
          <Tect width="24" height="24" fill="white" />
        </ClipPath>
      </Defs>
    </Svg>
  );
};
export default Calender;
