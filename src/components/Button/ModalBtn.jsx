import {TouchableOpacity} from 'react-native';
import React from 'react';
import {styles} from './style';
import {Text} from '..';
import {Color} from '../../utils/Color';
import {GlobalStyle} from '../../utils/GlobalStyle';

const ModalBtn = ({onPress, green, title, textStyle, style}) => {
  return (
    <TouchableOpacity
      style={[
        styles.ModalBtnCont,
        GlobalStyle.justify,
        {
          borderColor: green ? '#21C06C' : '#797778',
          backgroundColor: green ? '#1CE57F' : '#F7F8FD',
        },
        style,
      ]}
      onPress={onPress}>
      <Text
        style={[
          {
            color: green ? Color.white : '#797778',
          },
          styles.ModalBtnText,
          textStyle,
        ]}
        title={title}
      />
    </TouchableOpacity>
  );
};

export default ModalBtn;
