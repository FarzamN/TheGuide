import {useDispatch} from 'react-redux';
import {ActivityIndicator, ScrollView, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Body, CustomButton, FullImage, Text} from '../../components';
import {useNavigation} from '@react-navigation/native';
import {style} from './style';
import {useSelector} from 'react-redux';
import {getHtml} from '../../redux/actions/AuthAction';
import {width} from '../../utils/Constants';
import RenderHtml from 'react-native-render-html';
import {Color} from '../../utils/Color';
import {GlobalStyle} from '../../utils/GlobalStyle';

const Term = ({route}) => {
  const {type} = route.params;
  const dispatch = useDispatch();
  const {goBack} = useNavigation();
  const html = useSelector(state => state.get_html);

  const [load, setLoad] = useState(true);

  useEffect(() => {
    dispatch(getHtml(type, setLoad));
  }, []);

  let result = html?.description?.replace(
    /<p(.*?)>/gi,
    `<p style='color: ${Color.black}; font-size: ${'15px'};'>`,
  );
  return (
    <Body>
      <FullImage
        sizeMode={'cover'}
        style={style.regsterImage}
        source={require('../../assets/image/registerBanner.png')}
      />
      {load ? (
        <>
          <ActivityIndicator color={Color.status} size={'large'} />
          <Text title="Loading..." center />
        </>
      ) : (
        <>
          <ScrollView
            showsVerticalScrollIndicator={false}
            style={GlobalStyle.Padding}>
            <RenderHtml contentWidth={width} source={{html: result}} />
            <CustomButton
              onPress={goBack}
              title="I accept"
              style={style.termBTN}
            />
            <View style={GlobalStyle.height} />
          </ScrollView>
        </>
      )}
    </Body>
  );
};

export default Term;
