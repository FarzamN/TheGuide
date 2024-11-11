import React from 'react';
import style from './style';
import {View} from 'react-native';
import Modal from 'react-native-modal';
import LottieView from 'lottie-react-native';
import {Color} from '../../utils/Color';

const Correct = ({visible}) => {
  return (
    <Modal
      isVisible={visible}
      animationIn={'flash'}
      animationOut={'fadeOut'}
      backdropColor={Color.Non}
      style={style.CorrectnErrorModal}>
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
