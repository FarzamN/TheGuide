import { ActivityIndicator, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Modal from 'react-native-modal'
import { Color } from '../../utils/Color'
import LottieView from 'lottie-react-native'

const RoundLoader = (props) => {
    const { onBackdropPress, isVisible } = props
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
            <LottieView
                style={{
                    height: 55,
                    width: 55,
                }}
                source={require('../Lootie/loader.json')}
                autoPlay
                loop
                speed={0.7}
            />
            {/* <ActivityIndicator animating  size={'large'} color={'white'} /> */}
        </Modal>
    )
}

export default RoundLoader

const styles = StyleSheet.create({

})