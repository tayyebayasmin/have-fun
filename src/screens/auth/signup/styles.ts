import {StyleSheet} from 'react-native';
import {height, width} from '~utils';
import AppColors from '~utils/AppColors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: AppColors.background,
    paddingVertical: height(5),
    height: height(100),
    paddingHorizontal: width(2),
  },

  login: {
    marginTop: width(80),
  },
  text: {
    color: AppColors.primaryPurple,
  },
  progressBG: {
    width: width(90),
    alignSelf: 'center',
    height: width(2),
    backgroundColor: '#DEE2E6',
    borderRadius: width(8),
    marginBottom: width(2),
  },
  select: {
    alignSelf: 'flex-end',
    marginRight: width(3),
    position: 'absolute',
    top: width(2),
    right: 1,
  },
  skinColor: {
    marginRight: width(5),
    marginTop: width(5),
    width: width(30),
    height: width(28),
    alignItems: 'center',
    justifyContent: 'flex-end',
    borderRadius: width(5),
  },
  bg: {
    backgroundColor: 'white',
    height: width(35),
    width: width(35),
    borderRadius: width(5),
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {width: width(80), alignSelf: 'center', marginTop: width(8)},
  gender: {
    backgroundColor: AppColors.primaryPurple,
    width: width(15),
    height: width(15),
    borderRadius: width(100),
    alignItems: 'center',
    justifyContent: 'center',
  },
  genderWomen: {
    backgroundColor: AppColors.primary,
    width: width(15),
    height: width(15),
    borderRadius: width(100),
    alignItems: 'center',
    justifyContent: 'center',
  },
  next: {
    backgroundColor: AppColors.primaryPurple,
    width: width(15),
    height: width(15),
    borderRadius: width(100),
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'flex-end',
  },
  progress: {
    height: width(2),
    backgroundColor: AppColors.primary,
    borderRadius: width(8),
  },
  btm: {
    alignSelf: 'center',
    position: 'absolute',
    bottom: width(10),
  },
  input: {
    marginTop: width(5),
    borderRadius: width(7),
    width: width(80),
    height: width(18),
    alignSelf: 'center',
  },
});
export default styles;
