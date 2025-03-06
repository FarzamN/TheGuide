import {Text} from '..';
import React from 'react';
import {styles} from './style';
import {View} from 'react-native';
import {Color} from '../../utils/Color';
import {Bar} from 'react-native-progress';
import {end, start} from '../../utils/Data';
import {GlobalStyle} from '../../utils/GlobalStyle';
import LinearGradient from 'react-native-linear-gradient';

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
    ['#B420D7', '#E529FF', '#FF55FF', '#F544FC'],
    ['#A8A8A8', '#aaa', '#b2b2b2', '#B4B4B4'],
    ['#EC5613', '#FF6E1E', '#FF8035', '#FB6E2B'],
  ];

  const color = index % Colors.length;

  return (
    <LinearGradient
      start={start}
      end={end}
      colors={Colors[color]}
      style={[
        styles.height,
        GlobalStyle.row,
        GlobalStyle.shadow,
        styles.StatusCardComp,
      ]}>
      <View style={[styles.firstBox, GlobalStyle.justify, styles.height]}>
        <Text style={styles.Text} title={data.level} />
      </View>

      <View style={[styles.centerBox, GlobalStyle.justify, styles.height]}>
        {/* <Text style={styles.Text} title={`Pray ${data.title} minuts`} /> */}
        <Text style={styles.Text} title={data.name} />
        <Bar
          // progress={data.progress / 100}
          progress={60 / 100}
          width={150}
          color={Color.white}
          unfilledColor={Color.Non}
          height={8}
          borderRadius={20}
          borderColor={Color.white}
          style={{alignSelf: 'center', marginTop: 6}}
        />
      </View>

      <View style={[styles.secBox, GlobalStyle.justify, styles.height]}>
        <Text style={styles.Text} title={'days'} />
        <Text style={styles.Text} title={data.days} />
      </View>
    </LinearGradient>
  );
};

export default StatusCard;
