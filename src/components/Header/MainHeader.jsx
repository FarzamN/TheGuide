import {useDispatch} from 'react-redux';
import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import style from './style';
import {FullImage} from '..';
import {LogOutApi} from '../../redux/actions/AuthAction';

const MainHeader = ({title}) => {
  const dispatch = useDispatch();
  const handleLogout = () => dispatch(LogOutApi());
  return (
    <View style={style.container}>
      <FullImage
        style={style.ImageBox}
        source={require('../../assets/image/logo.png')}
      />
      <Text style={style.title}>{title}</Text>
      <TouchableOpacity onPress={handleLogout}>
        <Text style={style.logout}>Log out</Text>
      </TouchableOpacity>
    </View>
  );
};

export default MainHeader;
