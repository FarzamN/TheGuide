import {TouchableOpacity} from 'react-native';
import React from 'react';
import {styles} from './style';
import {Text} from '..';
import {Color} from '../../utils/Color';
import {GlobalStyle} from '../../utils/GlobalStyle';

const ModalBtn = ({onPress, green, title}) => {
  return (
    <TouchableOpacity
      style={[
        styles.ModalBtnCont,
        GlobalStyle.justify,
        {
          borderColor: green ? '#21C06C' : '#797778',
          backgroundColor: green ? '#1CE57F' : '#F7F8FD',
        },
      ]}
      onPress={onPress}>
      <Text
        style={[
          {
            color: green ? Color.white : '#797778',
          },
          styles.ModalBtnText,
        ]}
        title={title}
      />
    </TouchableOpacity>
  );
};

export default ModalBtn;
