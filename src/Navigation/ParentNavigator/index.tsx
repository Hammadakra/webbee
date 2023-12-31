import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import DrawerNavigator from '../DrawerNavigator';
const Stack = createStackNavigator();
const ParentNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="DrawerNavigator" component={DrawerNavigator} />
    </Stack.Navigator>
  );
};
export default ParentNavigator;
