import {StyleSheet} from 'react-native';

import {vh} from '../../../Utils/units';
import themeColors from '../../../Utils/themeColors';

const styles = StyleSheet.create({
  container: {
    marginVertical: vh * 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  
  titleStyle: {
    color: themeColors.white,
    fontSize: vh * 2.7,
  },
});
export default styles;
