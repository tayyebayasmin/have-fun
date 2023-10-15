import {
  createNavigationContainerRef,
  NavigationContainer,
} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {useEffect} from 'react';
import {useSelector} from 'react-redux';
import {selectIsLoggedIn} from '~store/slices/user';
import RNBootSplash from 'react-native-bootsplash';
import {
  ForgotPasswordScreen,
  LoginScreen,
  SIGNUP,
  Startup,
  Verify,
} from '../screens/auth';
import ScreenNames from './routes';
import Home from '~screens/app/home';
import BottomTab from './bottom-tab/bottom';
import Match from '~screens/app/match';
import MatchProfileDetail from '~screens/app/match-profile-detail';
import Chating from '~screens/app/chating';
import Profile from '~screens/app/profile';
import EditProfile from '~screens/app/edit-profile';
import BodyTypeManScreen from '~components/body-type-man';
import BodyTypeWoman from '~screens/app/body-type';
import ChooseLanguages from '~screens/app/choose-languages';
import Settings from '~screens/app/settings';

const Stack = createNativeStackNavigator();
const navigationRef = createNavigationContainerRef();
const Routes = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  useEffect(() => {
    setTimeout(() => {
      RNBootSplash.hide({fade: true});
    }, 1000);
  }, []);
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator
        screenOptions={{
          animation: 'slide_from_right',
          headerShown: false,
          // header: ({navigation, route: {name}}) => (
          //   <Appbar.Header>
          //     {navigation.canGoBack() && (
          //       <Appbar.BackAction onPress={navigation.goBack} />
          //     )}
          //     <Appbar.Content title={name} />
          //   </Appbar.Header>
          // ),
        }}>
        <Stack.Screen name={ScreenNames.STARTUP} component={Startup} />
        <Stack.Screen name={ScreenNames.LOGIN} component={LoginScreen} />
        <Stack.Screen
          name={ScreenNames.FORGOT_PASSWORD}
          component={ForgotPasswordScreen}
        />
        <Stack.Screen name={ScreenNames.VERIFY} component={Verify} />
        <Stack.Screen name={ScreenNames.BOTTOM_TAB} component={BottomTab} />
        <Stack.Screen name={ScreenNames.SIGNUP} component={SIGNUP} />
        <Stack.Screen name={ScreenNames.HOME} component={Home} />
        <Stack.Screen name={ScreenNames.MATCH} component={Match} />
        <Stack.Screen name={ScreenNames.CHATING} component={Chating} />
        <Stack.Screen name={ScreenNames.PROFILE} component={Profile} />
        <Stack.Screen name={ScreenNames.EDIT_PROFILE} component={EditProfile} />
        <Stack.Screen name={ScreenNames.SETTINGS} component={Settings} />

        <Stack.Screen
          name={ScreenNames.BODY_TYPE_WOMAN}
          component={BodyTypeWoman}
        />
        <Stack.Screen
          name={ScreenNames.CHOOSE_LANGUAGE}
          component={ChooseLanguages}
        />

        <Stack.Screen
          name={ScreenNames.BODY_TYPE_MAN}
          component={BodyTypeManScreen}
        />

        <Stack.Screen
          name={ScreenNames.MATCH_PROFILE_DETAIL}
          component={MatchProfileDetail}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default Routes;
export {default as ScreenNames} from './routes';
