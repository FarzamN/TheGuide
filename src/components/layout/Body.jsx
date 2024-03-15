import {SafeAreaView, StatusBar, View} from 'react-native';
import React from 'react';
import {GlobalStyle} from '../../utils/GlobalStyle';
import {Color} from '../../utils/Color';

const Body = ({children}) => {
  return (
    <SafeAreaView style={GlobalStyle.Container}>
      <StatusBar backgroundColor={Color.Sky} barStyle={'light-content'} />
      <View
        style={[
          GlobalStyle.Padding,
          {
            flex: 1,
          },
        ]}>
        {children}
      </View>
    </SafeAreaView>
  );
};

export default Body;
