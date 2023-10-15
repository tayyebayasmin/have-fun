import React from 'react';
import Svg, {Path, Defs, ClipPath, Rect, G} from 'react-native-svg';

const Home4 = ({color = 'black', height = 31.69, width = 31.69}) => {
  return (
    <Svg width="24" height="25" viewBox="0 0 24 25" fill="none">
      <G clip-path="url(#clip0_50_3415)">
        <Path
          d="M16 4.50781H8C5.79086 4.50781 4 6.29867 4 8.50781V16.5078C4 18.717 5.79086 20.5078 8 20.5078H16C18.2091 20.5078 20 18.717 20 16.5078V8.50781C20 6.29867 18.2091 4.50781 16 4.50781Z"
          stroke="white"
          strokeWidth="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <Path
          d="M12 15.5078C13.6569 15.5078 15 14.1647 15 12.5078C15 10.851 13.6569 9.50781 12 9.50781C10.3431 9.50781 9 10.851 9 12.5078C9 14.1647 10.3431 15.5078 12 15.5078Z"
          stroke="white"
          strokeWidth="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <Path
          d="M16.5 8.00781V8.00881"
          stroke="white"
          strokeWidth="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_50_3415">
          <Rect
            width="24"
            height="24"
            fill="white"
            transform="translate(0 0.507812)"
          />
        </ClipPath>
      </Defs>
    </Svg>
  );
};
export default Home4;
