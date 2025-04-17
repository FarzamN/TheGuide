import Sound from 'react-native-sound';

import {EmailRegix} from './Urls';
import {Dimensions, Platform} from 'react-native';

export const {width, height} = Dimensions.get('window');

export const f_inch = width <= 350 && height <= 600;
export const tab = width >= 768 && height >= 1024;
export const phone = width <= 400 && height <= 800;

export const OS = Platform.OS;
export const iOS = Platform.OS === 'ios';
export const android = Platform.OS === 'android';

export const minLength = {
  value: 8,
  message: 'Password too short (minimum length is 8)',
};

export const maxLength = {
  value: 16,
  message: 'Password too long (maximum length is 16)',
};

export const emailPattern = {
  value: EmailRegix,
  message: 'Email is not valid',
};

export const required = type => {
  return `${type} is Required`;
};

import SoundPlayer from 'react-native-sound-player';

export const playSound = file => {
  const {playUrl, playSoundFile} = SoundPlayer;
  playSoundFile(file, 'mp3');
};

export const getLightColor = hex => {
  if (!hex || typeof hex !== 'string') return 'rgba(0,0,0,0.05)';

  const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
  hex = hex.replace(shorthandRegex, (_, r, g, b) => r + r + g + g + b + b);

  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? `rgba(${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(
        result[3],
        16,
      )}, 0.1)`
    : 'rgba(0,0,0,0.05)';
};
