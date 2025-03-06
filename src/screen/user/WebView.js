import {style} from './style';
import {Body} from '../../components';
import React, {useCallback} from 'react';
import {Color} from '../../utils/Color';
import {TouchableOpacity} from 'react-native';
import {GlobalStyle} from '../../utils/GlobalStyle';
import Icon from 'react-native-dynamic-vector-icons';
import {WebView as WebViewComp} from 'react-native-webview';
import {useFocusEffect, useNavigation} from '@react-navigation/native';

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
        <Icon name="cross" type={'Entypo'} size={20} color={Color.white} />
      </TouchableOpacity>
      <WebViewComp style={GlobalStyle.flex} source={{uri}} />
    </Body>
  );
};

export default WebView;
