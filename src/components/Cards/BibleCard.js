import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient'
import { Font } from '../../utils/Font'

const BibleCard = ({ item }) => {
    return (
        <LinearGradient
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            colors={['#23c6fd', '#2cbffd', '#3ab3fc', '#48a7fb']}
            style={styles.MainBoxCon}>
            <View style={styles.MainP1}>

                <View style={{ flex: .25 }}>
                    <TouchableOpacity activeOpacity={0.4} style={styles.DueBox}>
                        <Text style={styles.DueTxt}>Due</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.TitleCon}>
                    <Text style={styles.TitleSty}>{item.title}</Text>
                </View>

                <View style={{ flex: .15 }} />
            </View>

            <View style={styles.MainP2} >
                <View style={styles.ImgFCon}>
                    <View style={styles.ImgCon}>
                        <Image
                            source={require('../../assets/image/msg.png')}
                            resizeMode='cover'
                            style={{ height: '100%', width: '100%' }}
                        />
                    </View>
                </View>

                <View style={styles.BtnCon}>

                    <TouchableOpacity activeOpacity={0.4}>
                        <LinearGradient
                            start={{ x: 0, y: 0 }}
                            end={{ x: 1, y: 0 }}
                            colors={['#10ba03', '#16cb0e', '#33e81f', '#3bf023']}
                            style={styles.VidConSty}
                        >
                            <Text style={styles.DualBtnTx}>Video</Text>
                        </LinearGradient>
                    </TouchableOpacity>

                    <TouchableOpacity activeOpacity={0.4}>
                        <LinearGradient
                            start={{ x: 0, y: 0 }}
                            end={{ x: 1, y: 0 }}
                            colors={['#ffc121', '#ffb035', '#ffa44a', '#ff9663']}
                            style={styles.VidConSty}
                        >
                            <Text style={styles.DualBtnTx}>Text</Text>
                        </LinearGradient>
                    </TouchableOpacity>

                </View>
            </View>
        </LinearGradient>
    )
}

export default BibleCard

const styles = StyleSheet.create({
    MainBoxCon: {
        height: 130,
        marginBottom: 10,
        marginHorizontal: 10,
        overflow: 'hidden',
        borderRadius: 4,
    },
    VidConSty: {
        height: 35,
        width: 85,
        marginBottom: 10,
        marginRight: 5,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center'
    },
    MainP1: {
        flex: .35,
        backgroundColor: 'white',
        flexDirection: 'row',
        borderBottomRightRadius: 10,
        borderBottomLeftRadius: 10
    },
    DueBox: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ff7f7f',
        marginVertical: 6,
        marginHorizontal: 12,
        borderRadius: 5
    },
    DueTxt: {
        color: 'white',
        fontFamily: Font.font400,
        fontSize: 16,
    },
    TitleSty: {
        color: '#48abf9',
        fontFamily: Font.font700,
        fontSize: 16,
        bottom: 2
    },
    TitleCon: {
        flex: .6,
        justifyContent: 'center',
        alignItems: 'center'
    },
    MainP2: {
        flex: .65,
        flexDirection: 'row'
    },
    ImgFCon: {
        flex: .25,
        alignItems: 'center',
        paddingTop: 10
    },
    ImgCon: {
        height: 45,
        width: 45,
        overflow: 'hidden',
    },
    BtnCon: {
        flex: .75,
        alignItems: 'flex-end',
        justifyContent: 'center',
        flexDirection: "row"
    },
    DualBtnTx: {
        color: 'white',
        fontFamily: Font.font500,
        fontSize: 14
    }
})