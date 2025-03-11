import {View} from 'react-native';
import React from 'react';
import style from './style';
import {ModalBtn, Text} from '..';
import Modal from 'react-native-modal';

const RequestModal = props => {
  const {onClose, visible, onask, onadd} = props;
  return (
    <Modal
      animationIn={'slideInUp'}
      animationOut={'slideOutDown'}
      isVisible={visible}
      onBackButtonPress={onClose}
      onBackdropPress={onClose}
      style={style.RequestBox}>
      <View style={[style.RequestContainer]}>
        <Text center style={style.LogoutText} title={'My Points Pool: 0'} />
        <Text
          center
          style={style.LogoutText}
          title={'Public Points Pool: 25,359'}
        />
        <ModalBtn title="Request Points" onPress={onask} />
        <ModalBtn green title="Add A Sponsor" onPress={onadd} />
      </View>
    </Modal>
  );
};

export default RequestModal;
