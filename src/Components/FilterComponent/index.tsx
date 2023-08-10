import React, {useRef} from 'react';
import {View, Text} from 'react-native';
import styles from './styles';
import {TextInput} from 'react-native-paper';
import DropdownModal, {DropDownMethods} from '../DropdownModal';
import Icon from 'react-native-vector-icons/AntDesign';

interface MachineProps {
  item: object;
}

const FilterComponent: React.FC<MachineProps> = ({item}) => {
  const dropDownRef = useRef<DropDownMethods>(null);
  console.log(item?.attribute[0]?.fieldType, 'ITEM');

  const openDropDown = () => {
    if (dropDownRef.current) {
      dropDownRef.current.show();
    }
  };

  return (
    <View style={styles.container}>
      {item?.attribute[0]?.fieldType == 'Date' && (
        <TextInput
          placeholder="Hee"
          label="Category Name"
          mode="outlined"
          // value={currentItem?.type}
        />
      )}
      <View style={styles.rowContainer}>
        <TextInput
          placeholder="Field"
          label="Field"
          contentStyle={styles.contentStyle}
          mode="outlined"
          // onChangeText={text => onChangeText(text,item?.id,"initalTitle")}
        />
        <View style={styles.rowContainer}>
          <Text style={styles.text}>Text</Text>

          <Icon name="delete" size={30} color="#900" />
        </View>
      </View>
    </View>
  );
};

export default FilterComponent;
