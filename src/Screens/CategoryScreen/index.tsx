import React, {useState} from 'react';
import {View, Text,RefreshControl, FlatList} from 'react-native';
import uuid from 'react-native-uuid';
import {Button} from 'react-native-paper';
import {useDispatch, useSelector} from 'react-redux';
import styles from './styles';
import MachineComponent from '../../Components/Machine';
import {addCategory} from '../../Store/CategorySlice';

const CategoryScreen: React.FC = props => {
  const storeCategory = useSelector(state => state.category?.catergory?.catergory);

  const dispatch = useDispatch();

  const [category, setCategory] = useState(storeCategory?.length > 0 ? storeCategory : []);
  const [currentId, setCurrentId] = useState();
  const [refreshing, setRefreshing] = useState(false);
  React.useEffect(() => {
    const unsubscribe = props.navigation.addListener('focus', () => {
    });

    return unsubscribe;
  }, [props.navigation, category]);
  const addCategoryClick = () => {
    const newParameter = {
      type: 'New Categroy',
      initalTitle: 'unNamed',
      titleField: 'unNamed',
      id: uuid.v4(),
      attribute: [],
    };
    setCategory([...category, newParameter]);
    dispatch(addCategory({catergory: [...category, newParameter]}));
  };

  const onAddNewFieldClick = (inputType: string, id: string) => {
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
        dispatch(addCategory([...storeCategory,JSON.parse(JSON.stringify(updatedCategory))]));
      }
    }
  };
  const removeAttribute = (itemId: string, attributeId: string) => {
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
  const removeCategory = (itemId: string) => {
    const updatedCategory = category.filter(item => item.id !== itemId);
    dispatch(addCategory(updatedCategory));
    setCategory(updatedCategory);
  };
  const onChangeCategory = (text: string, id: string, type: string) => {
    console.log(type, 'text');
    const allCategory = category;
    const updatedCategory = allCategory.map(item => {
      if (item.id === id) {
        return {...item, [type]: text};
      }
      return item;
    });
    setCategory(JSON.parse(JSON.stringify(updatedCategory)));
  };
  const onChangeTextAttribute = (
    text: string,
    attributeId: string,
    itemId: string,
  ) => {
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
    setCategory(updatedCategory);
    dispatch(addCategory([...storeCategory,updatedCategory]));
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
      {category?.length > 0 ? <FlatList
        data={category}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
        renderItem={({item}) => (
          <MachineComponent
            item={item}
            onAddNewFieldClick={(filedType, id) =>
              onAddNewFieldClick(filedType, id)
            }
            setCurrentId={setCurrentId}
            onChangeText={(text, id, type) => onChangeCategory(text, id, type)}
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
      />: <View style={styles.emptyScreenContiner}>
      <Text style={styles.emptyText}>
        No Category Exist
      </Text>
      
      </View>}
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
