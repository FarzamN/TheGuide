import {View, TouchableOpacity} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-dynamic-vector-icons';
import {Color} from '../../utils/Color';
import {style} from '../../screen/user/Chat/comp/style';
import {GlobalStyle} from '../../utils/GlobalStyle';
import {Text} from '..';

const NormalHeader = ({title}) => {
  const {goBack} = useNavigation();
  return (
    <View
      style={[
        style.headerCont,
        GlobalStyle.row,
        {
          paddingVertical: 20,
        },
      ]}>
      <TouchableOpacity onPress={goBack} style={[{marginRight: 7}]}>
        <Icon
          size={25}
          name="chevron-left"
          color={Color.white}
          type={'Entypo'}
        />
      </TouchableOpacity>
      <Text style={style.headerText} title={title} />
    </View>
  );
};

export default NormalHeader;
