import {StyleSheet} from 'react-native';
import {height, width} from '~utils';
import AppColors from '~utils/AppColors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: AppColors.background,
    paddingVertical: height(5),
    height: height(100),
    paddingHorizontal: width(7),
  },
  row: {
    flexDirection: 'row',
    alignSelf: 'center',
    marginTop: width(5),
  },
  btn: {
    backgroundColor: AppColors.white,
    marginVertical: width(2),
  },
  login: {
    marginTop: width(42),
  },
  text: {
    color: AppColors.primaryPurple,
  },
  input: {
    borderColor: AppColors.primary,
    borderWidth: width(0.3),
    marginTop: width(5),
    borderRadius: width(7),
    width: width(80),
    height: width(18),
    alignSelf: 'center',
  },
  textinput: {
    borderRadius: width(7),
  },
});
export default styles;
