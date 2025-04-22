import React from 'react';
import {styles} from './style';
import {CustomButton, Text} from '..';
import {View, ImageBackground} from 'react-native';
import {GlobalStyle} from '../../utils/GlobalStyle';
import {useNavigation} from '@react-navigation/native';

const TournamentCard = ({data, onPress, BTNtitle}) => {
  const {navigate} = useNavigation();

  return (
    <View style={styles.EventCardContainer}>
      <ImageBackground
        source={{
          uri: 'https://images.unsplash.com/photo-1576686680193-8678028d1362?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fgDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        }}
        resizeMode="stretch"
        style={[styles.EventCardImage, GlobalStyle.shadow]}>
        <View style={[GlobalStyle.between, GlobalStyle.Padding]}>
          <View style={{flexDirection: 'row', width: '75%'}}>
            <View>
              <Text style={styles.EventName} title={'Any Time Tournament'} />
              <Text style={styles.EventTitle} title={'Tournament start in'} />
              <Text style={styles.EventTitle} title={'00:00:00'} />
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
          <Text style={styles.endText} title={'Event Description'} />
          <CustomButton
            title={BTNtitle}
            style={styles.bookBtn}
            textStyle={styles.bookText}
            onPress={onPress}
          />
        </View>
      </ImageBackground>
    </View>
  );
};

export default TournamentCard;
