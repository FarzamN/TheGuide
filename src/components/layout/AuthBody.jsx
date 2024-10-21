import {StatusBar, ScrollView} from 'react-native';
import React, {useEffect} from 'react';
import {Body, FullImage, Text} from '..';
import {style} from './style';
import navigationColor from 'react-native-system-navigation-bar';
import {Color} from '../../utils/Color';
import {GlobalStyle} from '../../utils/GlobalStyle';

const AuthBody = ({heading, Sub, children, source, styles}) => {
  useEffect(() => {
    navigationColor.setNavigationColor(Color.white);
  }, []);
  return (
    <Body restyle={style.container}>
      <StatusBar backgroundColor={'#0808C2'} barStyle={'light-content'} />

      <FullImage style={styles} source={source} />
      <ScrollView
        style={GlobalStyle.Padding}
        showsVerticalScrollIndicator={false}>
        <Text center style={style.heading} title={heading} />
        <Text title={Sub} center style={style.text} />
        {children}
      </ScrollView>
    </Body>
  );
};

export default AuthBody;
