import {Text} from '..';
import React from 'react';
import {styles} from './style';
import {Color} from '../../utils/Color';
import {TouchableOpacity} from 'react-native';
import {GlobalStyle} from '../../utils/GlobalStyle';

const ModalBtn = props => {
  const {onPress, green, title, textStyle, style} = props;
  return (
    <TouchableOpacity
      style={[
        styles.ModalBtnCont,
        GlobalStyle.justify,
        {
          borderColor: green ? '#21C06C' : '#797778',
          backgroundColor: green ? Color.green : '#F7F8FD',
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
