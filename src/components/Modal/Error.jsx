import React from 'react';
import style from './style';
import Modal from 'react-native-modal';
import {View, Text} from 'react-native';
import {Color} from '../../utils/Color';
import {FullImage} from '..';

const Error = ({message, visible, game}) => {
  return (
    <Modal
      isVisible={visible}
      animationIn={'flash'}
      animationOut={'fadeOut'}
      backdropColor={game ? Color.Non : 'rgba(0,0,0,0.7)'}
      style={
        game
          ? style.CorrectnErrorModal
          : [style.MainModal, style.Modal_Container]
      }>
      <View style={style.ModalContainer}>
      <FullImage source={require('../../assets/image/wrong.png')} style={style.LottieView}/>

        {message && (
          <Text style={[style.ModalText, {color: 'red'}]}>{message}</Text>
        )}
      </View>
    </Modal>
  );
};
export default Error;
