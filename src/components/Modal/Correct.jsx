import {Text} from '..';
import React from 'react';
import style from './style';
import {View} from 'react-native';
import Modal from 'react-native-modal';
import {Color} from '../../utils/Color';
import LottieView from 'lottie-react-native';

const Correct = ({visible, text, game}) => {
  return (
    <Modal
      isVisible={visible}
      animationIn={'flash'}
      animationOut={'fadeOut'}
      backdropColor={Color.Non}
      style={
        !game
          ? [style.MainModal, style.Modal_Container]
          : style.CorrectnErrorModal
      }>
      <View style={style.ModalContainer}>
        <LottieView
          autoPlay
          loop={false}
          style={style.LottieView}
          source={require('../../assets/lottie/correct.json')}
        />
        {!game && <Text title={text} center style={style.LogoutText} />}
      </View>
    </Modal>
  );
};

export default Correct;
