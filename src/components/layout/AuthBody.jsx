import {style} from './style';
import {ScrollView} from 'react-native';
import React, {forwardRef} from 'react';
import {Body, FullImage, Text} from '..';
import {GlobalStyle} from '../../utils/GlobalStyle';

const AuthBody = forwardRef((props, ref) => {
  const {heading, Sub, children, source, styles} = props;
  return (
    <Body restyle={style.container}>
      <FullImage style={styles} source={source} sizeMode={'cover'} />
      <ScrollView
        ref={ref}
        style={GlobalStyle.Padding}
        showsVerticalScrollIndicator={false}>
        <Text center style={style.heading} title={heading} />
        <Text title={Sub} center style={style.text} />
        {children}
      </ScrollView>
    </Body>
  );
});

export default AuthBody;
