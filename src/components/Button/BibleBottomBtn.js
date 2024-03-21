import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient'
import { Font } from '../../utils/Font'

const BibleBottomBtn = ({ num, margH, selectTabs, onPress, title }) => {

  
    return (
        <TouchableOpacity activeOpacity={0.8} onPress={onPress}>
            <LinearGradient
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                colors={selectTabs == num ? ['#3a8a05', '#3a8a05', '#3a8a05'] : ['#89de49', '#76d452', '#6ccb52']}
                style={{
                    height: '100%',
                    width: 120,
                    marginHorizontal: margH ? 3 : 0,
                    // justifyContent:'center',
                    alignItems: 'center',
                    paddingTop: 20
                }}
            >
                <Text style={styles.titleSty}>{title}</Text>
                <View
                    style={{
                        height: 5,
                        width: 80,
                        backgroundColor: '#b0b5bd',
                        flexDirection: 'row',
                        marginVertical: 10,
                        overflow: 'hidden'
                    }}>
                    <View style={{ height: '100%', width: '5%', backgroundColor: 'white' }} />
                </View>

                <Text style={styles.nameSty}>{num}</Text>
            </LinearGradient>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    titleSty: {
        color: 'white',
        fontFamily: Font.font500,
        fontSize: 16
    },
    nameSty: {
        color: 'white',
        fontFamily: Font.font700,
        fontSize: 30,
        bottom: 10,
        textShadowColor: 'rgba(0, 0, 0, 0.75)',
        textShadowOffset: { width: 0, height: 2 },
        textShadowRadius: 2
    },
})
export default BibleBottomBtn
