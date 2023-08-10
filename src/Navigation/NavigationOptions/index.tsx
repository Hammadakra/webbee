import React from 'react';
import styles from './styles';
import {   TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

const titles: Record<string, string> = {
  CategoryScreen: 'Category Screen',
};

const menuBtnRoutes: Record<string, string> = {
  CategoryScreen: 'CategoryScreen',
};

interface NavigationProps {
  route?: {name?: string};
  navigation?: {
    openDrawer: () => void;
  };
}

const getHeaderLeft = (props: NavigationProps) => {
  if (menuBtnRoutes[props?.route?.name]) {
    return (
      <TouchableOpacity onPress={() => props?.navigation?.openDrawer()}>
        <Icon name="delete" size={30} color="#900" />
      </TouchableOpacity>
    );
  }
  return null;
};

const getTitle = (props: NavigationProps) => {
  if (titles[props?.route?.name]) {
    return titles[props?.route?.name];
  }
  return '';
};

const getHeaderStyle = () => {
  return {
    shadowColor: 'transparent',
  };
};

const NavigationOptions: React.FC<NavigationProps> = navProps => {
  return {
    title: getTitle(navProps),
    headerTitleAlign: 'center',
    headerLeft: () => getHeaderLeft(navProps),
    headerStyle: getHeaderStyle(),
    headerTransparent: true,
    headerTitleStyle: styles.headingText,
  };
};

export default NavigationOptions;
