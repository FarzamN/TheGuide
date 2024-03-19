import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Color } from '../../utils/Color'
import { Font } from '../../utils/Font'

const BoostTime = (props) => {
    const { onPress,selectBoost } = props
    return (
        <View style={styles.MainCon}>
            <ScrollView horizontal>
                {
                    MNTDATA.map((item, index) => {
                        return (
                            <TouchableOpacity
                                key={index}
                                style={styles.BoostCon}
                                activeOpacity={0.8}
                                onPress={onPress}
                            >
                                <Text style={styles.tymText1}>{index + 1}X</Text>
                                <View style={[styles.mntCon,{
                                    backgroundColor: selectBoost == index ? '#EBC34A'  :  '#004FB4',
                                }]}>
                                    <Text style={[styles.mntTxt,{
                                        color: selectBoost == index ?  '#004FB4' : 'white'
                                    }]}>{item.mnts}</Text>
                                </View>
                                {
                                    item.goal &&
                                    <Text style={[styles.tymText1, { color: 'yellow' }]}>{item.goal}</Text>
                                }
                            </TouchableOpacity>
                        )
                    })
                }

            </ScrollView>
        </View>
    )
}

export default BoostTime

const styles = StyleSheet.create({
    MainCon: {
        height: 75,
        marginHorizontal: 8,
        marginTop: 10,
        borderRadius: 10,
        backgroundColor: Color.LightSky,
        overflow: 'hidden',
        shadowColor: 'rgba(0,0,0)',
        shadowOffset: [1, 1],
        shadowRadius: 1,
        shadowOpacity: 0.4,
        elevation: 1
    },
    BoostCon: {
        height: '100%',
        width: 37,
        // justifyContent:'center',
        alignItems: 'center',
        paddingTop: 10,
        marginLeft: 5
    },
    tymText1: {
        color: 'white',
        fontFamily: Font.font500,
        fontSize: 12
    },
    mntCon: {
        height: 25,
        width: '100%',
        backgroundColor: '#004FB4',
        borderRadius: 2,
        justifyContent: 'center',
        alignItems: 'center'
    },
    mntTxt: {
        color: 'white',
        fontFamily: Font.font400,
        fontSize: 10
    }
})

const MNTDATA = [
    {
        id: '1',
        mnts: '0 Min',
        goal: ''
    },
    {
        id: '2',
        mnts: '5 Min',
        goal: 'Goal'
    },
    {
        id: '3',
        mnts: '10 Min',
        goal: ''
    },
    {
        id: '4',
        mnts: '15 Min',
        goal: ''
    },
    {
        id: '5',
        mnts: '30 Min',
        goal: ''
    },
    {
        id: '6',
        mnts: '1 Hr',
        goal: ''
    },
    {
        id: '7',
        mnts: '1.5 Hr',
        goal: ''
    },
    {
        id: '8',
        mnts: '2 Hr',
        goal: ''
    },
]