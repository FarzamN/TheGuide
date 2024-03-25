import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient'
import { Font } from '../../utils/Font'

const ModeCard = (props) => {
  const { bgColor , speed, mode} = props

  const green = ['#00FE52', '#08E63F', '#13C126', '#18B921']
  const orange = [ '#EF9A2E', '#EF9A2E' , '#FF5E00' ]
  const red = [ '#FF3F3F',  '#FF0C0B' ]

  return (
    <LinearGradient
      start={{ x: 1.1, y: 0 }}
      end={{ x: 1, y: 1 }}
      colors={bgColor == 'green' ? green : bgColor == 'orange' ? orange : red}
      style={{
        height: 90,
        width: 75,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <Text style={{ color: 'white', fontFamily: Font.font700, fontSize: 12 }}>{speed}</Text>
        <Text style={{ color: 'white', fontFamily: Font.font700, fontSize: 15 }}>{mode}</Text>
    </LinearGradient>
  )
}

export default ModeCard

const styles = StyleSheet.create({})