import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient'
import { Font } from '../../utils/Font'

const TabsBtn = ({item,indx,selectTabs,onPress}) => {
  return (
    <TouchableOpacity activeOpacity={0.4}  onPress={onPress} >
    <LinearGradient 
    start={{x: 0, y: 0}}
     end={{x: 1, y: 0}} 
     colors={ indx == selectTabs ? ['#ff8748','#ff8748','#ff8748'] :  ['#21c8fe', '#33b8fc', '#46a8fb']} 
     style={{
      height: 30,
      width: 80,
      backgroundColor: indx == selectTabs ? '#ff8748' : 'transparent',
      margin: 5,
      borderRadius: 5,
      justifyContent: 'center',
      alignItems: 'center',
    }}>
      <Text
        style={{
          fontFamily: Font.font700,
          fontSize: 12,
          color: 'white',
          textTransform: 'uppercase'
        }}>{item.title}</Text>
    </LinearGradient>
  </TouchableOpacity>
  )
}

export default TabsBtn

const styles = StyleSheet.create({})