import {ScrollView} from 'react-native';
import React from 'react';
import {Body, FullImage, Text} from '..';
import {style} from './style';
import {GlobalStyle} from '../../utils/GlobalStyle';

const AuthBody = ({heading, Sub, children, source, styles}) => {
  return (
    <Body restyle={style.container}>
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
