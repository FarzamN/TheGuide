import { ActivityIndicator, Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import Modal from 'react-native-modal'
import LinearGradient from 'react-native-linear-gradient'
import { Font } from '../../utils/Font'
import Icon, { IconType } from 'react-native-dynamic-vector-icons';
import { Color } from '../../utils/Color'
import ChooseModeModal from './ChooseModeModal'

const LockModal = (props) => {
    const { onBackdropPress, isVisible, onPress } = props

    return (
        <Modal
            statusBarTranslucent
            // onBackdropPress={onBackdropPress}
            isVisible={isVisible}
            animationIn="zoomIn"
            animationInTiming={400}
            animationOut="zoomOut"
            animationOutTiming={400}
            style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: 'rgba(38, 73, 144, 0.8)',
                margin: 0,
                paddingHorizontal: 15
            }}>
           
            <View
             style={{
                  height: 200,
                  width: '95%',
            }}>
                <View
                style={{
                    height: 60,
                    width: 60,
                    position: 'absolute',
                    zIndex: 999,
                    top: -30,
                    alignSelf: 'center'
                }}>
                <Image
                    style={{
                        height: '100%',
                        width: '100%'
                    }}
                    source={require('../../assets/image/lock2.png')}
                />
            </View>
            <LinearGradient
                start={{ x: 1, y: 0 }}
                end={{ x: 1, y: 1 }}
                colors={['#F4FFFF', '#F4FFFF', '#A8F7FF', '#A8F7FF', '#A8F7FF']}
                style={{
                    height: 160,
                    width: '100%',
                    borderRadius: 12,
                    overflow: 'hidden',
                    justifyContent:'center',
                    alignItems: 'center'
                }}>
                     <Text style={{
                        fontFamily: Font.font700,
                        fontSize: 20,
                        color: '#0D3F91',
                        width: '70%',
                        textAlign:'center'
                     }}>First Pass All Learning Games!</Text>
            </LinearGradient>

            <TouchableOpacity
            onPress={onBackdropPress}
            activeOpacity={0.8}
            style={{
                height: 35,
                width: 130,
                backgroundColor: '#FCA724',
                position: 'absolute',
                alignSelf: 'center',
                bottom: 25,
                borderRadius: 30,
                borderWidth: 2,
                borderColor: 'white',
                justifyContent: 'center',
                alignItems: 'center'
            }}
            >
                <Text style={{ color: 'white', fontFamily: Font.font700, fontSize: 18 }}>OK</Text>
            </TouchableOpacity>
            </View>
        </Modal>
    )
}

export default LockModal

const styles = StyleSheet.create({})