import React from 'react';
import {GlobalStyle} from '../../utils/GlobalStyle';
import {SafeAreaView, ImageBackground} from 'react-native';

const ProfileBody = ({children}) => {
  return (
    <SafeAreaView style={GlobalStyle.flex}>
      <ImageBackground
        source={require('../../assets/image/bg-profile.jpg')}
        style={GlobalStyle.flex}>
        {children}
      </ImageBackground>
    </SafeAreaView>
  );
};

export default ProfileBody;
