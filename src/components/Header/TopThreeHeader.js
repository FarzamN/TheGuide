import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {Color} from '../../utils/Color';
import {Font} from '../../utils/Font';

const TopThreeHeader = props => {
  const {checkTab, text1, text2, text3, onPressOne, onPressTwo, onPressThree} =
    props;
  return (
    <View style={styles.MainCon}>
      <TouchableOpacity
        onPress={onPressOne}
        activeOpacity={0.8}
        style={[
          styles.BoxesSty,
          {backgroundColor: checkTab == 1 ? '#05BEF7' : '#3470AC'},
        ]}>
        <Text style={styles.TxtSty}>{text1}</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={onPressTwo}
        activeOpacity={0.8}
        style={[
          styles.BoxesSty,
          {backgroundColor: checkTab == 2 ? '#05BEF7' : '#3470AC'},
        ]}>
        <Text style={styles.TxtSty}>{text2}</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={onPressThree}
        activeOpacity={0.8}
        style={[
          styles.BoxesSty,
          {backgroundColor: checkTab == 3 ? '#05BEF7' : '#3470AC'},
        ]}>
        <Text style={styles.TxtSty}>{text3}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  MainCon: {
    height: 40,
    borderRadius: 8,
    overflow: 'hidden',
    backgroundColor: '#3470AC',
    marginTop: 10,
    flexDirection: 'row',
    shadowColor: 'rgba(0,0,0)',
    shadowOffset: [1, 1],
    shadowRadius: 1,
    shadowOpacity: 0.4,
    elevation: 1,
  },
  BoxesSty: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  TxtSty: {
    color: 'white',
    fontWeight: '400',
    fontSize: 12,
  },
});
export default TopThreeHeader;
