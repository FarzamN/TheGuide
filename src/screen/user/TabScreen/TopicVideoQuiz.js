import { Image, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Color } from '../../../utils/Color'
import TestHeader from '../../../components/Header/TestHeader'
import LinearGradient from 'react-native-linear-gradient'
import { Font } from '../../../utils/Font'
import Icon, { IconType } from 'react-native-dynamic-vector-icons';
import VideoPlayer from 'react-native-video-player';

const TopicVideoQuiz = () => {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: Color.HeaderSky }}>
            <StatusBar backgroundColor={Color.HeaderSky} barStyle={'light-content'} />
            <TestHeader name='Different kinds of player' />
            {/* <View
                style={{
                    height: 20,
                    backgroundColor: Color.LineDarkBlue,
                    marginTop: 5
                }} /> */}
            <View
                style={{
                    height: 200,
                    // backgroundColor: 'red'
                }}
            >
                <VideoPlayer
                resizeMode='cover'
                    video={{ uri: 'https://sassolution.org/funeral/storage/app/public/test.mp4' }}
                    style={{
                        width: '100%',
                        height: '100%',
                        // backgroundColor: '#F23232' 
                    }}
                    showDuration={true}
                    pause={true}
                    // controlsTimeout={0}
                />
            </View>

            <LinearGradient
                start={{ x: 1, y: 1 }}
                end={{ x: 2, y: 2 }}
                colors={['#5261E4', '#404AD3', '#3ab3fc', '#4F5BCE']}
                style={{ flex: 1 }}>

                <View
                    style={{
                        height: 55,
                        borderBottomColor: '#404AD3',
                        borderWidth: 1,
                        flexDirection: 'row'
                    }}>
                    <View style={{ flex: .65, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                        {
                            DATA.map((item, index) => {
                                return (
                                    <View
                                        key={index}
                                        style={{
                                            height: 25,
                                            width: 35,
                                            backgroundColor: 'red',
                                            borderWidth: 1,
                                            borderColor: 'white',
                                            borderRadius: 6,
                                            marginLeft: 4
                                        }}
                                    />
                                )
                            })
                        }
                    </View>



                    <View style={{ flex: .35, justifyContent: 'center', alignItems: 'center' }}>
                        <View
                            style={{
                                height: 25,
                                width: 85,
                                borderRadius: 20,
                                borderWidth: 1.3,
                                borderColor: Color.LineDarkBlue,
                                flexDirection: 'row',
                                backgroundColor: '#FFFFFF'
                            }}
                        >

                            <View
                                style={{
                                    height: 35,
                                    width: 35,
                                    borderRadius: 100,
                                    alignSelf: 'flex-end',
                                    top: 6,
                                    left: -6,
                                    overflow: 'hidden'
                                }}
                            >
                                <Image
                                    style={{
                                        height: '100%', width: '100%'
                                    }}
                                    source={require('../../../assets/image/coin.png')}
                                    resizeMode='cover'
                                />
                            </View>
                            <View style={{ flex: 1 }}>
                                <Text
                                    style={{
                                        color: Color.LineDarkBlue,
                                        fontFamily: Font.font700,
                                        fontSize: 15,
                                        textAlign: 'center',
                                        right: 7,
                                        top: 1
                                    }}>0</Text>
                            </View>
                        </View>
                    </View>
                </View>

                <View style={styles.MainShadowCon}>
                    <ScrollView showsVerticalScrollIndicator={false}>
                        <Text style={{ fontFamily: Font.font700, fontSize: 18, color: '#3F4ADA' }}>God hears our prayers</Text>
                    </ScrollView>
                </View>


                <View style={styles.shadowSty1} />
                <View style={styles.shadowSty2} />

                <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>

                    <LinearGradient
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 0 }}
                        colors={['#36BE18', '#36BE18', '#81E015', '#81E015']}
                        style={{
                            height: 65,
                            width: 110,
                            backgroundColor: 'red',
                            borderRadius: 20,
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}>
                        <Icon
                            size={30}
                            name="check"
                            color={Color.white}
                            type={IconType.FontAwesome}
                        />
                        <Text
                            style={{
                                fontFamily: Font.font700,
                                color: 'white',
                                fontSize: 12,
                                bottom: 3
                            }}>TRUE</Text>


                    </LinearGradient>


                    <LinearGradient
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 0 }}
                        colors={['#FF314F', '#FF3342', '#FF2E73', '#FF3060']}
                        style={{
                            height: 65,
                            width: 110,
                            backgroundColor: 'red',
                            borderRadius: 20,
                            marginLeft: 20,
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}>
                        <Icon
                            size={35}
                            name="cross"
                            color={Color.white}
                            type={IconType.Entypo}
                        />
                        <Text
                            style={{
                                fontFamily: Font.font700,
                                color: 'white',
                                fontSize: 12,
                                bottom: 5
                            }}>FALSE</Text>
                    </LinearGradient>

                </View>

            </LinearGradient>

        </SafeAreaView>
    )
}

export default TopicVideoQuiz

const styles = StyleSheet.create({
    MainShadowCon: {
        height: 280,
        width: '80%',
        backgroundColor: 'white',
        alignSelf: 'center',
        marginTop: 20,
        borderRadius: 8,
        zIndex: 9999,
        shadowColor: 'rgba(0,0,0)',
        shadowOffset: [1, 1],
        shadowRadius: 1,
        shadowOpacity: 0.4,
        elevation: 1,
        padding: 10
    },
    shadowSty1: {
        height: 50,
        width: '65%',
        backgroundColor: 'rgba(255, 255, 255, 0.5)',
        alignSelf: 'center',
        marginTop: 20,
        borderRadius: 8,
        zIndex: 999,
        position: 'absolute',
        bottom: 125,
        shadowColor: 'rgba(0,0,0)',
        shadowOffset: [1, 1],
        shadowRadius: 1,
        shadowOpacity: 0.4,
        elevation: 1
    },
    shadowSty2: {
        height: 50,
        width: '50%',
        backgroundColor: 'rgba(255, 255, 255, 0.3)',
        alignSelf: 'center',
        marginTop: 20,
        borderRadius: 8,
        zIndex: 99,
        position: 'absolute',
        bottom: 115,
        shadowColor: 'rgba(0,0,0)',
        shadowOffset: [1, 1],
        shadowRadius: 1,
        shadowOpacity: 0.4,
        elevation: 1
    },

})

const DATA = [
    {
        id: '1',
    },
    {
        id: '2',
    },
    {
        id: '3',
    },
    {
        id: '4',
    },
    {
        id: '5',
    },
]