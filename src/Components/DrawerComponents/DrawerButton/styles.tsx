import {StyleSheet} from 'react-native';

import {vh} from '../../../Utils/units';
import themeColors from '../../../Utils/themeColors';

const styles = StyleSheet.create({
  container: {
    marginVertical: vh * 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconContainer: {
    height: vh * 5.1,
    width: vh * 5.1,
    borderRadius: (vh * 5.1) / 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconStyle: {
    height: vh * 2,
    width: vh * 2,
    resizeMode: 'contain',
  },
  titleStyle: {
    color: themeColors.black,
    fontSize: vh * 1.7,
  },
});
export default styles;
