import { StyleSheet, Text, TextInput, Touchable, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import Icon, { IconType } from 'react-native-dynamic-vector-icons'
import { Font } from '../../utils/Font'
import { Color } from '../../utils/Color'
import AsyncStorage from '@react-native-async-storage/async-storage';


const CountDown = () => {
    const [hours, setHours] = useState('');
    const [minutes, setMinutes] = useState('');
    const [seconds, setSeconds] = useState('');
    const [isRunning, setIsRunning] = useState(false);
    const [disableInputs, setDisableInputs] = useState(false);
    const countdownRef = useRef(null);

    

    useEffect(() => {
        const loadCountdown = async () => {
            try {
                const savedCountdown = await AsyncStorage.getItem('countdown');
                console.log('savedCountdown', savedCountdown)
                if (savedCountdown) {
                    const { hours, minutes, seconds, isRunning } = JSON.parse(savedCountdown);
                    setHours(hours);
                    setMinutes(minutes);
                    setSeconds(seconds);
                    setIsRunning(isRunning);
                    setDisableInputs(isRunning);
                }
            } catch (error) {
                console.log('Failed to load countdown from AsyncStorage', error);
            }
        };

        loadCountdown();
    }, []);

    useEffect(() => {
        const saveCountdown = async () => {
            try {
                await AsyncStorage.setItem('countdown', JSON.stringify({ hours, minutes, seconds, isRunning }));
            } catch (error) {
                console.log('Failed to save countdown to AsyncStorage', error);
            }
        };

        saveCountdown();
    }, [hours, minutes, seconds, isRunning]);

    useEffect(() => {
        let totalSeconds = parseInt(hours) * 3600 + parseInt(minutes) * 60 + parseInt(seconds);

        if (isRunning) {
            const timerId = setInterval(() => {
                if (totalSeconds <= 0) {
                    setIsRunning(false);
                    setDisableInputs(false);
                    clearInterval(timerId);
                    return;
                }
                totalSeconds--;
                const hrs = Math.floor(totalSeconds / 3600);
                const mins = Math.floor((totalSeconds % 3600) / 60);
                const secs = totalSeconds % 60;
                setHours(String(hrs).padStart(2, '0'));
                setMinutes(String(mins).padStart(2, '0'));
                setSeconds(String(secs).padStart(2, '0'));
            }, 1000);
            countdownRef.current = timerId;
        } else {
            clearInterval(countdownRef.current);
        }

        return () => clearInterval(countdownRef.current);
    }, [isRunning]);

    const startCountdown = () => {
        setDisableInputs(true);
        setIsRunning(true);
    };
    const stopCountdown = () => {
        setIsRunning(false);
        setDisableInputs(false);
    };
    const resetCountdown = () => {
        setIsRunning(false);
        setDisableInputs(false);
        setHours('');
        setMinutes('');
        setSeconds('');
    };
//     console.log('hours', hours)
//     console.log('minutes', minutes)
//     console.log('seconds', seconds)
// console.log('(!hours && !minutes && !seconds)', (hours ==  '00' && minutes ==  '00' && seconds ==  '00'))
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
                        editable={!disableInputs}
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
                        editable={!disableInputs}
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
                        editable={!disableInputs}
                        placeholderTextColor={'#004FB4'}
                    />
                </View>
            </View>
            {/* <Text style={styles.timer}>{`${hours}:${minutes}:${seconds}`}</Text> */}
            <View style={styles.MultipleBtnCon}>
                <TouchableOpacity
                    onPress={startCountdown}
                    style={[styles.BtnCon, { backgroundColor: !isRunning ? '#05BEF7' : '#2697E3' }]}
                    disabled={isRunning || (!hours && !minutes && !seconds)}
                >
                    <Text style={styles.BtnTxt}>Start</Text>
                </TouchableOpacity>

                <TouchableOpacity style={[styles.BtnCon, { backgroundColor: isRunning ? '#05BEF7' : '#2697E3' }]} disabled={!isRunning}>
                    <Text style={styles.BtnTxt}>Save</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={resetCountdown}
                    style={[styles.BtnCon, { backgroundColor: isRunning ? '#05BEF7' : '#2697E3' }]}
                    disabled={!isRunning}>
                    <Text style={styles.BtnTxt}>Reset</Text>
                </TouchableOpacity>

                <TouchableOpacity style={[styles.BtnCon, { backgroundColor: '#80D752' }]}>
                    <Text style={styles.BtnTxt}>Bonus</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default CountDown

const styles = StyleSheet.create({
    MainBox: {
        height: 95,
        backgroundColor: '#004FB4',
        marginVertical: 12,
        flexDirection: 'row',
        borderRadius: 4,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: 'rgba(0,0,0)',
        shadowOffset: [1, 1],
        shadowRadius: 1,
        shadowOpacity: 0.4,
        elevation: 1
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
        fontFamily: Font.font400,
    },
    TimrTxt: {
        color: 'black',
        fontFamily: Font.font400,
        fontSize: 20
    }
})