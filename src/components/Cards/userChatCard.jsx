import {View} from 'react-native';
import React from 'react';
import {CustomButton, FullImage, Text} from '..';
import {styles} from './style';
import {GlobalStyle} from '../../utils/GlobalStyle';

const UserChatCard = ({name, uri, title, onPress, loading, sent, btnTitle}) => {
  return (
    <View style={[styles.UserChatCard]}>
      <Text title={title} />

      <View style={[GlobalStyle.row]}>
        <FullImage
          style={{width: 40, height: 40, marginRight: 10}}
          radius={100}
          sizeMode={'cover'}
          source={{uri}}
        />
        <Text title={name} />
      </View>
      <View style={GlobalStyle.between}>
        <CustomButton
          title={btnTitle}
          marginTop={10}
          onPress={onPress}
          load={loading}
        />
        {sent && (
          <CustomButton
            title={'Add'}
            marginTop={10}
            onPress={onPress}
            load={loading}
          />
        )}
      </View>
    </View>
  );
};

export default UserChatCard;
