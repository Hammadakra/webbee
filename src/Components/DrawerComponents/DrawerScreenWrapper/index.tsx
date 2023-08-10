import { useDrawerProgress } from '@react-navigation/drawer';
import React from 'react';
import { StyleSheet, View } from 'react-native';
// import Animated, { interpolate } from 'react-native-reanimated';
 

interface DrawerScreenWrapperProps {
  children: React.ReactNode;
}

const DrawerScreenWrapper: React.FC<DrawerScreenWrapperProps> = ({ children }) => {
  const progress = useDrawerProgress();
  // const scale = interpolate(progress, [0, 1], [1, 0.85]);
  // const borderRadius = interpolate(progress, [0, 1], [0, vw * 5]);
  // const animatedStyle = { borderRadius, transform: [{ scale }] };

  return (
    <View style={[styles.container,]}>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    overflow: 'hidden',
  },
});

export default DrawerScreenWrapper;
