import React from 'react';
import Svg, {Path} from 'react-native-svg';

const Apple = ({color = 'black', height = 31.69, width = 31.69}) => {
  return (
    <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <Path
        d="M17.5172 12.5555C17.5078 10.957 18.232 9.75234 19.6945 8.86406C18.8766 7.69219 17.6391 7.04766 16.0078 6.92344C14.4633 6.80156 12.7734 7.82344 12.1547 7.82344C11.5008 7.82344 10.0055 6.96563 8.82891 6.96563C6.40078 7.00313 3.82031 8.90156 3.82031 12.7641C3.82031 13.9055 4.02891 15.0844 4.44609 16.2984C5.00391 17.8969 7.01484 21.8133 9.1125 21.75C10.2094 21.7242 10.9852 20.9719 12.4125 20.9719C13.7977 20.9719 14.5148 21.75 15.7383 21.75C17.8547 21.7195 19.6734 18.1594 20.2031 16.5563C17.3648 15.218 17.5172 12.6375 17.5172 12.5555ZM15.0539 5.40703C16.2422 3.99609 16.1344 2.71172 16.0992 2.25C15.0492 2.31094 13.8352 2.96484 13.1438 3.76875C12.382 4.63125 11.9344 5.69766 12.0305 6.9C13.1648 6.98672 14.2008 6.40313 15.0539 5.40703Z"
        fill="#4B164C"
      />
    </Svg>
  );
};
export default Apple;
