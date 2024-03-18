import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { Font } from '../../../utils/Font'
import LinearGradient from 'react-native-linear-gradient'
import BibleBottomBtn from '../../../components/Button/BibleBottomBtn'

const Bible = () => {
    const [selectTabs, setSelectTabs] = useState(1)
    return (
        <View style={{ flex: 1, backgroundColor: '#2d76f0' }}>
            <Text style={styles.MainTxt}>Bible</Text>
            <View style={{ flex: 1, paddingTop: 15 }}>
                <FlatList
                    data={DATA}
                    renderItem={({ item }) => {
                        return (
                            <LinearGradient
                                start={{ x: 0, y: 0 }}
                                end={{ x: 1, y: 0 }}
                                colors={['#23c6fd', '#2cbffd', '#3ab3fc', '#48a7fb']}
                                style={styles.MainBoxCon}>
                                <View style={{
                                    flex: .35,
                                    backgroundColor: 'white',
                                    flexDirection: 'row',
                                    borderBottomRightRadius: 10,
                                    borderBottomLeftRadius: 10
                                }}>

                                    <View style={{ flex: .25 }}>
                                        <TouchableOpacity
                                            activeOpacity={0.5}
                                            style={{
                                                flex: 1,
                                                justifyContent: 'center',
                                                alignItems: 'center',
                                                backgroundColor: '#ff7f7f',
                                                marginVertical: 6,
                                                marginHorizontal: 12,
                                                borderRadius: 5
                                            }}>
                                            <Text style={{
                                                color: 'white',
                                                fontFamily: Font.font400,
                                                fontSize: 16,
                                            }}>Due</Text>
                                        </TouchableOpacity>
                                    </View>

                                    <View style={{ flex: .6, justifyContent: 'center', alignItems: 'center' }}>
                                        <Text style={{
                                            color: '#48abf9',
                                            fontFamily: Font.font700,
                                            fontSize: 16,
                                            bottom: 2
                                        }}>{item.title}</Text>
                                    </View>

                                    <View style={{ flex: .15 }} />
                                </View>

                                <View
                                    style={{
                                        flex: .65,
                                        flexDirection: 'row'
                                    }}
                                >
                                    <View style={{ flex: .25, alignItems: 'center', paddingTop: 10 }}>
                                        <View style={{
                                            height: 45,
                                            width: 45,
                                            overflow: 'hidden',
                                        }}>
                                            <Image
                                                source={require('../../../assets/image/msg.png')}
                                                resizeMode='cover'
                                                style={{
                                                    height: '100%',
                                                    width: '100%',
                                                }}
                                            />
                                        </View>
                                    </View>
                                    <View style={{ flex: .75, alignItems: 'flex-end', justifyContent: 'center',flexDirection:"row" }}>

                                        <TouchableOpacity activeOpacity={0.4}>
                                        <LinearGradient
                                            start={{ x: 0, y: 0 }}
                                            end={{ x: 1, y: 0 }}
                                            colors={['#10ba03', '#16cb0e', '#33e81f', '#3bf023']}
                                            style={styles.VidConSty}
                                        >
                                            <Text style={{ color: 'white', fontFamily: Font.font500, fontSize: 14 }}>Video</Text>
                                        </LinearGradient>
                                        </TouchableOpacity>
                                      
                                        <TouchableOpacity activeOpacity={0.4}>
                                        <LinearGradient
                                            start={{ x: 0, y: 0 }}
                                            end={{ x: 1, y: 0 }}
                                            colors={['#ffc121', '#ffb035', '#ffa44a', '#ff9663']}
                                            style={styles.VidConSty}
                                        >
                                            <Text style={{ color: 'white', fontFamily: Font.font500, fontSize: 14 }}>Text</Text>
                                        </LinearGradient>
                                        </TouchableOpacity>

                                    </View>
                                </View>
                            </LinearGradient>
                        )
                    }}
                />
            </View>
            <View
                style={{
                    height: 105,
                    flexDirection: 'row'
                }}
            >
                <BibleBottomBtn
                    selectTabs={selectTabs}
                    onPress={() => setSelectTabs(1)}
                    num={1}
                    title='Old Testament'
                />
                <BibleBottomBtn
                    margH
                    selectTabs={selectTabs}
                    onPress={() => setSelectTabs(2)}
                    num={2}
                    title='New Testament'
                />
                <BibleBottomBtn
                    selectTabs={selectTabs}
                    onPress={() => setSelectTabs(3)}
                    num={3}
                    title='Memory'
                />


            </View>

        </View>
    )
}

export default Bible

const styles = StyleSheet.create({
    MainTxt: {
        fontFamily: Font.font500,
        color: 'white',
        textAlign: 'center',
        fontSize: 20
    },
    MainBoxCon: {
        height: 130,
        marginBottom: 10,
        marginHorizontal: 10,
        overflow: 'hidden',
        borderRadius: 4,
    },
    VidConSty:{
        height: 35,
        width: 85,
        marginBottom: 10,
        marginRight: 5,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

const DATA = [
    {
        id: '1',
        title: 'Zacharias and Gabriel',
    },
]