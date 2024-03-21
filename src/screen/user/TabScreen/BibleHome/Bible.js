import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { Font } from '../../../../utils/Font'
import LinearGradient from 'react-native-linear-gradient'
import BibleBottomBtn from '../../../../components/Button/BibleBottomBtn'
import BibleCard from '../../../../components/Cards/BibleCard'
import { useNavigation } from '@react-navigation/native'

const Bible = () => {
    const navigation = useNavigation()
    return (
        <View style={{ flex: 1, backgroundColor: '#2d76f0' }}>
            <Text style={styles.MainTxt}>Bible</Text>

            <View style={{ flex: 1, paddingTop: 15 }}>
                <FlatList
                    data={DATA}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => {
                        return (
                          <BibleCard 
                          item={item} 
                          name1='Video' 
                          name2='Test' 
                          onPress2={() => navigation.navigate('bibletest')}
                          />
                        )
                    }}
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
})

const DATA = [
    {
        id: '1',
        title: 'Zacharias and Gabriel',
    },
]