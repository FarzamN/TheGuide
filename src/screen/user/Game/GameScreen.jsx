import {View, Text, BackHandler} from 'react-native';
import React, {useCallback, useEffect} from 'react';
import {useFocusEffect} from '@react-navigation/native';
import {GlobalStyle} from '../../../utils/GlobalStyle';
import {Body, GameHeader} from '../../../components';
import MoVideoPlayer from 'react-native-mo-video-player';
import {width} from '../../../utils/Constants';
import {style} from './style';

const GameScreen = ({navigation}) => {
  useFocusEffect(
    useCallback(() => {
      navigation.getParent()?.setOptions({
        tabBarStyle: GlobalStyle.HideBar,
      });
    }, []),
  );

  // useEffect(() => {
  //   const backAction = () => {
  //     return true;
  //   };

  //   const backHandler = BackHandler.addEventListener(
  //     'hardwareBackPress',
  //     backAction,
  //   );

  //   return () => backHandler.remove();
  // }, []);

  return (
    <Body>
      <GameHeader
        title={'New Testament'}
        subTitle={'angel gabriel visits zechariah'}
      />
      <MoVideoPlayer
        style={style.videoPlayer}
        source={{
          uri: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
        }}
        poster="https://pbs.twimg.com/media/FDX7UCbVcAUcNXj.jpg"
        title="React Native MO-VIDEO-PLAYER"
        autoPlay
        playInBackground={false}
        showHeader={false}
        showSeeking10SecondsButton={false}
      />
    </Body>
  );
};

export default GameScreen;
