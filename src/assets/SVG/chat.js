import React from 'react';
import Svg, {Path} from 'react-native-svg';

const Chat = ({color = 'black', height = 31.69, width = 31.69}) => {
  return (
    <Svg width="21" height="20" viewBox="0 0 21 20" fill="none">
      <Path
        d="M19.5 9.50001C19.5034 10.8199 19.195 12.1219 18.6 13.3C17.8944 14.7118 16.8097 15.8992 15.4674 16.7293C14.1251 17.5594 12.5782 17.9994 11 18C9.68012 18.0034 8.3781 17.6951 7.19999 17.1L1.5 19L3.4 13.3C2.80493 12.1219 2.49656 10.8199 2.5 9.50001C2.50061 7.92177 2.94061 6.37487 3.77072 5.03257C4.60082 3.69027 5.78825 2.60559 7.19999 1.90003C8.3781 1.30496 9.68012 0.996587 11 1.00003H11.5C13.5843 1.11502 15.553 1.99479 17.0291 3.47088C18.5052 4.94698 19.385 6.91567 19.5 9.00002V9.50001Z"
        stroke="white"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
};
export default Chat;
