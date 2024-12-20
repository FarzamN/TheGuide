import React from 'react';
import style from './style';
import {ModalBtn} from '..';
import Modal from 'react-native-modal';
import LottieView from 'lottie-react-native';
import {GlobalStyle} from '../../utils/GlobalStyle';
import {Text, View} from 'react-native-animatable';

const JobModal = ({visible, onPress, load}) => {
  return (
    <Modal
      backdropOpacity={0.7}
      isVisible={visible}
      animationIn="zoomIn"
      animationInTiming={400}
      animationOut="zoomOut"
      animationOutTiming={400}
      backdropColor="#3750D9">
      <View style={GlobalStyle.justify} animation={'fadeIn'} duration={100}>
        <Text style={style.JobHead} animation={'fadeInLeft'} duration={200}>
          Good Job
        </Text>
        <Text style={style.JobComp} animation={'fadeInLeft'} duration={200}>
          Assigment Completed!
        </Text>
        <LottieView
          loop={false}
          autoPlay
          style={style.JobLottie}
          source={require('../../assets/lottie/complete.json')}
        />
        <View style={style.JobBtn} animation={'fadeInUpBig'} duration={300}>
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
