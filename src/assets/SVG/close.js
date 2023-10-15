import React from 'react';
import Svg, {G, Path} from 'react-native-svg';
import AppColors from '~utils/AppColors';

const Close = ({height = 35, width = 35, color = AppColors.black}) => {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 64.000000 64.000000"
      preserveAspectRatio="xMidYMid meet">
      <G
        transform="translate(0.000000,64.000000) scale(0.100000,-0.100000)"
        fill={color}
        stroke="none">
        <Path
          d="M156 484 c-9 -8 -16 -20 -16 -26 0 -5 28 -39 62 -74 l61 -64 -61 -64
   c-34 -35 -62 -69 -62 -74 0 -14 28 -42 42 -42 5 0 39 28 74 62 l64 61 64 -61
   c35 -34 69 -62 74 -62 14 0 42 28 42 42 0 5 -28 39 -62 74 l-61 64 61 64 c34
   35 62 69 62 74 0 14 -28 42 -42 42 -5 0 -39 -28 -74 -62 l-64 -61 -64 61 c-35
   34 -69 62 -74 62 -6 0 -18 -7 -26 -16z"
        />
      </G>
    </Svg>
  );
};
export default Close;
