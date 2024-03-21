import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { Font } from '../../../../utils/Font'
import LinearGradient from 'react-native-linear-gradient'
import BibleBottomBtn from '../../../../components/Button/BibleBottomBtn'
import BibleCard from '../../../../components/Cards/BibleCard'

const BibleMemory = () => {
  return (
    <View style={{ flex: 1, backgroundColor: '#2d76f0' }}>
            <Text style={styles.MainTxt}>Bible</Text>

            <View style={{ flex: 1, paddingTop: 15 }}>
                <FlatList
                    data={DATA}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => {
                        return (
                          <BibleCard item={item} name1='Learn' name2='Test' />
                        )
                    }}
                />
            </View>

        </View>
  )
}

export default BibleMemory

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
        title: 'Day1',
    },
]