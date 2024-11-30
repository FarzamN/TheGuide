import {Image, View} from 'react-native';
import React, {useState, useEffect} from 'react';
import Modal from 'react-native-modal';
import {ModalBtn, Text} from '..';
import style from './style';
import AsyncStorage from '@react-native-async-storage/async-storage';

const AboutStreak = ({visible, onClose}) => {
  return (
    <Modal
      animationIn="fadeIn"
      animationOut="fadeOut"
      isVisible={visible}
      style={style.AboutStreakBox}>
      <Image
        resizeMode="contain"
        tintColor="#1CE57F"
        style={style.arrowImg}
        source={require('../../assets/image/arrow.png')}
      />
      <View style={style.AboutStreakCont}>
        <Text
          center
          style={style.LogoutText}
          title="Pray 60 minutes to get your streak!"
        />
        <ModalBtn green onPress={onClose} title="I Understand!" />
      </View>
    </Modal>
  );
};

export default AboutStreak;
