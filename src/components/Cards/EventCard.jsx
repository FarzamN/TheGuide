import React from 'react';
import {styles} from './style';
import {CustomButton, Text} from '..';
import {Image_Url} from '../../utils/Urls';
import {View, ImageBackground} from 'react-native';
import {GlobalStyle} from '../../utils/GlobalStyle';
import {useNavigation} from '@react-navigation/native';

const EventCard = ({data}) => {
  const {navigate} = useNavigation();
  // const event = data?.event_origin.split('-').join(' ');
  const event = data?.event_origin;
  return (
    <View style={styles.EventCardContainer}>
      <ImageBackground
        source={{
          uri:
            Image_Url + data?.thumbnail ||
            'https://images.unsplash.com/photo-1576686680193-8678028d1362?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fgDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        }}
        resizeMode="stretch"
        style={[styles.EventCardImage, GlobalStyle.shadow]}>
        <View style={[GlobalStyle.between, GlobalStyle.Padding]}>
          <View style={{flexDirection: 'row', width: '75%'}}>
            {data.streak === 'none' && (
              <ImageBackground
                style={[styles.dateBanner, GlobalStyle.justify]}
                resizeMode="contain"
                source={require('../../assets/image/date-banner.png')}>
                <Text center style={styles.dateText} title={data.streak} />
              </ImageBackground>
            )}

            <View>
              <Text
                style={styles.EventName}
                title={data.title ?? 'Event Name'}
              />
              <Text
                style={styles.EventTitle}
                title={data.description ?? 'event origin'}
              />
            </View>
          </View>
          {/* <View style={GlobalStyle.row}>
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
        </View> */}
        </View>
        <View style={[GlobalStyle.row, {marginHorizontal: 15}]}>
          <Text style={styles.endText} title={event ?? 'Event Description'} />
          <CustomButton
            title={'Details'}
            style={styles.bookBtn}
            textStyle={styles.bookText}
            onPress={() => navigate('webview', {uri: data.event_webview})}
          />
        </View>
      </ImageBackground>
    </View>
  );
};

export default EventCard;
