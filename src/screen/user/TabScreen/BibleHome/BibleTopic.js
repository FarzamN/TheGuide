import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { Font } from '../../../../utils/Font'
import LinearGradient from 'react-native-linear-gradient'
import BibleBottomBtn from '../../../../components/Button/BibleBottomBtn'
import BibleCard from '../../../../components/Cards/BibleCard'

const BibleTopic = () => {
  return (
    <View style={{ flex: 1, backgroundColor: '#2d76f0' }}>
    <Text style={styles.MainTxt}>Topic</Text>

    <View style={{ flex: 1, paddingTop: 15 }}>
        <FlatList
            data={DATA}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => {
                return (
                  <BibleCard item={item} single name1='Play'  />
                )
            }}
        />
    </View>

</View>
  )
}

export default BibleTopic

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
        title: 'Different kinds of prayer',
        lock: ''
    },
    {
        id: '2',
        title: 'Different kinds of prayer',
        lock: 'lock'
    },
    {
        id: '3',
        title: 'Different kinds of prayer',
        lock: ''
    },
    {
        id: '4',
        title: 'Different kinds of prayer',
        lock: ''
    },
]