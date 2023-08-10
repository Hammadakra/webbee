import react from 'react';
import {StyleSheet} from 'react-native';
import {vh, vw} from '../../Utils/units';

const styles = StyleSheet.create({
  modal: {
    flex: 1,
    borderRadius: 90,
    padding: 35,
    alignItems: 'center',
    backgroundColor: 'red',
  },
  mainContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },

  innerContainer: {
    backgroundColor: 'white',
    borderRadius: 10,
    maxHeight: vh * 80,
    width: '85%',
  },
  heading: {
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: vh * 3,
  },
  headingText: {
    color: 'black',
    fontSize: vh * 2.5,
  },
  itemStyle: {
    color: 'black',
  },
});
export default styles;
