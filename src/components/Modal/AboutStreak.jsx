import style from './style';
import {ModalBtn, Text} from '..';
import Modal from 'react-native-modal';
import {Image, View} from 'react-native';
import React, {useState, useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const AboutStreak = () => {
  const [aboutStreak, setAboutStreak] = useState(false);

  const checkVisibility = async () => {
    try {
      const showStatus = await AsyncStorage.getItem('show');
      if (showStatus === null || JSON.parse(showStatus) === true) {
        setAboutStreak(true);
      }
    } catch (error) {
      console.error('Error reading streak visibility:', error);
    }
  };

  const onClose = async () => {
    try {
      setAboutStreak(false);
      await AsyncStorage.setItem('show', JSON.stringify(false)); // Store as stringified boolean
    } catch (error) {
      console.error('Error saving streak visibility:', error);
    }
  };

  useEffect(() => {
    checkVisibility();
  }, []);
  return (
    <Modal
      animationIn="fadeIn"
      animationOut="fadeOut"
      isVisible={aboutStreak}
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
