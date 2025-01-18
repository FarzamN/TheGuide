import {  StyleSheet, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Modal from 'react-native-modal'
import LinearGradient from 'react-native-linear-gradient'
import Icon, { IconType } from 'react-native-dynamic-vector-icons';
import { Color } from '../../utils/Color'
import ModeCard from '../Cards/ModeCard'


const ChooseModeModal = (props) => {

  const { onBackdropPress, isVisible, } = props

  return (
    <Modal
      statusBarTranslucent
      backdropOpacity={0.6}
      onBackdropPress={onBackdropPress}
      isVisible={isVisible}
      animationIn="zoomIn"
      animationInTiming={400}
      animationOut="zoomOut"
      animationOutTiming={400}
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <LinearGradient
        start={{ x: 1.1, y: 0 }}
        end={{ x: 1, y: 1 }}
        colors={['#45AFF7', '#41AAF3', '#39B5FF', '#39B5FF', '#103BF4']}
        style={{
          height: 220,
          width: '95%',
          borderRadius: 12,
          overflow: 'hidden',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center', paddingHorizontal: 20
        }}>
        <ModeCard bgColor='green' speed='1X' mode='EASY' />
        <ModeCard bgColor='orange' speed='2X' mode='MEDIUM' />
        <ModeCard bgColor='red' speed='3X' mode='HARD' />
      </LinearGradient>

      <View
        style={{
          height: 45,
          width: 45,
          backgroundColor: '#103BF4',
          zIndex: 99999,
          marginTop: -25,
          borderRadius: 8,
          padding: 4
          // position: 'absolute',
          // bottom: 0
        }}>
        <TouchableOpacity
          onPress={onBackdropPress}
          activeOpacity={0.8}
          style={{
            flex: 1,
            borderWidth: 1,
            borderColor: '#EF0910',
            borderRadius: 5,
            overflow: 'hidden'
          }}
        >
          <LinearGradient
            start={{ x: .6, y: 0 }}
            end={{ x: 1.2, y: 1 }}
            colors={['#F7A0A1', '#EF0910', '#EF0910', '#EF0910']}
            style={{
              flex: 1,
              // borderWidth: 2,
              // borderColor: '#EF0910',
              justifyContent: 'center',
              alignItems: 'center'
            }}>
            <Icon
              size={35}
              name="cross"
              color={Color.white}
              type={IconType.Entypo}
            />
          </LinearGradient>
        </TouchableOpacity>


      </View>
    </Modal>
  )
}

export default ChooseModeModal

const styles = StyleSheet.create({})