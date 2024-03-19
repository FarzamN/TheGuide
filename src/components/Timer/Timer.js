import { StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import Icon, { IconType } from 'react-native-dynamic-vector-icons'
import { Font } from '../../utils/Font'
import { Color } from '../../utils/Color'


const Timer = () => {
    const [startTimr, setStartTimr] = useState(false)
    const [saveTimr, setSaveTimr] = useState(false)
    const [resetTimr, setResetTimr] = useState(false)

    return (
        <View style={{ flex: 1 }}>
            <View style={styles.MainBox}>
                <View style={styles.InputCon}></View>
                <Icon
                    style={styles.DotCon}
                    type={IconType.Entypo}
                    name='dots-two-vertical'
                    size={18}
                    color={'white'}
                />
                <View style={styles.InputCon}></View>

                <Icon
                    style={styles.DotCon}
                    type={IconType.Entypo}
                    name='dots-two-vertical'
                    size={18}
                    color={'white'}
                />

                <View style={styles.InputCon}></View>
            </View>

            <View style={styles.MultipleBtnCon}>
                <TouchableOpacity 
                style={[styles.BtnCon, { backgroundColor: !startTimr ? '#05BEF7' :  '#2697E3' }]}
                disabled={startTimr}
                >
                    <Text style={styles.BtnTxt}>Start</Text>
                </TouchableOpacity>

                <TouchableOpacity style={[styles.BtnCon, { backgroundColor: startTimr ? '#05BEF7' :  '#2697E3' }]} disabled={!startTimr}>
                    <Text style={styles.BtnTxt}>Save</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                style={[styles.BtnCon, { backgroundColor: startTimr ? '#05BEF7' :  '#2697E3' }]}
                disabled={!startTimr}>
                    <Text style={styles.BtnTxt}>Reset</Text>
                </TouchableOpacity>

                <TouchableOpacity style={[styles.BtnCon, { backgroundColor: '#80D752' }]}>
                    <Text style={styles.BtnTxt}>Bonus</Text>
                </TouchableOpacity>
            </View>
        </View>

    )
}

export default Timer

const styles = StyleSheet.create({
    MainBox: {
        height: 95,
        backgroundColor: '#004FB4',
        marginVertical: 12,
        flexDirection: 'row',
        borderRadius: 4,
        justifyContent: 'center',
        alignItems: 'center'
    },
    InputCon: {
        height: 60,
        width: 45,
        backgroundColor: 'white',
        borderRadius: 8,
        overflow: 'hidden',

    },
    DotCon: {
        marginHorizontal: 5
    },
    MultipleBtnCon: {
        height: 40,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    BtnCon: {
        height: 25,
        width: 55,
        backgroundColor: '#05BEF7',
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: 'rgba(0,0,0)',
        shadowOffset: [1, 1],
        shadowRadius: 1,
        shadowOpacity: 0.4,
        elevation: 1
    },
    BtnTxt: {
        color: 'white',
        fontFamily: Font.font400
    }
})