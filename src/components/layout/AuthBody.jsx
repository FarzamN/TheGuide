import {style} from './style';
import {ScrollView, StatusBar, TouchableOpacity} from 'react-native';
import React, {forwardRef} from 'react';
import {Body, FullImage, Text} from '..';
import {GlobalStyle} from '../../utils/GlobalStyle';
import {useNavigation} from '@react-navigation/native';
import Icon, {IconType} from 'react-native-dynamic-vector-icons';
import {Color} from '../../utils/Color';
import {iOS, tab} from '../../utils/Constants';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

const AuthBody = forwardRef((props, ref) => {
  const {goBack} = useNavigation();
  const {top} = useSafeAreaInsets();
  const {heading, Sub, children, source, styles, close} = props;
  return (
    <Body restyle={style.container}>
      <FullImage style={styles} source={source} sizeMode={'cover'} />
      {close && (
        <TouchableOpacity
          onPress={goBack}
          style={[
            GlobalStyle.justify,
            style.closeButton,
            {marginTop: iOS ? top + 10 : StatusBar.currentHeight + 10},
          ]}>
          <Icon
            name="close"
            size={tab ? 25 : 18}
            type={IconType.AntDesign}
            color={Color.black}
          />
        </TouchableOpacity>
      )}
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
