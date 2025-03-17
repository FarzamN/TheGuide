import React from 'react';
import style from './style';
import Modal from 'react-native-modal';
import {useSelector} from 'react-redux';
import {Text, View} from 'react-native-animatable';
import {GlobalStyle} from '../../utils/GlobalStyle';
import {FullImage, MinistoryDocationCard, ModalBtn} from '..';

const JobModal = ({visible, onPress, load}) => {
  const ministry_project = useSelector(state => state.ministry_project);

  return (
    <Modal
      isVisible={visible}
      animationIn="zoomIn"
      backdropOpacity={0.7}
      animationOut="zoomOut"
      backdropColor="#3750D9"
      animationInTiming={400}
      animationOutTiming={400}>
      <View style={GlobalStyle.justify} animation="fadeIn" duration={100}>
        <MinistoryDocationCard data={ministry_project} />
        <Text style={style.JobHead} animation="fadeInLeft" duration={200}>
          Good Job
        </Text>
        <Text style={style.JobComp} animation="fadeInLeft" duration={200}>
          Assigment Completed!
        </Text>

        <FullImage
          style={style.JobLottie}
          source={require('../../assets/image/badge.png')}
        />

        <View style={style.JobBtn} animation="fadeInUpBig" duration={300}>
          <ModalBtn
            green
            onPress={onPress}
            textStyle={style.JobBtnText}
            title={load ? 'Please Wait...' : 'Next'}
          />
        </View>
      </View>
    </Modal>
  );
};

export default JobModal;
