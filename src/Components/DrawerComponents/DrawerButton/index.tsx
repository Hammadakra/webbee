import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import styles from './styles';

const DrawerButton = (props: any) => {
  return (
    <TouchableOpacity style={styles.container} onPress={props?.onPress}>
      <Text style={styles.titleStyle}>
        {'   '}
        {props?.title}
      </Text>
    </TouchableOpacity>
  );
};
export default DrawerButton;
