import React from 'react';
import {View, Text} from 'react-native';
import Modal from 'react-native-modal';
import LottieView from 'lottie-react-native';
import style from './style';

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
        <LottieView
          autoPlay
          style={style.LottieView}
          source={require('../../assets/lottie/loader.json')}
        />
        <Text style={style.ModalText}>Please Wait...</Text>
      </View>
    </Modal>
  );
};

export default Loader;
