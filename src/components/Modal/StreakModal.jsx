import React from 'react';
import style from './style';
import {View} from 'react-native';
import {FullImage, ModalBtn, Text} from '..';
import Modal from 'react-native-modal';

const StreakModal = ({visible, onPress}) => {
  return (
    <Modal animationIn={'fadeIn'} animationOut={'fadeOut'} isVisible={visible}>
      <View style={[style.LogoutContainer, {height: 300}]}>
        <FullImage
          style={style.streakImage}
          source={require('../../assets/image/badge.png')}
        />
        <Text
          center
          style={style.LogoutText}
          title={'You got your streak today!'}
        />
        <ModalBtn green onPress={onPress} title="Okay" />
      </View>
    </Modal>
  );
};

export default StreakModal;
