import React from 'react';
import style from './style';
import Modal from 'react-native-modal';
// import {View} from 'react-native';
import {ModalBtn} from '..';
import {GlobalStyle} from '../../utils/GlobalStyle';
import LottieView from 'lottie-react-native';
import {Text, View} from 'react-native-animatable';
const JobModal = ({visible, onPress}) => {
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
            onPress={onPress}
            green
            title="Next"
            textStyle={style.JobBtnText}
          />
        </View>
      </View>
    </Modal>
  );
};

export default JobModal;
