import {StyleSheet} from 'react-native';
import themeColors, { shadow } from '../../Utils/themeColors';
import { vh, vw } from '../../Utils/units';
 
const styles = StyleSheet.create({
  modal: {
    flex: 1,
  },
  mainContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  backdropContainer: {
    height: 100 * vh,
    width: 100 * vw,
    position: 'absolute',
    top: 0,
    left: 0,
  },
  blur: {
    height: 100 * vh,
    width: 100 * vw,
  },
  contentContainer: {
    width: vw * 84.8,
    backgroundColor: themeColors.white,
    ...shadow,
  },
});
export default styles;
