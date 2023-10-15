import React from 'react';
import Svg, {Path, Circle} from 'react-native-svg';

const Search = ({color = 'black', height = 31.69, width = 31.69}) => {
  return (
    <Svg width="22" height="22" viewBox="0 0 22 22" fill="none">
      <Circle
        cx="10.7666"
        cy="10.7664"
        r="8.98856"
        stroke="#4B164C"
        strokeWidth="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M17.0183 17.4849L20.5423 20.9997"
        stroke="#4B164C"
        strokeWidth="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
};
export default Search;
