import React from 'react';
import Svg, {Path, Rect, ClipPath, G, Defs} from 'react-native-svg';

const Language = ({color = 'black', height = 31.69, width = 31.69}) => {
  return (
    <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <G clip-path="url(#clip0_60_4418)">
        <Path
          d="M4 6.28571H12M9.71429 4V6.28571C9.71429 8.71055 9.11225 11.0361 8.04061 12.7507C6.96897 14.4653 5.51552 15.4286 4 15.4286M5.14286 10.8571C5.14096 12.0364 5.93659 13.1704 7.36351 14.0223C8.79043 14.8742 10.7383 15.378 12.8 15.4286"
          stroke="#FFA09F"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <Path
          d="M10.8572 20.0001L15.4286 9.71436L20 20.0001M18.9715 17.7144H11.8857"
          stroke="#FFA09F"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_60_4418">
          <Rect width="24" height="24" fill="white" />
        </ClipPath>
      </Defs>
    </Svg>
  );
};
export default Language;
