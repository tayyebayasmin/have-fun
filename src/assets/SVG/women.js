import React from 'react';
import Svg, {Path, Rect, ClipPath, Defs, G} from 'react-native-svg';

const Women = ({color = 'black', height = 31.69, width = 31.69}) => {
  return (
    <Svg width="32" height="32" viewBox="0 0 32 32" fill="none">
      <G clip-path="url(#clip0_963_543)">
        <Path
          d="M16 18.6667C19.6819 18.6667 22.6667 15.6819 22.6667 12C22.6667 8.31814 19.6819 5.33337 16 5.33337C12.3181 5.33337 9.33334 8.31814 9.33334 12C9.33334 15.6819 12.3181 18.6667 16 18.6667Z"
          stroke="white"
          stroke-width="3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <Path
          d="M16 18.6666V28"
          stroke="white"
          stroke-width="3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <Path
          d="M12 24H20"
          stroke="white"
          stroke-width="3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_963_543">
          <Rect width="32" height="32" fill="white" />
        </ClipPath>
      </Defs>
    </Svg>
  );
};
export default Women;
