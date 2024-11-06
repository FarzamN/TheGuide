import React from 'react';
import {styles} from './style';
import {GlobalStyle} from '../../utils/GlobalStyle';
import {
  Image,
  TouchableOpacity,
  View,
  Text,
  ImageBackground,
} from 'react-native';
import {Color} from '../../utils/Color';
import {Image_Url} from '../../utils/Urls';

const HomeAssigmentCard = ({data, onPress}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        GlobalStyle.shadow,
        {backgroundColor: Color.white, marginBottom: 10, borderRadius: 20},
      ]}>
      <ImageBackground
        source={{uri: Image_Url + data.image_app}}
        style={styles.AssigmentCard}>
        <View style={{flexDirection: 'row', alignItems: 'flex-start'}}>
          {/* <Image
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
          /> */}
          <View style={styles.AssigmentTextWrapper}>
            <Text style={styles.AssigmentTitle}>
              {/* {ix === 0
                ? 'Old Testament'
                : ix === 1
                ? 'New Testament'
                : ix === 2
                ? 'Life Topics'
                : 'Daily Review'} */}
              {data.course_name}
            </Text>
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
