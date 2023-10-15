import {StyleSheet} from 'react-native';
import AppColors from '~utils/AppColors';
import {height, width} from '~utils';
import {FontFamily} from '~utils/Fontfamily';
const styles = StyleSheet.create({
  container: {
    width: width(15),
    height: width(15),
    borderRadius: width(100),
    paddingVertical: height(1.5),
    paddingHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: AppColors.white,
    borderColor: AppColors.primaryPurple,
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
});

export default styles;
