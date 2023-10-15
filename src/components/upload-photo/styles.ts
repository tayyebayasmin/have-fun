import {StyleSheet} from 'react-native';
import {width} from '~utils';
import AppColors from '~utils/AppColors';
const styles = StyleSheet.create({
  container: {
    width: width(100),
    flex: 1,
  },
  avatarContainer: {
    alignSelf: 'center',
    width: width(55),
    height: width(55),
    borderRadius: width(5),
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: width(2),
    paddingHorizontal: width(3),
    marginHorizontal: width(2),
    alignSelf: 'center',
    marginVertical: width(1.5),
    borderRadius: width(5),
    borderColor: AppColors.gray,
    borderWidth: width(0.4),
  },
});
export default styles;
