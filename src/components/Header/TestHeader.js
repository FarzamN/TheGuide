import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {Font} from '../../utils/Font';
import Icon, {IconType} from 'react-native-dynamic-vector-icons';
import {Color} from '../../utils/Color';
import {useNavigation} from '@react-navigation/native';

const TestHeader = ({name}) => {
  const navigation = useNavigation();
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 15,
        marginTop: 10,
      }}>
      <Text
        style={{
          color: 'white',
          fontWeight: '700',
          fontSize: 18,
          maxWidth: '80%',
        }}>
        {name}
      </Text>

      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => navigation.goBack()}
        style={{
          height: 35,
          width: 35,
          backgroundColor: '#BD3410',
          elevation: 1,
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 3,
        }}>
        <Icon
          size={25}
          name="cross"
          color={Color.white}
          type={IconType.Entypo}
        />
      </TouchableOpacity>
    </View>
  );
};

export default TestHeader;

const styles = StyleSheet.create({});
