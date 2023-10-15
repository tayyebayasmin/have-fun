import {StyleSheet} from 'react-native';
import {height, width} from '~utils';
import AppColors from '~utils/AppColors';
const styles = StyleSheet.create({
  modalContainer: {
    justifyContent: 'flex-end',
    padding: 0,
    margin: 0,
  },

  modalInnerContainer: {
    backgroundColor: AppColors.white,
    borderTopRightRadius: width(4),
    borderTopLeftRadius: width(4),
    paddingVertical: height(1),
    alignItems: 'center',
  },
});
export default styles;
