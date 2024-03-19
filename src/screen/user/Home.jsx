import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { Body, MainHeader } from '../../components';
import { Color } from '../../utils/Color';
import { Font } from '../../utils/Font';
import LinearGradient from 'react-native-linear-gradient';
import TabsBtn from '../../components/Button/TabsBtn';
import Bible from './TabScreen/Bible';
import Prayer from './TabScreen/Prayer';

const Home = () => {
  const [selectTabs, setSelectTabs] = useState(0)
  return (
    <Body restyle={{ backgroundColor: '#3308b0' }}>
      <MainHeader title={'Bible School'} />
      <View style={styles.TopBoxMain}>
        <View style={styles.TopImgCon} >
        </View>

        {
          topData.map((item, indx) => {
            return (
              <View key={indx} style={styles.TopDataBox}>
                <Text style={styles.TopBoxTitle}>{item.title}</Text>
                <Text style={[styles.TopBoxDataTxt, { color: item.data == 'Due' ? 'red' : 'black', }]}>{item.data}</Text>
              </View>
            )
          })
        }

      </View>

      <View style={[styles.MainCon,{backgroundColor : selectTabs == 1 ? '#0461FE' : Color.Sky}]}>
        <View style={{ justifyContent: 'center',paddingVertical:5 }} >
          <ScrollView horizontal >
            {
              TABSDATA.map((item, indx) => {
                return (
                  <TabsBtn
                    item={item}
                    indx={indx}
                    selectTabs={selectTabs}
                    onPress={() => setSelectTabs(indx)}
                  />
                )
              })
            }
          </ScrollView>
        </View>

        {selectTabs == 0 && <Bible />  }
        {selectTabs == 1 && <Prayer />  }
      </View>
    </Body>
  );
};

export default Home;
const styles = StyleSheet.create({
  TopBoxMain: {
    height: 117,
    backgroundColor: Color.LightSky,
    // borderRadius: 12,
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
    paddingTop: 16,
    flexDirection: 'row',
    marginBottom: 3
  },
  TopImgCon: {
    height: 80,
    width: 70,
    backgroundColor: 'white',
    marginHorizontal: 10
  },
  TopDataBox: {
    height: 65,
    width: 55,
    backgroundColor: 'white',
    margin: 5,
    borderRadius: 6
  },
  TopBoxTitle: {
    fontFamily: Font.font500,
    color: 'grey',
    fontSize: 12,
    textAlign: 'center'
  },
  TopBoxDataTxt: {
    fontFamily: Font.font700,

    fontSize: 20,
    textAlign: 'center',
    paddingTop: 5
  },
  MainCon: {
    flex: 1,
    backgroundColor: Color.Sky,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  }
})

const topData = [
  {
    id: '1',
    title: 'Bible',
    data: 'Due'
  },
  {
    id: '2',
    title: 'Pray',
    data: 'Due'
  },
  {
    id: '3',
    title: 'Streak',
    data: '0X'
  },
  {
    id: '4',
    title: 'Status',
    data: '1X'
  },
]
const TABSDATA = [
  {
    id: '1',
    title: 'Bible',
  },
  {
    id: '2',
    title: 'prayer',
  },
  {
    id: '3',
    title: 'Status',
  },
  {
    id: '4',
    title: 'Events',
  },
]