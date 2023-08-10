import React from 'react';
import {View} from 'react-native';
import {
  createDrawerNavigator,
  DrawerContentComponentProps,
} from '@react-navigation/drawer';
import themeColors from '../../Utils/themeColors';

import DrawerContent from '../../Components/DrawerComponents/DrawerContent';
import DashboardScreen from '../../Screens/DashboardScreen';
import CategoryScreen from '../../Screens/CategoryScreen';
import GeneralFilterScreen from '../../Screens/GeneralFilterScreen';
const Drawer = createDrawerNavigator();

const DrawerNavigator: React.FC = () => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: themeColors.white,
      }}>
      <Drawer.Navigator
        screenOptions={{
          drawerType: 'slide',

          drawerStyle: {
            backgroundColor: 'transparent',
            width: '60%',
          },
          overlayColor: 'transparent',
          sceneContainerStyle: {
            backgroundColor: 'transparent',
          },
        }}
        drawerContent={(props: DrawerContentComponentProps) => (
          <DrawerContent {...props} />
        )}>
         <Drawer.Screen name="DashboardScreen" component={DashboardScreen}options={{ title: 'Dashboard' }} />
        <Drawer.Screen name="CategoryScreen" component={CategoryScreen}     options={{ title: 'Category' }}/>
        <Drawer.Screen
          name="GeneralFilterScreen"
          component={GeneralFilterScreen}
          options={{ title: 'General Filter' }}
        />

      </Drawer.Navigator>
    </View>
  );
};

export default DrawerNavigator;
