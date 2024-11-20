import React from 'react';
import Modal from 'react-native-modal';
import {style} from './style';
import {Text} from '../../../../components';

const TimerBtnModal = ({visible, onClose}) => {
  return (
    <Modal
      animationIn={'fadeIn'}
      animationOut={'fadeOut'}
      isVisible={visible}
      onBackButtonPress={onClose}
      onBackdropPress={onClose}
      style={style.MondalCont}>
      <Text center title={'Set your prayer gole'} />
    </Modal>
  );
};

export default TimerBtnModal;
