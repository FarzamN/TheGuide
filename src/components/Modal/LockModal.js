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
            
            backdropOpacity={0.8}
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
            }}>
            <LinearGradient
                start={{ x: 1, y: 0 }}
                end={{ x: 1, y: 1 }}
                colors={['#F4FFFF', '#F4FFFF', '#A8F7FF' , '#97F4FF',  '#76F0FF']}
                style={{
                    height: 200,
                    width: '95%',
                    borderRadius: 12,
                    overflow: 'hidden'
                }}>

            </LinearGradient>
        </Modal>
    )
}

export default LockModal

const styles = StyleSheet.create({})