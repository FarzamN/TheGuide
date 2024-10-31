import React from 'react';
import {View} from 'react-native';
import {GlobalStyle} from '../../../../utils/GlobalStyle';
import {style} from './style';
import {Text} from '../../../../components';

const EventBottom = () => {
  return (
    <View style={[style.EventBotCont, GlobalStyle.between, GlobalStyle.shadow]}>
      {[
        {title: 'Event', num: 3, c: '#FF8E31'},
        {title: 'Group', num: 5, c: '#FF4C4C'},
        {title: 'Event', num: 3, c: '#19D15E'},
      ].map((i, ix) => (
        <View key={ix} style={GlobalStyle.row}>
          <Text style={style.btmTitle} title={`My ${i.title}`} />
          <View
            style={[style.numBox, GlobalStyle.justify, {backgroundColor: i.c}]}>
            <Text style={style.num} title={i.num} />
          </View>
        </View>
      ))}
    </View>
  );
};

export default EventBottom;
