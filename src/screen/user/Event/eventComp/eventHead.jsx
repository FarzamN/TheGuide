import {View, TouchableOpacity} from 'react-native';
import React from 'react';
import {style} from './style';
import {GlobalStyle} from '../../../../utils/GlobalStyle';
import Icon, {IconType} from 'react-native-dynamic-vector-icons';
import {Color} from '../../../../utils/Color';
import {Text} from '../../../../components';

const EventHead = ({onPagePress, onTypePress, type, page}) => {
  return (
    <View style={[style.EventBotCont, GlobalStyle.row, {marginHorizontal: 20}]}>
      <TouchableOpacity
        onPress={onTypePress}
        style={[[style.box, GlobalStyle.between]]}>
        <Text style={style.btmTitle} title={type} />
        <Icon
          size={13}
          name="caretdown"
          color={Color.textGrey}
          type={IconType.AntDesign}
        />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={onPagePress}
        style={[[style.box, GlobalStyle.between]]}>
        <Text style={style.btmTitle} title={page} />
        <Icon
          size={13}
          name="caretdown"
          color={Color.textGrey}
          type={IconType.AntDesign}
        />
      </TouchableOpacity>
      <TouchableOpacity style={[[style.tBox, GlobalStyle.justify]]}>
        <Icon
          name="star"
          type={IconType.AntDesign}
          color={Color.orange}
          size={18}
        />
      </TouchableOpacity>
    </View>
  );
};

export default EventHead;
