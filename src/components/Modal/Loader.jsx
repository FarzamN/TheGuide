import React from 'react';
import style from './style';
import Modal from 'react-native-modal';
import {Color} from '../../utils/Color';
import { iOS } from '../../utils/Constants';
import {View, Text, ActivityIndicator} from 'react-native';

const Loader = ({visible}) => {
  return (
    <Modal
      animationIn={'fadeIn'}
      animationOut={'fadeOut'}
      isVisible={visible}
      style={[style.MainModal, style.Modal_Container]}>
      <View
        style={[
          style.ModalContainer,
          {backgroundColor: '#FCFCFC', borderWidth: 0.8},
        ]}>
        <ActivityIndicator
          color={Color.Sky}
          style={style.LottieView}
          size={iOS ? "large" : 80}
        />

        <Text style={style.ModalText}>{'Please Wait...'}</Text>
      </View>
    </Modal>
  );
};

export default Loader;
