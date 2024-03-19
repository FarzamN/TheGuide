import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { Font } from '../../../utils/Font'
import LinearGradient from 'react-native-linear-gradient'
import BibleBottomBtn from '../../../components/Button/BibleBottomBtn'
import BibleCard from '../../../components/Cards/BibleCard'

const Bible = () => {
    const [selectTabs, setSelectTabs] = useState(1)
    return (
        <View style={{ flex: 1, backgroundColor: '#2d76f0' }}>
            <Text style={styles.MainTxt}>Bible</Text>

            <View style={{ flex: 1, paddingTop: 15 }}>
                <FlatList
                    data={DATA}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => {
                        return (
                          <BibleCard item={item} />
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

})

const DATA = [
    {
        id: '1',
        title: 'Zacharias and Gabriel',
    },
]