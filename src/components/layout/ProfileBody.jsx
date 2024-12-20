import React from 'react';
import {GlobalStyle} from '../../utils/GlobalStyle';
import {SafeAreaView, ImageBackground} from 'react-native';
import Body from './Body';

const ProfileBody = ({children}) => {
  return (
    <Body style={GlobalStyle.flex}>
      <ImageBackground
        source={require('../../assets/image/bg-profile.jpg')}
        style={GlobalStyle.flex}>
        {children}
      </ImageBackground>
    </Body>
  );
};

export default ProfileBody;
