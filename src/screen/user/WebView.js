import React from 'react';
import {style} from './style';
import Modal from 'react-native-modal';
import {TouchableOpacity, View} from 'react-native';
import {WebView as WebViewComp} from 'react-native-webview';
import Icon, {IconType} from 'react-native-dynamic-vector-icons';

export const WebView = ({source, visible, onClose}) => {
  return (
    <Modal style={{margin: 0}} visible={visible} animationType="slide">
      <View style={{flex: 1}}>
        <TouchableOpacity style={style.closeBTN} onPress={onClose}>
          <Icon
            name="close-circle"
            type={IconType.Ionicons}
            size={22}
            color="#000"
          />
        </TouchableOpacity>
        <WebViewComp
          source={{uri: source}}
          style={{flex: 1}}
          javaScriptEnabled
          domStorageEnabled
        />
      </View>
    </Modal>
  );
};
