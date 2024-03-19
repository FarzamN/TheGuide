import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { Color } from '../../../utils/Color'
import { Font } from '../../../utils/Font'
import TopThreeHeader from '../../../components/Header/TopThreeHeader'
import Timer from '../../../components/Timer/Timer'

const Prayer = () => {
    const [checkTab, SetCheckTab] = useState(1);
    return (
        <View style={styles.MainCon}>
            <View style={styles.TImerCon}>
                <View style={styles.TimerP1}>
                    <Text style={styles.MidPTSty}>Mid Prayer Ends :</Text>
                    {/* <Text style={[styles.MidPTSty,{color:'#FF8847'}]}>Mid Prayer Ends :</Text> */}
                    <Text style={styles.MidPTSty}>6 Hrs 19 Min 15 Sec</Text>
                </View>

                <TopThreeHeader
                    onPressOne={() => SetCheckTab(1)}
                    onPressTwo={() => SetCheckTab(2)}
                    onPressThree={() => SetCheckTab(3)}
                    checkTab={checkTab}
                    text1="Timer"
                    text2="Countdown"
                    text3="Number"
                />

                {checkTab == 1 && <Timer />}
            </View>
        </View>
    )
}

export default Prayer

const styles = StyleSheet.create({
    MainCon: {
        flex: 1,
        backgroundColor: '#0461FE'
    },
    TImerCon: {
        height:  265,
        backgroundColor: Color.LightSky,
        marginHorizontal: 8,
        borderRadius: 10,
        overflow: 'hidden',
        marginTop: 25,
        padding: 20
    },
    TimerP1: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 10
    },
    MidPTSty: {
        color: 'white',
        fontFamily: Font.font500,
        fontSize: 12,
    }
})