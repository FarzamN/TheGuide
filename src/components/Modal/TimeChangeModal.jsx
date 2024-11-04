import React from 'react';
import {View} from 'react-native';
import Modal from 'react-native-modal';
import style from './style';
import {ModalBtn, Text} from '..';

const TimeChangeModal = ({visible, onClose, time, onPress}) => {
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
          title={`Are you sure you want to change your daily prayer goal to ${time} min?`}
        />
        <View style={{paddingHorizontal: 30}}>
          <ModalBtn onPress={onPress} title="Yes" />
          <ModalBtn green onPress={onClose} title="No" />
        </View>
      </View>
    </Modal>
  );
};

export default TimeChangeModal;
