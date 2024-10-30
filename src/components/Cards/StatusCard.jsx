import {View} from 'react-native';
import React from 'react';
import {Text} from '..';
import {GlobalStyle} from '../../utils/GlobalStyle';
import {styles} from './style';
import LinearGradient from 'react-native-linear-gradient';

const StatusCard = ({data}) => {
  const randomColor = [
    ['#03B547', '#04C34D', '#0DF166', '#0CE45F'],
    ['#89de49', '#76d452', '#6ccb52'],
    ['#FDBF44', '#F9AD41', '#FF8926'],
    ['#BC8010', '#CF910A', '#F0B41E', '#E1A91E'],
    ['#0000C0', '#0031D2', '#3468F0', '#7074FC'],
    ['#EE5613', '#FE6716', '#FF7F34', '#FB6C28'],
    ['#BC8010', '#D3930B', '#F0B41E', '#E0A81D'],
  ];
  return (
    <LinearGradient
      start={{x: 0, y: 0}}
      end={{x: 1, y: 0}}
      colors={randomColor[Math.floor(Math.random() * randomColor.length)]}
      style={[
        styles.StatusCardComp,
        GlobalStyle.row,
        GlobalStyle.shadow,
        styles.height,
      ]}>
      <View style={[styles.firstBox, GlobalStyle.justify, styles.height]}>
        <Text style={styles.Text} title={'L1'} />
      </View>

      <View style={[styles.centerBox, GlobalStyle.justify, styles.height]}>
        <Text style={styles.Text} title={`Pray ${data.title} minuts`} />
        <View style={styles.Progress}>
          <View
            style={[
              styles.ProgressValue,
              {
                width: data.progress,
              },
            ]}
          />
        </View>
      </View>

      <View style={[styles.secBox, GlobalStyle.justify, styles.height]}>
        <Text style={styles.Text} title={'Days'} />
        <Text style={styles.Text} title={'30'} />
      </View>
    </LinearGradient>
  );
};

export default StatusCard;
