import React, {useState} from 'react';
import {View, Text, FlatList} from 'react-native';
import styles from './styles';
import {useDispatch, useSelector} from 'react-redux';
import {TextInput,Checkbox, Button} from 'react-native-paper';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import { ScrollView } from 'react-native-gesture-handler';
import { vh, vw } from '../../Utils/units';

 
const initialCategoryState = [
  {
    type: 'Category 1',
    initialTitle: 'Initial Title 1',
    titleField: 'Title Field 1',
    id: '1', // You can use a UUID or any unique identifier
    attribute: [
      { fieldType: 'Text', value: 'Attribute 1', id: 'attribute-1' },
      { fieldType: 'Checkbox', value: 'Attribute 2', id: 'attribute-2' },
      { fieldType: 'Check box', value: 'Attribute 5', id: 'attribute-6' },
      { fieldType: 'Text', value: 'Attribute 7', id: 'attribute-1' },
    ],
  },
  {
    type: 'Category 2',
    initialTitle: 'Initial Title 2',
    titleField: 'Title Field 2',
    id: '2', // You can use a UUID or any unique identifier
    attribute: [
      { fieldType: 'Date', value: 'Attribute 3', id: 'attribute-3' },
      { fieldType: 'Number', value: 'Attribute 4', id: 'attribute-4' },
      { fieldType: 'Check box', value: 'Attribute 5', id: 'attribute-6' },
      { fieldType: 'Text', value: 'Attribute 7', id: 'attribute-1' },
    ],
  },
  // Add more objects as needed
];
const GeneralFilterScreen: React.FC = () => {
  const storeCategory = useSelector(state => state.category);
  console.log(storeCategory,"==========s==================");
  const [datePicker, setDatePicker] = useState(false);
  const dispatch = useDispatch();
  const renderAttributes = (category:any, updateCategory:any) => {
    return category.attribute.map((attribute:any) => (
      attribute.fieldType !== 'Check box' ? (
        <TextInput
          contentStyle={styles.contentStyle}
          key={attribute.id}
          mode="outlined"
          placeholder={attribute.fieldType}
          // value={attribute.value}
          // editable={attribute.fieldType === 'Date' && false}
          onFocus={()=> attribute.fieldType === 'Date' && setDatePicker(true)}
          keyboardType={attribute.fieldType === 'Number' ? 'number-pad' : 'default'}
          onChangeText={text => {
            const updatedAttributes = category.attribute.map((attr:any) => {
              if (attr.id === attribute.id) {
                return { ...attr, value: text };
              }
              return attr;
            });
  
            const updatedCategory = { ...category, attribute: updatedAttributes };
            // updateCategory(updatedCategory);
          }}
        />
      ) : <Checkbox.Item
      label={attribute?.value}
      status={ 'checked'  }
      style={styles.checkbox}
      // onPress={handleCheckboxToggle}
    />
    ));
  };
  //  const renderItem=()=>{
  //   return (
  //     <View style={styles.container}>
  //   <TextInput
  //       placeholder="Hee"
  //       label="Category Name"
  //       mode="outlined"
  //       // value={currentItem?.type}
        
  //     /> 
      
  //       <View style={styles.rowContainer}>
  //         <Text style={styles.text}>Text</Text>
        
  //         <Icon name="delete" size={30} color="#900" />
  //       </View>
  //     </View>

       
  //   </View>
  //   )
  //  }
   const onChangeText=(categoryId:string)=>{
    const updatedCategories = initialCategoryState.map((cat:any) => {
      if (cat.id === categoryId) {
        const updatedAttribute = cat.attribute.map((attr:any) => {
          if (attr.id === attribute.id) {
            return { ...attr, value: text };
          }
          return attr;
        });
        return { ...cat, attribute: updatedAttribute };
      }
      return cat;
    });
   }
  return (
    <ScrollView contentContainerStyle={{flex:1,paddingHorizontal:vw*3,paddingBottom:vh*5}}>
{initialCategoryState.map(category => (
        <View key={category.id}>
          <Text>{category.type}</Text>
          {renderAttributes(category, updatedCategory => {
            const updatedCategories = categories.map(cat =>
              cat.id === updatedCategory.id ? updatedCategory : cat
            );
            // setCategories(updatedCategories);
          })}
        </View>
      ))}
      <DateTimePickerModal
        isVisible={datePicker}
        onCancel={() => setDatePicker(false)}
        // onConfirm={onFromDateSelected}
       
        date={new Date()}
      />
        <View style={styles.buttonMainContiner}>
        <Button
          mode="contained"
          
          style={[styles.buttonContiner]}>
          Add New Item
        </Button>
      </View>
      </ScrollView>
 
  );
};

export default GeneralFilterScreen;
