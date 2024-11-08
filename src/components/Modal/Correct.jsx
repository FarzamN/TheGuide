import React from 'react';
import style from './style';
import {View} from 'react-native';
import Modal from 'react-native-modal';
import LottieView from 'lottie-react-native';

const Correct = ({visible}) => {
  return (
    <Modal
      isVisible={visible}
      animationIn={'flash'}
      animationOut={'fadeOut'}
      style={[style.MainModal, style.Modal_Container]}>
      <View style={style.ModalContainer}>
        <LottieView
          autoPlay
          loop={false}
          style={style.LottieView}
          source={require('../../assets/lottie/correct.json')}
        />
      </View>
    </Modal>
  );
};

export default Correct;
