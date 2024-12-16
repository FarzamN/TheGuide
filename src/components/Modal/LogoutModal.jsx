import React from 'react';
import style from './style';
import {View} from 'react-native';
import {ModalBtn, Text} from '..';
import Modal from 'react-native-modal';

const LogoutModal = props => {
  const {visible, onClose, text, onPress} = props;

  return (
    <Modal
      animationIn={'fadeIn'}
      animationOut={'fadeOut'}
      isVisible={visible}
      onBackButtonPress={onClose}
      onBackdropPress={onClose}
      style={style.logoutBox}>
      <View style={[style.LogoutContainer]}>
        <Text center style={style.LogoutText} title={text} />
        <ModalBtn onPress={onPress} title="Yes" />
        <ModalBtn green onPress={onClose} title="No" />
      </View>
    </Modal>
  );
};

export default LogoutModal;
