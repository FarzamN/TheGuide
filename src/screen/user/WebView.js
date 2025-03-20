import {style} from './style';
import {Body} from '../../components';
import {Color} from '../../utils/Color';
import React, {useCallback} from 'react';
import {iOS, tab} from '../../utils/Constants';
import {GlobalStyle} from '../../utils/GlobalStyle';
import Icon from 'react-native-dynamic-vector-icons';
import {StatusBar, TouchableOpacity} from 'react-native';
import {WebView as WebViewComp} from 'react-native-webview';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {useFocusEffect, useNavigation} from '@react-navigation/native';

const WebView = ({route}) => {
  const {uri} = route.params;
  const {top} = useSafeAreaInsets();
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
      <TouchableOpacity
        style={[
          style.closeBTN,
          {
            top: iOS ? top + 15 : StatusBar.currentHeight + 10,
          },
        ]}
        onPress={goBack}>
        <Icon
          name="cross"
          type="Entypo"
          color={Color.white}
          size={tab ? 30 : 20}
        />
      </TouchableOpacity>
      <WebViewComp style={GlobalStyle.flex} source={{uri}} />
    </Body>
  );
};

export default WebView;
