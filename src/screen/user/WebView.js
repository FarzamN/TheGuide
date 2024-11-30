import {style} from './style';
import React, {useCallback} from 'react';
import {Image_Url} from '../../utils/Urls';
import {GlobalStyle} from '../../utils/GlobalStyle';
import {TouchableOpacity, SafeAreaView} from 'react-native';
import {WebView as WebViewComp} from 'react-native-webview';
import Icon, {IconType} from 'react-native-dynamic-vector-icons';
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
    <SafeAreaView style={{flex: 1}}>
      <TouchableOpacity style={style.closeBTN} onPress={goBack}>
        <Icon
          name="close-circle"
          type={IconType.Ionicons}
          size={22}
          color="#000"
        />
      </TouchableOpacity>
      <WebViewComp
        style={{flex: 1}}
        // javaScriptEnabled
        // domStorageEnabled
        source={{uri}}
      />
    </SafeAreaView>
  );
};

export default WebView;
