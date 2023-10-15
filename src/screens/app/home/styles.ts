import {StyleSheet} from 'react-native';
import {height, width} from '~utils';
import AppColors from '~utils/AppColors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FDF7FD',
    paddingVertical: height(2),
    height: height(100),
    paddingHorizontal: width(5),
  },
  back: {
    shadowColor: AppColors.white,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 1,
    height: height(63),
    marginVertical: width(2),
    backgroundColor: AppColors.white,
    width: width(80),
    alignSelf: 'center',
    borderRadius: width(8),
  },
  front: {
    shadowColor: AppColors.white,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 1,
    borderRadius: width(8),
    width: width(90),
    height: height(60),
    alignSelf: 'center',
    backgroundColor: AppColors.white,
  },
});
export default styles;
