import React from 'react';
import {styles} from './style';
import {Image_Url} from '../../utils/Urls';
import {GlobalStyle} from '../../utils/GlobalStyle';
import {View, Text, ImageBackground, TouchableOpacity} from 'react-native';

const HomeAssigmentCard = ({data, onPress}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[GlobalStyle.shadow, styles.HomeCardCont]}>
      <ImageBackground
        source={{uri: Image_Url + data.image_app}}
        style={styles.AssigmentCard}>
        <View style={styles.HomeTextCont}>
          {/* yaha image aye gi */}
          <View style={styles.AssigmentTextWrapper}>
            <Text style={styles.AssigmentTitle}>{data.course_name}</Text>
            <Text style={styles.AssigmentSubtitle}>{data.game_title}</Text>
            <View style={[styles.AssigmentPlayButton, GlobalStyle.justify]}>
              <Text style={styles.AssigmentPlayText}>Play</Text>
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
              data.isDue === 'Due'
                ? require('../../assets/image/due-icon.png')
                : require('../../assets/image/okicon.png')
            }
          /> 
*/
