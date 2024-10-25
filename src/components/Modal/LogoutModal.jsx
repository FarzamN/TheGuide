import React from 'react';
import {View} from 'react-native';
import Modal from 'react-native-modal';
import style from './style';
import {ModalBtn, Text} from '..';
import {LogOutApi} from '../../redux/actions/AuthAction';
import {useDispatch} from 'react-redux';

const LogoutModal = ({visible, onClose}) => {
  const dispatch = useDispatch();

  const logout = () => {
    dispatch(LogOutApi());
  };
  return (
    <Modal
      animationIn={'fadeIn'}
      animationOut={'fadeOut'}
      isVisible={visible}
      onBackButtonPress={onClose}
      onBackdropPress={onClose}
      style={style.logoutBox}>
      <View style={[style.LogoutContainer]}>
        <Text
          center
          style={style.LogoutText}
          title={'Are you sure you want to Logout?'}
        />
        <ModalBtn onPress={logout} title="Yes" />
        <ModalBtn green onPress={onClose} title="No" />
      </View>
    </Modal>
  );
};

export default LogoutModal;
