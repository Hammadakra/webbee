import React, {useState} from 'react';
import {View, Text, FlatList} from 'react-native';
import styles from './styles';
import LandscapeComponent from '../../Components/LandscapeWrapper/indes';
import MachineComponent from '../../Components/Machine';
import {Button} from 'react-native-paper';
import themeColors from '../../Utils/themeColors';
import {useDispatch, useSelector} from 'react-redux';
import {addCategory} from '../../Store/CategorySlice';
import uuid from 'react-native-uuid';

const CategoryScreen: React.FC = () => {
  const storeCategory = useSelector(state => state.category?.category);
  const dispatch = useDispatch();
  console.log(storeCategory, 'storeCsategory');

  const [category, setCategory] = useState([]);
  const [currentId, setCurrentId] = useState();
  const addCategoryClick = () => {
    const newParameter = {
      type: 'New Categroy',
      initalTitle: 'unNamed',
      titleField: 'unNamed',
      id: uuid.v4(),
      attribute: [],
    };
    setCategory([...category, newParameter]);
    dispatch(addCategory([...category, newParameter]));
  };

  const onAddNewFieldClick = (inputType, id) => {
    const targetIndex = category.findIndex(item => item.id === currentId);

    if (targetIndex !== -1) {
      const existingAttribute = category[targetIndex].attribute.find(
        attr => attr.value === inputType,
      );

      if (!existingAttribute) {
        const newAttribute = {
          fieldTitle: 'NewField',
          value: inputType,
          id: uuid.v4(),
        };

        const updatedAttributes = [
          ...(category[targetIndex].attribute || []),
          newAttribute,
        ];

        const updatedCategory = [...category];
        updatedCategory[targetIndex].attribute = updatedAttributes;

        setCategory(JSON.parse(JSON.stringify(updatedCategory)));
        dispatch(
          addCategory([
            ...category,
            JSON.parse(JSON.stringify(updatedCategory)),
          ]),
        );
      } else {
        console.log('Attribute with the same value already exists.');
      }
    }
  };
  const removeAttribute = (itemId, attributeId) => {
    console.log(itemId, attributeId);

    const updatedCategory = category.map(item => {
      if (item.id === itemId) {
        const updatedAttributes = item.attribute.filter(
          attr => attr.id !== attributeId,
        );
        return {...item, attribute: updatedAttributes};
      }
      return item;
    });

    setCategory(updatedCategory);
    dispatch(addCategory(updatedCategory));
  };
  const removeCategory = itemId => {
    const updatedCategory = category.filter(item => item.id !== itemId);
    dispatch(addCategory(updatedCategory));
  };
  const onChangeCategory = (text, id) => {
    // console.log( id,"text");
    const allCategory = category;
    const updatedCategory = allCategory.map(item => {
      if (item.id === id) {
        return {...item, type: text};
      }
      return item;
    });
    setCategory(updatedCategory);
  };
  const onChangeTextAttribute = (text, attributeId, itemId) => {
    const updatedCategory = category.map(item => {
      if (item.id === itemId) {
        const updatedAttributes = item.attribute.map(attr => {
          if (attr.id === attributeId) {
            return {...attr, fieldTitle: text};
          }
          return attr;
        });
        return {...item, attribute: updatedAttributes};
      }
      return item;
    });
    console.log(updatedCategory[1].attribute, 'ITEM');
    dispatch(addCategory(updatedCategory));
  };
  return (
    <View style={styles.container}>
      <FlatList
        data={category}
        renderItem={({item}) => (
          <MachineComponent
            // type={item.type} attributes={item.attributes}
            item={item}
            onAddNewFieldClick={(filedType, id) =>
              onAddNewFieldClick(filedType, id)
            }
            setCurrentId={setCurrentId}
            onChangeText={(text, id) => onChangeCategory(text, id)}
            removeAttribute={(itemid, attributeId) =>
              removeAttribute(itemid, attributeId)
            }
            removeCategory={id => removeCategory(id)}
            setCategory={setCategory}
            onChangeTextAttribute={(text, attributeId, itemid) =>
              onChangeTextAttribute(text, attributeId, itemid)
            }
          />
        )}
        keyExtractor={item => item.type}
        contentContainerStyle={styles.listContainer}
      />
      <View style={styles.buttonMainContiner}>
        <Button
          mode="contained"
          onPress={() => addCategoryClick()}
          style={[styles.buttonContiner]}>
          Add Category
        </Button>
      </View>
    </View>
  );
};

export default CategoryScreen;
