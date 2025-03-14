import {Text} from '..';
import React from 'react';
import style from './style';
import {View} from 'react-native';
import Modal from 'react-native-modal';
import {Color} from '../../utils/Color';
import LoaderKit from 'react-native-loader-kit';

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
        <LoaderKit
          color={Color.Sky}
          name={'BallClipRotatePulse'}
          style={style.LoadingBox}
        />

        <Text style={style.ModalText} title={'Please Wait...'} />
      </View>
    </Modal>
  );
};

export default Loader;
