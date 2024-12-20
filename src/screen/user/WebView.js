import {style} from './style';
import React, {useCallback} from 'react';
import {GlobalStyle} from '../../utils/GlobalStyle';
import Icon from 'react-native-dynamic-vector-icons';
import {WebView as WebViewComp} from 'react-native-webview';
import {TouchableOpacity, SafeAreaView, View} from 'react-native';
import {useFocusEffect, useNavigation} from '@react-navigation/native';
import { Body } from '../../components';

const WebView = ({route}) => {
  const {uri} = route.params;
  const {goBack, getParent} = useNavigation();

  useFocusEffect(
    useCallback(() => {
      getParent()?.setOptions({
        tabBarStyle: GlobalStyle.HideBar,
      });
    }, []),
  );
  return (
    <Body>
      <TouchableOpacity style={style.closeBTN} onPress={goBack}>
        <Icon name="cross" type={'Entypo'} size={20} color="#fff" />
      </TouchableOpacity>
      <WebViewComp style={GlobalStyle.flex} source={{uri}} />
    </Body>
  );
};

export default WebView;
