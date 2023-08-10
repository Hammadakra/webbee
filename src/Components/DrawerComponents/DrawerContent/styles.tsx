import {StyleSheet} from 'react-native';
import {getStatusBarHeight} from 'react-native-safearea-height';
import themeColors from '../../../Utils/themeColors';
import {vh, vw} from '../../../Utils/units';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: getStatusBarHeight(),
    paddingLeft: vw * 5,
  },
  crossIconContainer: {
    height: vh * 3,
    width: vh * 3,
    marginTop: vh * 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  crossIconStyle: {
    height: vh * 1.8,
    width: vh * 1.8,
    resizeMode: 'contain',
  },
  innerContainer: {
    marginTop: vh * 5,
  },
  logoutBtn: {
    marginTop: vh * 5,
  },
  logoContainer: {
    height: vh * 18,
    width: vh * 18,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoStyle: {
    height: '80%',
    width: '80%',
    resizeMode: 'contain',
  },
  LeafCenterContainer: {
    position: 'absolute',
    height: vh * 15,
    width: vh * 15,
    top: vh * -5,
    right: vw * 10,
  },
  LeafCenter: {
    height: '100%',
    width: '100%',
    resizeMode: 'cover',
  },
  leafLeftContainer: {
    position: 'absolute',
    height: vh * 15,
    width: vh * 15,
    top: vh * -7,
    left: vw * -13.5,
  },
  leafLeft: {
    height: '100%',
    width: '100%',
    resizeMode: 'cover',
  },

  leafBlurContainer: {
    position: 'absolute',
    height: vh * 20,
    width: vh * 20,
    bottom: vh * 10,
    right: vw * 4,
  },
  leafBlur: {
    height: '100%',
    width: '100%',
    resizeMode: 'contain',
  },

  leafBottLeftDrawerContainer: {
    position: 'absolute',
    height: vh * 20,
    width: vh * 20,
    bottom: vh * -8,
    left: vw * -11,
  },
  leafBottLeftDrawer: {
    height: '100%',
    width: '100%',
    resizeMode: 'contain',
  },
  blur: {
    height: 100 * vh,
    width: 100 * vw,
  },
  titleStyle: {
    color: themeColors.black,
    fontSize: vh * 1.7,
  },
  bottonContainer: {
    position: 'absolute',
    bottom: vh * 8,
    width: vw * 30,
    marginLeft: vw * 10,
    // zIndex: -1,
    backgroundColor: 'red',
  },
});
export default styles;
