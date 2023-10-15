import React from 'react';
import Svg, {Path, Rect, ClipPath, G, Defs} from 'react-native-svg';

const Swip = ({color = 'black', height = 31.69, width = 31.69}) => {
  return (
    <Svg width="25" height="24" viewBox="0 0 25 24" fill="none">
      <G clip-path="url(#clip0_1103_2266)">
        <Rect
          x="1.46128"
          y="6.86842"
          width="10.5"
          height="16.5"
          rx="3.25"
          transform="rotate(-20 1.46128 6.86842)"
          fill="white"
          stroke="#FFA09F"
          stroke-width="1.5"
        />
        <Rect
          x="13.4207"
          y="1.96128"
          width="10.5"
          height="16.5"
          rx="3.25"
          transform="rotate(20 13.4207 1.96128)"
          fill="white"
          stroke="#FFA09F"
          stroke-width="1.5"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_1103_2266">
          <Rect
            width="24"
            height="24"
            fill="white"
            transform="translate(0.5)"
          />
        </ClipPath>
      </Defs>
    </Svg>
  );
};
export default Swip;
