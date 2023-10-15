import React, {useState, useRef} from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {View} from 'react-native';
import PhoneInput from 'react-native-phone-number-input';
import {ScreenWrapper} from 'react-native-screen-wrapper';
import {Apple, Google} from '~assets/SVG';
import {Button, CustomText, Header} from '~components';
import {ScreenNames} from '~routes';
import {CommonStyles, width} from '~utils';
import AppColors from '~utils/AppColors';
import {FontFamily} from '~utils/Fontfamily';
import styles from './styles';

const Login = ({navigation}: NativeStackScreenProps<any>) => {
  const [value, setValue] = useState('');
  const [formattedValue, setFormattedValue] = useState('');
  const phoneInput = useRef();
  console.log(value);
  return (
    <ScreenWrapper statusBarColor={'white'} scrollType="scroll" translucent>
      <View style={styles.container}>
        <Header onPress={() => navigation.goBack()} />

        <CustomText
          size={6}
          lineHeight={width(8)}
          center
          font={FontFamily.appFontSemiBold}
          color={AppColors.primaryPurple}
          textStyles={CommonStyles.marginTop_5}>
          Login
        </CustomText>
        <CustomText
          center
          size={4}
          lineHeight={width(8)}
          font={FontFamily.appFontRegular}
          color={AppColors.primaryPurple}
          textStyles={CommonStyles.marginTop_1}>
          Enter your phone number to login
        </CustomText>
        <PhoneInput
          //@ts-ignore
          ref={phoneInput}
          defaultValue={value}
          defaultCode="DM"
          layout="first"
          onChangeText={text => {
            setValue(text);
          }}
          onChangeFormattedText={text => {
            setFormattedValue(text);
          }}
          textContainerStyle={{borderRadius: width(100)}}
          containerStyle={styles.input}
          //@ts-ignore
          textInputProps={{marginBottom: -3}}
          withShadow
          textInputStyle={styles.textinput}
          // autoFocus
        />
        <Button
          containerStyle={styles.login}
          onPress={() =>
            navigation.navigate(ScreenNames.VERIFY, {
              Value: value,
            })
          }>
          Login
        </Button>
        <CustomText
          center
          size={4.3}
          lineHeight={width(8)}
          font={FontFamily.appFontRegular}
          color={AppColors.primaryPurple}
          textStyles={CommonStyles.marginTop_1}>
          OR
        </CustomText>
        <Button
          containerStyle={styles.btn}
          textStyle={styles.text}
          Icon={Google}>
          Login with Google
        </Button>
        <Button
          containerStyle={styles.btn}
          textStyle={styles.text}
          Icon={Apple}>
          Login with Apple
        </Button>

        <View style={styles.row}>
          <CustomText color={AppColors.black}>
            Don't have an account?{' '}
          </CustomText>
          <CustomText
            font={FontFamily.appFontSemiBold}
            color={AppColors.primary}
            onPress={() => navigation.navigate(ScreenNames.SIGNUP)}>
            Sign Up
          </CustomText>
        </View>
      </View>
    </ScreenWrapper>
  );
};

export default Login;
