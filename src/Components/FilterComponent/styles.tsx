import {StyleSheet} from 'react-native';
import {vh, vw} from '../../Utils/units';
import themeColors from '../../Utils/themeColors';
// import { transparent } from "react-native-paper/lib/typescript/styles/themes/v2/colors";

const styles = StyleSheet.create({
  container: {
    width: '90%',
    alignSelf: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  containerTablet: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  machineType: {
    fontSize: vh * 2,
    fontWeight: 'bold',
    marginBottom: 5,
    color: 'black',
  },
  attributeContainer: {
    marginLeft: vw * 2,
  },
  attributeItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 3,
  },
  attributeName: {
    fontWeight: 'bold',
    marginRight: 5,
    color: 'black',
  },

  contentStyle: {
    width: vw * 50,
  },
  buttonRowContainer: {
    marginTop: vh * 2,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  buttonContiner: {
    height: vh * 6,
    width: vw * 36,
    borderRadius: vh * 3,
    marginRight: vw * 1,
    borderWidth: 1,
  },
  titleFieldButton:{
    marginTop: vh*1,
backgroundColor:themeColors.primaryColor
  },
  textStyle: {
    color: 'black',
  },
  rowContainer: {
    flexDirection: 'row',

    alignItems: 'center',
  },
  fieldStyle: {
    width: vw * 30,
  },
  text:{
    marginHorizontal:   vw*3,
    fontSize:vh*2,
    color:'black'
  }
});

export default styles;
