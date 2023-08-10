import React, {useRef} from 'react';
import {View} from 'react-native';
import DrawerButton from '../DrawerButton';
import styles from './styles';
import {StackNavigationProp} from '@react-navigation/stack';
import {vh} from '../../../Utils/units';

const drawerRoutes = {
  GeneralFilterScreen: {
    title: 'Home',
  },
  CategoryScreen: {title: 'About Us'},
  AnimatedContactUsNavigator: {
    title: 'Contact Us',
  },
};

type DrawerRoutes = keyof typeof drawerRoutes;

const routeOrders: DrawerRoutes[] = ['GeneralFilterScreen', 'CategoryScreen'];

interface DrawerContentProps {
  navigation: StackNavigationProp<any, any>; // Update this with the appropriate navigation prop type
}

const DrawerContent: React.FC<DrawerContentProps> = ({navigation}) => {
  const handleOnDrawerItemPress = (routeName: DrawerRoutes) => {
    navigation.navigate(routeName);
  };

  return (
    <>
      <View
        style={{
          flexDirection: 'row',
          backgroundColor: 'red',
          height: vh * 10,
          width: vh * 20,
        }}>
        {/* Add any content related to the top section here */}
      </View>
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
    </>
  );
};

export default DrawerContent;
