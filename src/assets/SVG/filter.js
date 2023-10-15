import React from 'react';
import Svg, {Path, Rect, ClipPath, G, Defs} from 'react-native-svg';

const Filter = ({color = 'black', height = 31.69, width = 31.69}) => {
  return (
    <Svg width="24" height="26" viewBox="0 0 24 26" fill="none">
      <G clip-path="url(#clip0_49_1922)">
        <Path
          d="M15 10.4803C16.6569 10.4803 18 9.07266 18 7.33623C18 5.5998 16.6569 4.19214 15 4.19214C13.3431 4.19214 12 5.5998 12 7.33623C12 9.07266 13.3431 10.4803 15 10.4803Z"
          stroke="#4B164C"
          strokeWidth="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <Path
          d="M4 7.33618H12"
          stroke="#4B164C"
          strokeWidth="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <Path
          d="M18 7.33618L20 7.33618"
          stroke="#4B164C"
          strokeWidth="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <Path
          d="M9 20.9605C10.6569 20.9605 12 19.5529 12 17.8165C12 16.08 10.6569 14.6724 9 14.6724C7.34315 14.6724 6 16.08 6 17.8165C6 19.5529 7.34315 20.9605 9 20.9605Z"
          stroke="#4B164C"
          strokeWidth="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <Path
          d="M4 17.8165H6"
          stroke="#4B164C"
          strokeWidth="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <Path
          d="M12 17.8165L20 17.8165"
          stroke="#4B164C"
          strokeWidth="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_49_1922">
          <Rect width="24" height="25.1527" fill="white" />
        </ClipPath>
      </Defs>
    </Svg>
  );
};
export default Filter;
