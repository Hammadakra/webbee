import React, {useRef} from 'react';
import {View} from 'react-native';
import DrawerButton from '../DrawerButton';
import styles from './styles';
import {StackNavigationProp} from '@react-navigation/stack';
import {vh} from '../../../Utils/units';
import { useSelector } from 'react-redux';

const drawerRoutes = {
  DashboardScreen: {
    title: 'Dashboard',
  },
  CategoryScreen: {title: 'Category'},
   
  GeneralFilterScreen: {title: 'Filter'},
   
};

type DrawerRoutes = keyof typeof drawerRoutes;

const routeOrders: DrawerRoutes[] = ['DashboardScreen', 'CategoryScreen','GeneralFilterScreen'];

interface DrawerContentProps {
  navigation: StackNavigationProp<any, any>; // Update this with the appropriate navigation prop type
}

const DrawerContent: React.FC<DrawerContentProps> = ({navigation}) => {
  const storeCategory = useSelector(state => state.category?.catergory?.catergory);
  console.log(storeCategory,"storeCategorystoreCategory");
  
  const handleOnDrawerItemPress = (routeName: DrawerRoutes) => {
    navigation.navigate(routeName);
  };

  return (
    <View style={{backgroundColor:'gray',flex:1}}>
     
      <View style={styles.container}>
        <View style={styles.innerContainer}>
          {routeOrders.map(item => {
            return (
              <View key={item}>
                <DrawerButton
                  title={drawerRoutes[item]?.title}
                  onPress={() => handleOnDrawerItemPress(item)}
                />
              </View>
            );
          })}
        </View>
      </View>
    </View>
  );
};

export default DrawerContent;
