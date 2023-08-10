import React, {useImperativeHandle, useRef, useState} from 'react';
import {View, Modal, Text, TouchableOpacity, FlatList} from 'react-native';
import PopupWrapper, {PopupWrapperMethods} from '../ModalWrapper'; // Update the import path
import styles from './styles'; // Make sure you import your styles properly
import {vh} from '../../Utils/units';

interface SuccessPopupProps {
  reference?: React.RefObject<PopupWrapperMethods>;
  image: any; // Update with appropriate type
  heading: string;
  text: string;
  btnText: string;
  onPress?: () => void;
  data: Array<{}>;
  onChangeValue: (arg: any) => void;
  title: string;
  titleField: boolean;
}

const DropdownModal: React.FC<SuccessPopupProps> = props => {
  const modalRef = useRef<PopupWrapperMethods | null>(null);
  // console.log(props.data,"ASDAS");
  const [visible, setVisible] = useState(false);
  useImperativeHandle(props?.reference, () => ({
    hide: hide,
    show: show,
  }));

  const show = () => {
    modalRef?.current?.show();
    setVisible(true);
  };

  const hide = () => {
    modalRef?.current?.hide();
    setVisible(false);
  };

  const onSuccess = () => {
    hide();
    typeof props.onPress === 'function' && props.onPress();
  };
  const renderItem = ({item}) => {
    return (
      <TouchableOpacity
        style={{
          height: vh * 6,
          marginLeft: vh * 1.5,
        }}
        onPress={() => {
          props.onChangeValue(item);
          setVisible(false);
        }}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text style={styles.itemStyle}> {item} </Text>
        </View>
      </TouchableOpacity>
    );
  };
  const titleRender = ({item}) => {
    // console.log(item, 'item in drop title');
    return (
      <TouchableOpacity
        style={{
          height: vh * 6,
          marginLeft: vh * 1.5,
        }}
        onPress={() => {
          props.onChangeValue(item?.fieldTitle);
          setVisible(false);
        }}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text style={styles.itemStyle}> {item?.fieldTitle}</Text>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={visible}
      onRequestClose={() => setVisible(false)}
      style={styles.modal}>
      <TouchableOpacity
        style={styles.mainContainer}
        onPress={() => setVisible(false)}>
        <View style={styles.innerContainer}>
          <View style={styles.heading}>
            <Text style={styles.headingText}>{props.title}</Text>
          </View>
          <FlatList
            data={props.data}
            showsVerticalScrollIndicator={false}
            renderItem={item =>
              props?.titleField ? titleRender(item) : renderItem(item)
            }
            horizontal={false}
            // ListEmptyComponent={() => renderEmptyComp()}
          />
        </View>
      </TouchableOpacity>
 
    </Modal>
  );
};

export default DropdownModal;
