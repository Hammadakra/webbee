import React, {useRef, useState} from 'react';
import {View, Text, FlatList, TouchableOpacity} from 'react-native';
import styles from './styles';
import Input from '../Input';
// import Button from '../Button';
import {TextInput} from 'react-native-paper';
import {Button} from 'react-native-paper';
import themeColors from '../../Utils/themeColors';
import DropdownModal, {DropDownMethods} from '../DropdownModal';
import Icon from 'react-native-vector-icons/AntDesign';

interface MachineProps {
  item: object;
  onAddNewFieldClick: (filedType: string, id: any) => void;
  setCurrentId: (id: any) => void;
  onChangeText: (text: any, id: string, field: string) => void;
  removeAttribute: (itemid: string, attributeId: string) => void;
  removeCategory: (id: string) => void;
  setCategory: (category: any) => void;
  onChangeTextAttribute: (
    text: string,
    attributeId: string,
    itemId: string,
  ) => void;

  // attributes: Record<string, string | number | boolean | Date>;
}

const MachineComponent: React.FC<MachineProps> = ({
  item,
  onAddNewFieldClick,
  setCurrentId,
  onChangeText,
  removeAttribute,
  removeCategory,
  setCategory,
  onChangeTextAttribute,
}) => {
  const dropDownRef = useRef<DropDownMethods>(null);

  const titleChangeRef = useRef<DropDownMethods>(null);

  const [currentItem, setCurrentItem] = useState(item);
  // console.log(item, 'ITEM');

  const openDropDown = () => {
    if (dropDownRef.current) {
      dropDownRef.current.show();
    }
  };
  const openTitleDropDown = () => {
    if (titleChangeRef.current) {
      titleChangeRef.current.show();
    }
  };

  const closeDropDown = () => {
    if (dropDownRef.current) {
      dropDownRef.current.hide();
    }
  };

  const renderItem = ({item}) => {
    return (
      <View style={styles.rowContainer}>
        <TextInput
          placeholder="Field"
          label="Field"
          contentStyle={styles.contentStyle}
          mode="outlined"
          defaultValue={item?.fieldTitle}
          onChangeText={text => {
            onChangeTextAttribute(text, item?.id, currentItem?.id);
            onChangeText(text, currentItem?.id, 'initalTitle');
          }}
        />
        <View style={styles.rowContainer}>
          <Text style={styles.text}>{item?.value}</Text>
          <TouchableOpacity
            onPress={() => removeAttribute(currentItem?.id, item?.id)}>
            <Icon name="delete" size={30} color="#900" />
          </TouchableOpacity>
        </View>
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <Text>{item?.type}</Text>
      <TextInput
        placeholder="Hee"
        label="Category Name"
        mode="outlined"
        defaultValue={currentItem?.type}
        onChangeText={text => {
          onChangeText(text, item?.id, 'type');
        }}
      />
      <View style={styles.rowContainer}>
        <TextInput
          placeholder="Field"
          label="Field"
          contentStyle={styles.contentStyle}
          mode="outlined"
          onChangeText={text => onChangeText(text, item?.id, 'initalTitle')}
        />
        <View style={styles.rowContainer}>
          <Text style={styles.text}>Text</Text>

          <Icon name="delete" size={30} color="#900" />
        </View>
      </View>
      <FlatList
        data={item?.attribute}
        showsVerticalScrollIndicator={false}
        renderItem={item => renderItem(item)}
        horizontal={false}
        // ListEmptyComponent={() => renderEmptyComp()}
      />
      

      <Button
        textColor={themeColors.white}
        mode="outlined"
        onPress={() => titleChangeRef.current.show()}
        style={styles.titleFieldButton}>
        Title field {item?.initalTitle}
      </Button>
      <View style={styles.buttonRowContainer}>
        <Button
          mode="outlined"
          onPress={() => {
            openDropDown();
            setCurrentId(item?.id);
          }}
          style={styles.buttonContiner}>
          Add new Field
        </Button>
        <Button
     
          mode="contained"
          onPress={() => removeCategory(item?.id)}
          style={[
            styles.buttonContiner,
            {backgroundColor: themeColors.primaryColor},
          ]}>
          Remove
        </Button>
      </View>
      <DropdownModal
        reference={dropDownRef}
        title="Select an Item"
        data={['Text', 'Check box', 'Date', 'Number', '']}
        onChangeValue={item => onAddNewFieldClick(item)}
      />
      <DropdownModal
        reference={titleChangeRef}
        title="Select an Title"
        data={item?.attribute}
        titleField={true}
        onChangeValue={(text, id, title) => {
          onChangeText(text, item?.id, 'initalTitle');
        }}
      />
    </View>
  );
};

export default MachineComponent;
