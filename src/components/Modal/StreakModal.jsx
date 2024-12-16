import React from 'react';
import style from './style';
import {View} from 'react-native';
import {ModalBtn, Text} from '..';
import Modal from 'react-native-modal';
import AnimatedLottieView from 'lottie-react-native';

const StreakModal = ({visible, onPress}) => {
  return (
    <Modal animationIn={'fadeIn'} animationOut={'fadeOut'} isVisible={visible}>
      <View style={[style.LogoutContainer, {height: 300}]}>
        <AnimatedLottieView
          loop={false}
          autoPlay
          style={{height: 170, width: 170, alignSelf: 'center'}}
          source={require('../../assets/lottie/complete.json')}
        />
        <Text
          center
          style={style.LogoutText}
          title={'You got your streak today!'}
        />
        <ModalBtn green onPress={onPress} title="OKay" />
      </View>
    </Modal>
  );
};

export default StreakModal;
