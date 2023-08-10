import {StyleSheet} from 'react-native';
import {vh, vw} from '../../Utils/units';
import themeColors from '../../Utils/themeColors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  buttonMainContiner: {
    position: 'absolute',
    bottom: vh * 4,
    right: vw * 2,
  },
  buttonContiner: {
    height: vh * 6,
    width: vw * 50,
    backgroundColor: themeColors.primaryColor,
    borderRadius: vh * 3,
  },
  emptyScreenContiner:{
    alignItems:"center"
  },
  emptyText:{
    color:themeColors.black,
    fontSize:vh*2,
    marginVertical: vh*2,
    fontWeight:'bold'
  }
});

export default styles;
