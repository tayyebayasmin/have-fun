import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import * as React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import {Icons} from '~assets/images';
import {CustomText} from '~components';
import ScreenNames from '../routes';
import AppColors from '~utils/AppColors';
import {height, width} from '~utils';
import {FontFamily} from '~utils/Fontfamily';
import Home from '~screens/app/home';
import Matches from '~screens/app/matches';
import Chat from '~screens/app/chat';
import Profile from '~screens/app/profile';

const Tab = createBottomTabNavigator();

const Stack = createStackNavigator();
export default function BottomTab() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: AppColors.white,
          height: height(10),
          width: width(95),
          alignSelf: 'center',
          marginBottom: width(4),
          borderRadius: width(100),
          paddingTop: height(0.5),
        },
      }}>
      <Tab.Screen
        name={ScreenNames.HOME}
        component={Home}
        options={() => ({
          tabBarIcon: ({color, focused}) => (
            <View
              style={[
                styles.tabView,
                {
                  backgroundColor: focused
                    ? AppColors.primary
                    : AppColors.white,
                  borderRadius: width(100),
                  padding: width(3),
                  alignItems: 'center',
                  justifyContent: 'center',
                },
              ]}>
              <Image
                source={Icons.home}
                style={[
                  styles.iconStyle,
                  {tintColor: focused ? AppColors.white : AppColors.black30},
                ]}
              />
            </View>
          ),
        })}
      />
      <Tab.Screen
        name={ScreenNames.PROFILE}
        component={Profile}
        options={() => ({
          tabBarIcon: ({color, focused}) => (
            <View
              style={[
                styles.tabView,
                {
                  backgroundColor: focused
                    ? AppColors.primary
                    : AppColors.white,
                  borderRadius: width(100),
                  padding: width(3),
                  alignItems: 'center',
                  justifyContent: 'center',
                },
              ]}>
              <Image
                source={Icons.plus1}
                style={[
                  styles.iconStyle,
                  {tintColor: focused ? AppColors.white : AppColors.black30},
                ]}
              />
            </View>
          ),
        })}
      />
      <Tab.Screen
        name={ScreenNames.MATCHES}
        component={Matches}
        options={() => ({
          tabBarIcon: ({color, focused}) => (
            <View
              style={[
                styles.tabView,
                {
                  backgroundColor: focused
                    ? AppColors.primary
                    : AppColors.white,
                  borderRadius: width(100),
                  padding: width(3),
                  alignItems: 'center',
                  justifyContent: 'center',
                },
              ]}>
              <Image
                source={Icons.matches}
                style={[
                  styles.iconStyle,
                  {tintColor: focused ? AppColors.white : AppColors.black30},
                ]}
              />
            </View>
          ),
        })}
      />
      <Tab.Screen
        name={ScreenNames.CHAT}
        component={Chat}
        options={() => ({
          tabBarIcon: ({color, focused}) => (
            <View
              style={[
                styles.tabView,
                {
                  backgroundColor: focused
                    ? AppColors.primary
                    : AppColors.white,
                  borderRadius: width(100),
                  padding: width(3),
                  alignItems: 'center',
                  justifyContent: 'center',
                },
              ]}>
              <Image
                source={Icons.chat}
                style={[
                  styles.iconStyle,
                  {tintColor: focused ? AppColors.white : AppColors.black30},
                ]}
              />
            </View>
          ),
        })}
      />
    </Tab.Navigator>
  );
}
const styles = StyleSheet.create({
  iconStyle: {
    resizeMode: 'contain',
    width: width(6),
    height: height(3),
    tintColor: AppColors.black,
  },
  tabView: {
    alignItems: 'center',
  },
  focusedBarStyle: {
    height: height(0.4),
    width: width(12),
    backgroundColor: AppColors.purple,
    borderBottomEndRadius: width(4),
    borderBottomStartRadius: width(4),
    marginTop: height(0.5),
  },
  barStyle: {
    height: height(0.4),
    width: width(12),
    backgroundColor: AppColors.transparent,
    borderBottomEndRadius: width(4),
    borderBottomStartRadius: width(4),
    marginTop: height(0.5),
  },
  badge: {
    position: 'absolute',
    backgroundColor: AppColors.red,
    zIndex: 10,
    right: width(4),
    top: -height(0.8),
    borderRadius: width(10),
    width: height(2.5),
    height: height(2.5),
    alignItems: 'center',
    justifyContent: 'center',
  },
  badgeText: {
    fontSize: width(3),
    color: AppColors.white,
    fontFamily: FontFamily.appFontBold,
  },
});
