import {View, Text, BackHandler} from 'react-native';
import React, {useCallback, useEffect} from 'react';
import {useFocusEffect} from '@react-navigation/native';
import {GlobalStyle} from '../../../utils/GlobalStyle';
import {Body, GameHeader} from '../../../components';

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
      <Text>GameScreen</Text>
    </Body>
  );
};

export default GameScreen;
