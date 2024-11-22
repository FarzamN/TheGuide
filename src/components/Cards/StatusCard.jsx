import {View} from 'react-native';
import React from 'react';
import {Text} from '..';
import {GlobalStyle} from '../../utils/GlobalStyle';
import {styles} from './style';
import LinearGradient from 'react-native-linear-gradient';
import {Bar} from 'react-native-progress';
import {width} from '../../utils/Constants';
import {Color} from '../../utils/Color';

const StatusCard = ({data, index}) => {
  const Colors = [
    ['#03B547', '#04C34D', '#0DF166', '#0CE45F'],
    ['#0000C0', '#0031D2', '#3468F0', '#7074FC'],
    ['#EE5613', '#FE6716', '#FF7F34', '#FB6C28'],
    ['#BC8010', '#D3930B', '#F0B41E', '#E0A81D'],
    ['#5721D2', '#6A33E7', '#A064F9', '#9459EC'],
    ['#E9592E', '#F86E34', '#FFC538', '#FFAB33'],
    ['#739AC8', '#85ADDD', '#BEDBFC', '#ABC8E9'],
    ['#DD2D2E', '#EF3A3A', '#FF6D6D', '#FF6161'],
    ['#1E74F5', '#1E83FB', '#13B8FF', '#13AEFF'],
    ['#04B546', '#05CB50', '#0DF065', '#0BE15F'],
    ['#B420D7', '#E529FF', '#FF55FF', '#F544FC'],
    ['#A8A8A8', '#aaa', '#b2b2b2', '#B4B4B4'],
    ['#EC5613', '#FF6E1E', '#FF8035', '#FB6E2B'],
  ];

  const rand = Math.floor(Math.random() * Colors.length);
  const color = index % Colors.length;
  return (
    <LinearGradient
      start={{x: 0, y: 0}}
      end={{x: 1, y: 0}}
      colors={Colors[color]}
      style={[
        styles.height,
        GlobalStyle.row,
        GlobalStyle.shadow,
        styles.StatusCardComp,
      ]}>
      <View style={[styles.firstBox, GlobalStyle.justify, styles.height]}>
        <Text style={styles.Text} title={'L1'} />
      </View>

      <View style={[styles.centerBox, GlobalStyle.justify, styles.height]}>
        <Text style={styles.Text} title={`Pray ${data.title} minuts`} />
        <Bar
          progress={data.progress / 100}
          width={150}
          color={Color.white}
          unfilledColor={Color.Non}
          height={9}
          borderRadius={20}
          borderColor={Color.white}
          style={{alignSelf: 'center', marginTop: 6}}
        />
      </View>

      <View style={[styles.secBox, GlobalStyle.justify, styles.height]}>
        <Text style={styles.Text} title={'Days'} />
        <Text style={styles.Text} title={'30'} />
      </View>
    </LinearGradient>
  );
};

export default StatusCard;
