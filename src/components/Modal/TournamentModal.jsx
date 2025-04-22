import {View} from 'react-native';
import React from 'react';
import style from './style';
import {CustomButton, Text, ModalBtn, CrossIcon} from '..';
import Modal from 'react-native-modal';
import {Color} from '../../utils/Color';
import {GlobalStyle} from '../../utils/GlobalStyle';

const TournamentModal = ({visible, onClose}) => {
  return (
    <Modal
      isVisible={visible}
      animationIn={'flash'}
      animationOut={'fadeOut'}
      onBackButtonPress={onClose}
      onBackdropPress={onClose}
      backdropColor={'rgba(0,0,0,0.7)'}
      style={[style.MainModal, style.Modal_Container]}>
      <View style={[style.ModalContainer, {paddingHorizontal: 20}]}>
        <View style={{height: 10}} />

        <CrossIcon onPress={onClose} />
        <Text
          style={[[style.ModalText, {color: Color.textGrey}]]}
          title="One Group leader click the group leader button. Everyone else click
          the participant button."
        />

        <CustomButton title={'Group Leader'} />
        <ModalBtn green title="Participant" />
        <View style={GlobalStyle.height} />
      </View>
    </Modal>
  );
};

export default TournamentModal;
