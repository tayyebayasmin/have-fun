import React from 'react';
import Svg, {Path, Rect, ClipPath, G, Defs} from 'react-native-svg';

const Men = ({color = 'black', height = 31.69, width = 31.69}) => {
  return (
    <Svg width="32" height="32" viewBox="0 0 32 32" fill="none">
      <G clip-path="url(#clip0_963_1494)">
        <Path
          d="M13.3333 25.3333C17.0152 25.3333 20 22.3486 20 18.6667C20 14.9848 17.0152 12 13.3333 12C9.65144 12 6.66667 14.9848 6.66667 18.6667C6.66667 22.3486 9.65144 25.3333 13.3333 25.3333Z"
          stroke="white"
          stroke-width="3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <Path
          d="M25.3333 6.66663L18.1333 13.8666"
          stroke="white"
          stroke-width="3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <Path
          d="M25.3333 6.66663H18.6667"
          stroke="white"
          stroke-width="3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <Path
          d="M25.3333 6.66663V13.3333"
          stroke="white"
          stroke-width="3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_963_1494">
          <Rect width="32" height="32" fill="white" />
        </ClipPath>
      </Defs>
    </Svg>
  );
};
export default Men;
