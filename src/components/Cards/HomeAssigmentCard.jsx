import {Text} from '..';
import React from 'react';
import {styles} from './style';
import {Image_Url} from '../../utils/Urls';
import {GlobalStyle} from '../../utils/GlobalStyle';
import {View, ImageBackground, TouchableOpacity, Image} from 'react-native';

const HomeAssigmentCard = ({data, onPress}) => {
  const disabled = data.game_status !== 'INCOMPLETE';
  return (
    <TouchableOpacity
      disabled={disabled}
      onPress={onPress}
      style={[
        GlobalStyle.shadow,
        styles.HomeCardCont,
        {opacity: disabled ? 0.5 : 1},
      ]}>
      <ImageBackground
        resizeMode="stretch"
        source={{uri: data.image_guest ? data.image_guest : Image_Url + data.image_app}}
        style={styles.AssigmentCard}>
        <View style={styles.HomeTextCont}>
          {disabled && (
            <Image
            resizeMode="contain"
            style={styles.AssigmentImg}
              source={require('../../assets/image/okicon.png')}
            />
          )}

          <View style={styles.AssigmentTextWrapper}>
            <Text style={styles.AssigmentTitle} title={data.course_name} />

            <Text style={styles.AssigmentSubtitle} title={data.game_title} />

            <View style={[styles.AssigmentPlayButton, GlobalStyle.justify]}>
              <Text style={styles.AssigmentPlayText} title="Play" />
            </View>
          </View>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
};

export default HomeAssigmentCard;
/* <Image
            style={{
              width: 30,
              height: 30,
              marginRight: 10,
              marginTop: -5,
            }}
            resizeMode="contain"
            source={
              data.game_status === 'INCOMPLETE'
                ? require('../../assets/image/due-icon.png')
                : require('../../assets/image/okicon.png')
            }
          /> 
*/
