import {SafeAreaView, ImageBackground} from 'react-native';
import Reac from 'react';
import {GlobalStyle} from '../../utils/GlobalStyle';

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
