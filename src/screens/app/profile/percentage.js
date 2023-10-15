import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Svg, {Circle} from 'react-native-svg';
import {CustomText} from '~components';
import {width} from '~utils';
import AppColors from '~utils/AppColors';

export const CircularPercentageWithIcon = ({percentage, Icon, color}) => {
  console.log('aaaaaaaaa', percentage);
  const strokeWidth = 5;
  const radius = 22;
  const circumference = 2 * Math.PI * radius;

  const progressDegrees = (360 * percentage) / 100;

  const svgWidth = 2 * (radius + strokeWidth);
  const svgHeight = 2 * (radius + strokeWidth);
  const styles = StyleSheet.create({
    container: {
      alignItems: 'center',
    },
    iconContainer: {
      position: 'absolute',
      alignItems: 'center',
      backgroundColor: 'white',
      padding: width(1),
      alignSelf: 'center',
      borderRadius: width(8),
      justifyContent: 'center',
      top: width(3),
      width: width(9),
      height: width(9),
    },
  });
  return (
    <View style={styles.container}>
      <Svg height={svgHeight} width={svgWidth}>
        <Circle
          r={radius}
          cx={svgWidth / 2}
          cy={svgHeight / 2}
          fill="transparent"
          stroke={'transparent'}
          strokeWidth={strokeWidth}
        />
        <Circle
          r={radius}
          cx={svgWidth / 2}
          cy={svgHeight / 2}
          fill="transparent"
          stroke={AppColors.primaryPurple}
          strokeWidth={strokeWidth}
          strokeDasharray={`${circumference} ${circumference}`}
          strokeDashoffset={
            circumference - (progressDegrees / 360) * circumference
          }
        />
      </Svg>
      <View style={styles.iconContainer}>
        <CustomText color={AppColors.primaryPurple}>{percentage}%</CustomText>
      </View>
    </View>
  );
};
