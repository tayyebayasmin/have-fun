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

  login: {
    marginTop: width(80),
  },
  text: {
    color: AppColors.primaryPurple,
  },
  input: {
    marginTop: width(5),
    borderRadius: width(7),
    width: width(80),
    height: width(18),
    alignSelf: 'center',
  },
  textinput: {
    borderRadius: width(7),
  },
  otpView: {
    width: width(60),
    height: height(8),
    marginTop: height(3),
  },
  otpContainer: {
    width: width(60),
    height: height(8),
    alignSelf: 'center',
    flexDirection: 'row',
    marginTop: height(2),
    marginBottom: height(4),
  },
  underlineStyleBase: {
    borderColor: AppColors.primary,
    borderBottomColor: AppColors.black80,
    borderBottomWidth: 2.5,
    borderWidth: 1,
    padding: 1,
    backgroundColor: AppColors.white,
    paddingVertical: 0,
    textAlignVertical: 'center',
    borderRadius: 1,
    width: width(10.3),
    height: height(6.5),
    fontSize: height(2.55),
    color: AppColors.black,
  },
});
export default styles;
