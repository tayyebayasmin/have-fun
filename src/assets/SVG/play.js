import React from "react";
import Svg, { Path} from "react-native-svg";

const Play = ({ height = 24, width = 24 ,color='#8C2C8C'}) => {
  return (
<Svg width="15" height="15" viewBox="0 0 11 12" fill="none">
<Path fill-rule="evenodd" clip-rule="evenodd" d="M2.35744 0.271281C1.69117 -0.138732 0.833344 0.340618 0.833344 1.12294V10.8771C0.833344 11.6595 1.69117 12.1388 2.35744 11.7288L10.2827 6.8517C10.9173 6.46122 10.9173 5.53887 10.2827 5.14838L2.35744 0.271281Z" fill={color}/>
</Svg>   
  );
};
export default Play;
