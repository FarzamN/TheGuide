import {style} from './style';
import {useDispatch} from 'react-redux';
import {Color} from '../../utils/Color';
import {useSelector} from 'react-redux';
import {width} from '../../utils/Constants';
import React, {useEffect, useState} from 'react';
import RenderHtml from 'react-native-render-html';
import {GlobalStyle} from '../../utils/GlobalStyle';
import {useNavigation} from '@react-navigation/native';
import {getHtml} from '../../redux/actions/AuthAction';
import {ActivityIndicator, ScrollView, View} from 'react-native';
import {Body, CustomButton, FullImage, Text} from '../../components';

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
