import {View, Text} from 'react-native';
import React from 'react';
import {Font} from '../utils/Font';
import {Color} from '../utils/Color';
import Icon from 'react-native-vector-icons/AntDesign';

const AuthNavigation = () => {
  return (
    <View>
      <Text
        style={{
          fontFamily: Font.font100Italic,
          color: Color.white,
          fontSize: 100,
        }}>
        AuthNavigation
      </Text>
      <Icon name="caretleft" size={20} color={Color.white} />
    </View>
  );
};

export default AuthNavigation;
