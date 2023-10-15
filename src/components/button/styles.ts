import {StyleSheet} from 'react-native';
import AppColors from '~utils/AppColors';
import {height, width} from '~utils';
import {FontFamily} from '~utils/Fontfamily';
const styles = StyleSheet.create({
  container: {
    width: width(80),
    borderRadius: width(100),
    paddingVertical: height(1.5),
    paddingHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  primaryContainer: {
    backgroundColor: AppColors.primaryPurple,
  },
  yellowContainer: {
    backgroundColor: AppColors.yellow,
  },
  redContainer: {
    backgroundColor: AppColors.red,
  },
  orangeContainer: {
    backgroundColor: AppColors.black,
  },
  disabledContainer: {
    backgroundColor: AppColors.grey,
  },
  primaryText: {
    color: 'white',
    fontSize: width(4.5),
    textAlign: 'center',
    fontFamily: FontFamily.appFontSemiBold,
  },
  icon: {
    backgroundColor: 'white',
    borderRadius: width(100),
    padding: width(2),
    width: width(12),
    height: width(12),
    marginRight: width(3),
    alignItems: 'center',
    justifyContent: 'center',
  },
  selectContainer: {
    marginTop: width(2),
    paddingHorizontal: width(2),
    height: height(6.5),
    width: width(90),
    alignSelf: 'center',
    borderWidth: width(0.3),
    borderColor: AppColors.primaryPurple,
    borderRadius: width(5),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  leftIcon: {
    width: width(8),
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    left: width(1),
  },
  btnIconContainer: {
    justifyContent: 'space-evenly',
    alignItems: 'center',
    borderRadius: width(2),
    backgroundColor: AppColors.black,
    height: height(6),
    minWidth: width(35),
    paddingHorizontal: width(3),
    alignSelf: 'center',
    flexDirection: 'row',
  },
  iconStyle: {
    resizeMode: 'contain',
    tintColor: AppColors.black,
    height: height(6),
    width: width(4),
  },
  circleContainer: {
    height: width(25),
    width: width(25),
    backgroundColor: AppColors.lightBlue,
    borderRadius: width(100),
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default styles;
