import React, {useState} from 'react';
import {View, Text, RefreshControl, FlatList} from 'react-native';
import styles from './styles';
import MachineComponent from '../../Components/Machine';
import {Button} from 'react-native-paper';
import {useDispatch, useSelector} from 'react-redux';
import {addCategory} from '../../Store/CategorySlice';
import uuid from 'react-native-uuid';
import {useIsFocused} from '@react-navigation/native';

const CategoryScreen: React.FC = props => {
  const storeCategory = useSelector(
    state => state.category?.catergory?.catergory,
  );
  const dispatch = useDispatch();
  const isFocused = useIsFocused();
  const [refreshing, setRefreshing] = useState(false);
  const [category, setCategory] = useState(
    storeCategory?.length > 0 ? storeCategory : [],
  );
  const [currentId, setCurrentId] = useState();

  React.useEffect(() => {
    if (isFocused) {
      setCategory(storeCategory?.length > 0 ? storeCategory : []);
    }
  }, [isFocused]);

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
  const onRefresh = async () => {
    setRefreshing(true);
    setTimeout(() => {
      setCategory(storeCategory?.length > 0 ? storeCategory : []);
      setRefreshing(false);
    }, 1000);
  };
  return (
    <View style={styles.container}>
      {category?.length > 0 ? (
        <FlatList
          data={category}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
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
      ) : (
        <View style={styles.emptyScreenContiner}>
          <Text style={styles.emptyText}>No Category Exist</Text>
          <Button
            mode="contained"
            onPress={() => props.navigation.navigate('CategoryScreen')}
            style={[styles.buttonContiner]}>
            Add Category
          </Button>
        </View>
      )}
    </View>
  );
};

export default CategoryScreen;
