import {StyleSheet} from 'react-native';
import {height, width} from '~utils';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: height(100),
    backgroundColor: 'white',
    paddingVertical: height(5),
  },
  row: {
    flexDirection: 'row',
    alignSelf: 'center',
    marginTop: width(5),
  },
  image: {
    width: width(100),
    height: height(50),
  },
  containerinner: {
    width: width(80),
    alignSelf: 'center',
  },
  btn: {
    marginVertical: width(8),
    width: width(80),
    borderRadius: width(100),
  },
});
export default styles;
