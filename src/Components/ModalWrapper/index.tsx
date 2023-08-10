import React, { useState, forwardRef, useImperativeHandle } from 'react';
import { Modal, TouchableOpacity, View } from 'react-native';

import styles from './styles'; 

interface PopupWrapperProps {
  reference?: React.RefObject<PopupWrapperMethods>;
  mainContainerStyle?: any;  
  style?: any;  
  children: React.ReactNode;
}

export interface PopupWrapperMethods {
  hide: () => void;
  show: () => void;
}

const PopupWrapper: React.ForwardRefRenderFunction<PopupWrapperMethods, PopupWrapperProps> = (props, ref) => {
  const [visible, setVisible] = useState(false);

  const hide = () => {
    setVisible(false);
  };

  const show = () => {
    setVisible(true);
  };

  useImperativeHandle(props.reference, () => ({
    hide,
    show,
  }));

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      style={styles.modal}>
      <View style={[styles.mainContainer, props.mainContainerStyle]}>
        <TouchableOpacity
          onPress={hide}
          activeOpacity={0.9}
          style={styles.backdropContainer}>
        </TouchableOpacity>
        <View style={[styles.contentContainer, props.style]}>
          {props.children}
        </View>
      </View>
    </Modal>
  );
};

export default forwardRef(PopupWrapper);
