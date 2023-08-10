import React, { useState, useEffect } from 'react';
import { View, Dimensions } from 'react-native';

const LandscapeComponent = ({ children }) => {
  const [isLandscape, setIsLandscape] = useState(
    Dimensions.get('window').width > Dimensions.get('window').height
  );

  const updateOrientation = () => {
    setIsLandscape(Dimensions.get('window').width > Dimensions.get('window').height);
  };

  useEffect(() => {
    Dimensions.addEventListener('change', updateOrientation);

    return () => {
      Dimensions.removeEventListener('change', updateOrientation);
    };
  }, []);

  if (isLandscape) {
    return <View style={{ flexDirection: 'row' ,flex:1}}>{children}</View>;
  }

  return <View style={{flex:1,alignItems:'center'}}>{children}</View>;
};

export default LandscapeComponent;
