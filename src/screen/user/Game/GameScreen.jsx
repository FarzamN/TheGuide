import React, {useCallback, useEffect, useState} from 'react';
import {useFocusEffect} from '@react-navigation/native';
import {GlobalStyle} from '../../../utils/GlobalStyle';
import {Body, GameBtn, GameHeader, Text} from '../../../components';
import MoVideoPlayer from 'react-native-mo-video-player';
import {style} from './style';
import {ScrollView, View} from 'react-native';

const GameScreen = ({navigation}) => {
  const {goBack, getParent} = navigation;

  const [displayedText, setDisplayedText] = useState('');
  const fullText =
    'what is the results of not walking in obedience to the light.';

  useFocusEffect(
    useCallback(() => {
      getParent().setOptions({
        tabBarStyle: GlobalStyle.HideBar,
      });
    }, []),
  );

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setDisplayedText(prev => prev + fullText[index]);
      index += 1;

      if (index >= fullText.length) {
        clearInterval(interval);
      }
    }, 200);

    return () => clearInterval(interval);
  }, []);

  return (
    <Body>
      <GameHeader
        title={'New Testament'}
        subTitle={'angel gabriel visits zechariah'}
        onClose={goBack}
      />
      <MoVideoPlayer
        style={style.videoPlayer}
        source={{
          uri: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
        }}
        poster="https://pbs.twimg.com/media/FDX7UCbVcAUcNXj.jpg"
        autoPlay
        playInBackground={false}
        showHeader={false}
        showSeeking10SecondsButton={false}
      />
      <ScrollView style={GlobalStyle.Padding}>
        <Text center style={style.GameTitle} title={displayedText} />
        <Text style={style.GameSubText} title={'according to john 1:4'} />
        <View style={{height: 15}} />
        <View style={GlobalStyle.mapContaner}>
          {[
            {title: 'condemnation', color: '#00CE64'},
            {title: 'Forgiveness', color: '#FD8D34'},
            {title: 'Blessing', color: '#0088FE'},
            {title: 'condemnation', color: '#792DFD'},
          ].map((game, i) => (
            <GameBtn key={i} data={game} />
          ))}
        </View>
      </ScrollView>
    </Body>
  );
};

export default GameScreen;
