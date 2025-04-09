import React from 'react';
import {style} from './style';
import {View, TouchableOpacity} from 'react-native';
import {FullImage, Text} from '../../../../components';
import {Color} from '../../../../utils/Color';
import {GlobalStyle} from '../../../../utils/GlobalStyle';
import Icon, {IconType} from 'react-native-dynamic-vector-icons';
import {useNavigation} from '@react-navigation/native';

const Header = props => {
  const {title, onFilter, source, active} = props;
  const {goBack} = useNavigation();

  return (
    <View style={[style.headerCont, GlobalStyle.between]}>
      <View style={GlobalStyle.row}>
        <TouchableOpacity
          onPress={goBack}
          style={[GlobalStyle.row, {marginRight: 7}]}>
          <Icon
            size={25}
            name="chevron-left"
            color={Color.white}
            type={IconType.Entypo}
          />
          <FullImage
            source={source}
            style={style.chatImage}
            sizeMode={'cover'}
          />
        </TouchableOpacity>
        <View>
          <Text style={style.headerText} title={title} />
          <View style={GlobalStyle.row}>
            <Icon
              type={IconType.Octicons}
              name="dot-fill"
              size={20}
              color={active ? '#00C851' : '#FF4444'}
            />
            <Text
              style={[style.createdAt, {color: active ? '#00C851' : '#FF4444'}]}
              title={` ${active ? 'Active' : 'Offline'}`}
            />
          </View>
        </View>
      </View>
      {/* 
      <View style={GlobalStyle.row}>
        <TouchableOpacity onPress={onFilter} style={{marginRight: 5}}>
          <Icon
            size={20}
            color={Color.white}
            name="call"
            type={IconType.Ionicons}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={onFilter}>
          <Icon
            size={22}
            color={Color.white}
            name="videocam"
            type={IconType.Ionicons}
          />
        </TouchableOpacity>
      </View> */}
    </View>
  );
};

export default Header;
