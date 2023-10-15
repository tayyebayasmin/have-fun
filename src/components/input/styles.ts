import {Platform, StyleSheet} from 'react-native';
import {height} from '~utils';
import AppColors from '~utils/AppColors';
import {width} from '~utils';
import {FontFamily} from '~utils/Fontfamily';
const styles = StyleSheet.create({
  container: {
    alignSelf: 'center',
    width: width(80),
  },
  innerContainer: {
    width: width(80),
    borderWidth: width(0.4),
    borderColor: AppColors.primary,
    borderRadius: width(3),
    paddingHorizontal: width(1.8),
    paddingTop: width(0.5),
    backgroundColor: AppColors.white,
    height: Platform?.OS === 'ios' ? height(5.5) : height(7),
    justifyContent: 'center',
  },
  inputStyle: {
    fontFamily: FontFamily.appFontMedium,
    color: AppColors.black,
    fontSize: width(3.5),
    justifyContent: 'center',
    height: Platform?.OS === 'ios' ? height(5.5) : height(7),
  },
  title: {
    left: width(1),
    marginBottom: width(2),
  },
});

export default styles;
