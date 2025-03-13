import React from 'react';
import style from '../Modal/style';
import {View} from 'react-native';
import {useDispatch} from 'react-redux';
import {CustomButton, FullImage, Text} from '..';
import {USER_DETAILS} from '../../redux/reducer/Holder';
import { tab } from '../../utils/Constants';

const GuestScreen = ({mtop}) => {
  const dispatch = useDispatch();

  const handleLogout = () => dispatch({type: USER_DETAILS, payload: null});
  return (
    <View style={[style.ModalContainer, {marginTop: mtop,  width: tab ? '60%' : '90%',}]}>
      <FullImage
        source={{
          uri: 'https://uxwing.com/wp-content/themes/uxwing/download/signs-and-symbols/warning-icon.png',
        }}
        style={style.LottieView}
      />
      <Text
        title={'Please login or sign up first'}
        center
        style={style.LogoutText}
      />
      <CustomButton
        title={'Go to Login'}
        style={style.goToLogin}
        onPress={handleLogout}
      />
    </View>
  );
};

export default GuestScreen;
