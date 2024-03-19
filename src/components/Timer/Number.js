import { StyleSheet, Text, TextInput, Touchable, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import Icon, { IconType } from 'react-native-dynamic-vector-icons'
import { Font } from '../../utils/Font'
import { Color } from '../../utils/Color'
import AsyncStorage from '@react-native-async-storage/async-storage';

const Number = () => {
    const [hours, setHours] = useState('');
    const [minutes, setMinutes] = useState('');
    const [seconds, setSeconds] = useState('');
    const [isRunning, setIsRunning] = useState(false);
    const [disableInputs, setDisableInputs] = useState(false);
    const countdownRef = useRef(null);


    return (
        <View style={{ flex: 1 }}>
            <View style={styles.MainBox}>
                <View style={styles.InputCon}>
                    <TextInput
                        style={styles.inputText}
                        keyboardType='number-pad'
                        value={hours}
                        onChangeText={text => setHours(text.replace(/[^0-9]/g, ''))}
                        placeholder="00"
                        maxLength={2}
                        placeholderTextColor={'#004FB4'}
                    />
                </View>
                <Icon
                    style={styles.DotCon}
                    type={IconType.Entypo}
                    name='dots-two-vertical'
                    size={18}
                    color={'white'}
                />
                <View style={styles.InputCon}>
                    <TextInput
                        style={styles.inputText}
                        keyboardType='number-pad'
                        value={minutes}
                        onChangeText={text => setMinutes(text.replace(/[^0-9]/g, ''))}
                        placeholder="00"
                        maxLength={2}
                        placeholderTextColor={'#004FB4'}
                    />
                </View>

                <Icon
                    style={styles.DotCon}
                    type={IconType.Entypo}
                    name='dots-two-vertical'
                    size={18}
                    color={'white'}
                />

                <View style={styles.InputCon}>
                    <TextInput
                        style={styles.inputText}
                        keyboardType='number-pad'
                        value={seconds}
                        onChangeText={text => setSeconds(text.replace(/[^0-9]/g, ''))}
                        placeholder="00"
                        maxLength={2}
                        placeholderTextColor={'#004FB4'}
                    />
                </View>
            </View>
            <View style={styles.MultipleBtnCon}>

                <TouchableOpacity style={[styles.BtnCon, { backgroundColor:  '#05BEF7' }]}>
                    <Text style={styles.BtnTxt}>Save</Text>
                </TouchableOpacity>

            </View>
        </View>
    )
}

export default Number

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
        width: 50,
        backgroundColor: 'white',
        borderRadius: 8,
        overflow: 'hidden',
        justifyContent: 'center',
        alignItems: 'center'
    },
    inputText: {
        flex: 1,
        textAlign: 'center',
        color: '#004FB4',
        fontFamily: Font.font400,
        fontSize: 20
    },
    DotCon: {
        marginHorizontal: 5
    },
    MultipleBtnCon: {
        height: 35,
        alignItems: 'center',
        justifyContent: 'center'
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
        fontFamily: Font.font400,
    },
    TimrTxt: {
        color: 'black',
        fontFamily: Font.font400,
        fontSize: 20
    }
})