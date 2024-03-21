import { Alert, Linking, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { Color } from '../../../utils/Color'
import { Font } from '../../../utils/Font'
import TopThreeHeader from '../../../components/Header/TopThreeHeader'
import Timer from '../../../components/Timer/Timer'
import CountDown from '../../../components/Timer/CountDown'
import Number from '../../../components/Timer/Number'
import BoostTime from '../../../components/BoostTime/BoostTime'
import { check, request, PERMISSIONS, RESULTS } from 'react-native-permissions';

const Prayer = () => {
    const [checkTab, SetCheckTab] = useState(1);
    const [selectBoost, SetSelectBoost] = useState(0);

    const openCalendar = async () => {
        if (Platform.OS == 'android') {
            Linking.openURL('content://com.android.calendar/time/');
        } else {
            Linking.openURL('calshow://');
        }
    };
    const openMaps = async () => {
        const latitude = 37.78825;
        const longitude = -122.4324;
        const label = 'Custom Label';

        let url;
        if (Platform.OS === 'android') {
            url = `geo:${latitude},${longitude}?q=${latitude},${longitude}(${label})`;
        } else {
            url = `http://maps.apple.com/?ll=${latitude},${longitude}&q=${label}`;
        }

        Linking.openURL(url);
    };

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
                {checkTab == 2 && <CountDown />}
                {checkTab == 3 && <Number />}
            </View>

            <BoostTime selectBoost={selectBoost} />

            <View style={styles.BtnCon}>
                <TouchableOpacity style={styles.BtnBox} activeOpacity={0.7} onPress={openMaps}>
                    <Text style={styles.BtnTxt}>Map</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.BtnBox} activeOpacity={0.7} onPress={openCalendar}>
                    <Text style={styles.BtnTxt}>Calendar</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Prayer

const styles = StyleSheet.create({
    MainCon: {
        flex: 1,
        backgroundColor: Color.SecLightSky
    },
    TImerCon: {
        height: 260,
        backgroundColor: Color.LightSky,
        marginHorizontal: 8,
        borderRadius: 10,
        overflow: 'hidden',
        marginTop: 25,
        padding: 20,
        shadowColor: 'rgba(0,0,0)',
        shadowOffset: [1, 1],
        shadowRadius: 1,
        shadowOpacity: 0.4,
        elevation: 1
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
    },
    BtnCon: {
        height: 55,
        backgroundColor: '#004FB4',
        marginTop: 40,
        lexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        flexDirection: 'row'
    },
    BtnBox: {
        height: '80%',
        width: 80,
        borderWidth: 1,
        borderColor: '#6FC64E',
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center'
    },
    BtnTxt: {
        color: '#6FC64E',
        fontFamily: Font.font500,
        fontSize: 13
    }
})