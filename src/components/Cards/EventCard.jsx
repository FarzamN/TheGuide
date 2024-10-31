import React from 'react';
import {styles} from './style';
import {CustomButton, Text} from '..';
import {Color} from '../../utils/Color';
import {View, ImageBackground} from 'react-native';
import {GlobalStyle} from '../../utils/GlobalStyle';
import Icon, {IconType} from 'react-native-dynamic-vector-icons';

const EventCard = ({data}) => {
  return (
    <ImageBackground
      source={{uri: data.image}}
      resizeMode="cover"
      style={[styles.EventCardContainer, GlobalStyle.shadow]}>
      <View style={[GlobalStyle.between, GlobalStyle.Padding]}>
        <View style={GlobalStyle.row}>
          <ImageBackground
            style={[styles.dateBanner, GlobalStyle.justify]}
            resizeMode="contain"
            source={require('../../assets/image/date-banner.png')}>
            <Text center style={styles.dateText} title={'14 Oct'} />
          </ImageBackground>
          <View>
            <Text style={styles.EventName} title="Event Name" />
            <Text style={styles.EventTitle} title={data.name} />
          </View>
        </View>
        <View style={GlobalStyle.row}>
          {[
            {type: IconType.AntDesign, name: 'star'},
            {type: IconType.Entypo, name: 'share'},
          ].map((i, ix) => (
            <Icon
              key={ix}
              size={16}
              type={i.type}
              name={i.name}
              color={Color.white}
              style={styles.iconBackground}
            />
          ))}
        </View>
      </View>
      <View style={[GlobalStyle.row, {marginHorizontal: 15}]}>
        <Text
          style={styles.endText}
          title={
            'It is a long established fact that a reader will be distracted by the readable content of a page when like).'
          }
        />
        <CustomButton
          title={'Book'}
          style={styles.bookBtn}
          textStyle={styles.bookText}
        />
      </View>
    </ImageBackground>
  );
};

export default EventCard;
