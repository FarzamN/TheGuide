import { ActivityIndicator, Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import Modal from 'react-native-modal'
import LinearGradient from 'react-native-linear-gradient'
import { Font } from '../../utils/Font'
import Icon, { IconType } from 'react-native-dynamic-vector-icons';
import { Color } from '../../utils/Color'
import ChooseModeModal from './ChooseModeModal'

const SCREEN_HEIGHT = Dimensions.get('window').height

const SelectGameModal = (props) => {
    const { onBackdropPress, isVisible, onPress } = props
    const [selectModal2, setSelectModal2] = useState(false)


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
                start={{ x: .7, y: 0 }}
                end={{ x: 1, y: 1 }}
                colors={['#379EEF', '#3CC3FF', '#3CC3FF', '#2EA1FF', '#2683FF', '#103BF4', '#103BF4']}
                style={{
                    height: (SCREEN_HEIGHT * 1) / 1.4,
                    width: '95%',
                    borderRadius: 12,
                    overflow: 'hidden'
                }}>
                <View style={{ flex: .1, justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ color: 'white', fontFamily: Font.font500, fontSize: 23 }}>SELECT A GAME</Text>
                </View>


                <View style={{ flex: .7, }}>
                    <TouchableOpacity onPress={() => setSelectModal2(true)} activeOpacity={0.8}>
                        <LinearGradient
                            start={{ x: 0, y: 0 }}
                            end={{ x: 1, y: 0 }}
                            colors={['#F54600', '#F56A00', '#F58800', '#F59900', '#F59900']}
                            style={{
                                height: 85,
                                borderRadius: 12,
                                marginHorizontal: 20,
                                flexDirection: "row"
                            }}>
                            <View
                                style={{
                                    flex: 0.45,
                                }}
                            >
                                <Image
                                    resizeMode='contain'
                                    style={{
                                        height: '100%',
                                        width: '100%'
                                    }}
                                    source={require('../../assets/image/card.png')}
                                />
                            </View>
                            <View
                                style={{
                                    flex: 0.55,
                                    justifyContent: 'center',
                                }}
                            >
                                <Text
                                    style={{
                                        color: 'white',
                                        fontFamily: Font.font500,
                                        fontSize: 22,
                                        textShadowColor: '#F54600',
                                        textShadowOffset: { width: 1, height: 1 },
                                        textShadowRadius: 1,
                                        elevation: 1
                                    }}
                                >
                                    READ A LONG
                                </Text>
                            </View>
                        </LinearGradient>
                    </TouchableOpacity>
                </View>


                <View style={{ flex: .2, justifyContent: 'center', alignItems: 'center' }}>
                    <Text
                        style={{
                            color: '#C7D4FC',
                            fontFamily: Font.font500,
                            fontSize: 15
                        }}>
                        Complete all games to get bonus key
                    </Text>
                    <Text
                        style={{
                            color: '#FFFF00',
                            fontFamily: Font.font500,
                            fontSize: 22
                        }}>
                        50 Bonus Tokens
                    </Text>
                </View>
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

            <ChooseModeModal
                isVisible={selectModal2}
                onBackdropPress={() => setSelectModal2(false)}
            />
        </Modal>
    )
}

export default SelectGameModal

const styles = StyleSheet.create({})