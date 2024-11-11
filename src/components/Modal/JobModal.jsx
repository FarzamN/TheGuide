import React from 'react';
import style from './style';
import Modal from 'react-native-modal';
import {View, Text} from 'react-native';

const JobModal = ({visible}) => {
  return (
    <Modal
      backdropOpacity={0.8}
      isVisible={visible}
      animationIn="zoomIn"
      animationInTiming={400}
      animationOut="zoomOut"
      animationOutTiming={400}
      backdropColor="#3750D9">
      <Text>JobModal</Text>
    </Modal>
  );
};

export default JobModal;
