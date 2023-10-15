import React, {useEffect, useState} from 'react';
import {View} from 'react-native';
import OTPInputView from '@twotalltotems/react-native-otp-input';
import {ScreenWrapper} from 'react-native-screen-wrapper';
import {Button, CustomText, Header} from '~components';
import {ScreenNames} from '~routes';
import {CommonStyles, width} from '~utils';
import AppColors from '~utils/AppColors';
import {FontFamily} from '~utils/Fontfamily';
import styles from './styles';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

const Verify = ({navigation, route}: NativeStackScreenProps<any>) => {
  const value = route?.params?.Value;
  console.log(value);
  const [minutes, setMinutes] = useState(1);
  const [seconds, setSeconds] = useState(30);
  const [code, setCode] = useState('');

  useEffect(() => {
    const timer = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      } else {
        if (minutes === 0 && seconds === 0) {
          clearInterval(timer);
        } else {
          setMinutes(minutes - 1);
          setSeconds(59);
        }
      }
    }, 1000);

    return () => clearInterval(timer); // Cleanup the timer when the component unmounts
  }, [minutes, seconds]);

  const formatTime = (value: any) => {
    return value < 10 ? `0${value}` : `${value}`;
  };
  return (
    <ScreenWrapper statusBarColor={'white'} scrollType="keyboard" translucent>
      <View style={styles.container}>
        <Header onPress={() => navigation.goBack()} />

        <CustomText
          size={6}
          lineHeight={width(8)}
          center
          font={FontFamily.appFontSemiBold}
          color={AppColors.primaryPurple}
          textStyles={CommonStyles.marginTop_5}>
          Verify Login
        </CustomText>
        <CustomText
          center
          size={4}
          lineHeight={width(8)}
          font={FontFamily.appFontRegular}
          color={AppColors.primaryPurple}
          textStyles={CommonStyles.marginTop_1}>
          Enter OTP code we sent to {value} This code will expired in{' '}
          {`${formatTime(minutes)}:${formatTime(seconds)}`}
        </CustomText>
        <View style={styles.otpContainer}>
          <OTPInputView
            style={styles.otpView}
            pinCount={4}
            onCodeChanged={value => {
              setCode(value);
            }}
            autoFocusOnLoad={false}
            codeInputFieldStyle={styles.underlineStyleBase}
          />
        </View>
        <Button containerStyle={styles.login}>Verify Code</Button>
      </View>
    </ScreenWrapper>
  );
};

export default Verify;
