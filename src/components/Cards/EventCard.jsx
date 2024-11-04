import React from 'react';
import {styles} from './style';
import {CustomButton, Text} from '..';
import {Color} from '../../utils/Color';
import {View, ImageBackground} from 'react-native';
import {GlobalStyle} from '../../utils/GlobalStyle';
import Icon, {IconType} from 'react-native-dynamic-vector-icons';
import {Image_Url} from '../../utils/Urls';
import moment from 'moment';

const EventCard = ({data}) => {
  const event = data?.event_origin.split('-').join(' ');
  return (
    <ImageBackground
      source={{
        uri:
          Image_Url + data?.thumbnail ??
          'https://images.unsplash.com/photo-1576686680193-8678028d1362?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fgDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      }}
      resizeMode="cover"
      style={[styles.EventCardContainer, GlobalStyle.shadow]}>
      <View style={[GlobalStyle.between, GlobalStyle.Padding]}>
        <View style={GlobalStyle.row}>
          <ImageBackground
            style={[styles.dateBanner, GlobalStyle.justify]}
            resizeMode="contain"
            source={require('../../assets/image/date-banner.png')}>
            <Text
              center
              style={styles.dateText}
              title={moment(data.date).format('do MMM')}
            />
          </ImageBackground>
          <View style={{maxWidth: '90%'}}>
            <Text style={styles.EventName} title={data.title ?? 'Event Name'} />
            <Text style={styles.EventTitle} title={event ?? 'event origin'} />
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
          title={data.description ?? 'Event Description'}
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
