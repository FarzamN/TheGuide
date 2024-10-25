import React from 'react';
import {FlatList} from 'react-native';
import {style} from './style';
import {
  Body,
  DashboardHeader,
  Empty,
  HomeAssigmentCard,
} from '../../components';

const Home = () => {
  const data = [
    {
      sub: 'In the beginning God create.',
      isDue: 'Due',
    },
    {
      sub: 'Angel Gabriel visits Zacharias the priest.',
      isDue: 'Due',
    },
    {
      sub: 'The power of prayer.',
      isDue: 'Due',
    },
    {
      sub: '',
      isDue: 'Due',
    },
  ];
  return (
    <Body>
      <DashboardHeader />
      <FlatList
        data={data}
        keyExtractor={(_, i) => i.toString()}
        ListEmptyComponent={<Empty />}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={style.listContainer}
        renderItem={({item, index}) => {
          return <HomeAssigmentCard ix={index} data={item} />;
        }}
      />
    </Body>
  );
};

export default Home;

// import {
//   View,
//   Text,
//   StyleSheet,
//   ScrollView,
//   TouchableOpacity,
//   Image,
// } from 'react-native';
// import React, {useEffect, useState} from 'react';
// import {Body, DashboardHeader, MainHeader} from '../../components';
// import {Color} from '../../utils/Color';
// import {Font} from '../../utils/Font';
// import LinearGradient from 'react-native-linear-gradient';
// import TabsBtn from '../../components/Button/TabsBtn';
// import Bible from './TabScreen/BibleHome/Bible';
// import Prayer from './TabScreen/Prayer';
// import BibleBottomBtn from '../../components/Button/BibleBottomBtn';
// import BibleTopic from './TabScreen/BibleHome/BibleTopic';
// import BibleMemory from './TabScreen/BibleHome/BibleMemory';
// import RoundLoader from '../../components/Loaders/RoundLoader';
// import navigationColor from 'react-native-system-navigation-bar';

// const Home = () => {
//   const [selectTabs, setSelectTabs] = useState(0);
//   const [selectTestament, setSelectTestament] = useState(1);
//   const [testamentModal, settestamentModal] = useState(false);

//   const handleTestament = num => {
//     settestamentModal(true);

//     setTimeout(() => {
//       setSelectTestament(num);
//       settestamentModal(false);
//     }, 1500);
//   };

//   useEffect(() => {
//     navigationColor.setNavigationColor(Color.Sky);
//   }, []);
//   return (
//     <Body>
//       <DashboardHeader title={'Prayer'} />
//       <View style={styles.TopBoxMain}>
//         {selectTabs === 2 ? (
//           <ScrollView horizontal>
//             {statusData.map((item, indx) => {
//               return (
//                 <View
//                   key={indx}
//                   style={{
//                     height: 80,
//                     width: 75,
//                     backgroundColor: 'black',
//                     marginLeft: 10,
//                     marginRight: indx + 1 == statusData.length ? 10 : 0,
//                     borderRadius: 3,
//                     overflow: 'hidden',
//                   }}>
//                   <View
//                     style={{
//                       flex: 0.3,
//                       backgroundColor: '#F47A77',
//                       // borderBottomLeftRadius: 10,
//                       // borderBottomRightRadius: 10,
//                       justifyContent: 'center',
//                       alignItems: 'center',
//                     }}>
//                     <Text
//                       numberOfLines={1}
//                       style={{
//                         color: 'white',
//                         fontFamily: Font.font500,
//                         fontSize: 10,
//                         bottom: 1,
//                       }}>
//                       {item.title}
//                     </Text>
//                   </View>
//                   <View
//                     style={{
//                       flex: 0.7,
//                       justifyContent: 'center',
//                       alignItems: 'center',
//                     }}>
//                     <Image
//                       source={require('../../assets/image/msg.png')}
//                       resizeMode="cover"
//                       style={{
//                         height: '100%',
//                         width: '100%',
//                         position: 'absolute',
//                       }}
//                     />
//                     <Text
//                       numberOfLines={1}
//                       style={{
//                         color: 'white',
//                         fontFamily: Font.font500,
//                         fontSize: 12,
//                         bottom: 1,
//                       }}>
//                       {item.data}
//                     </Text>
//                   </View>
//                 </View>
//               );
//             })}
//           </ScrollView>
//         ) : (
//           <>
//             <View style={styles.TopImgCon}></View>

//             {topData.map((item, indx) => {
//               return (
//                 <View key={indx} style={styles.TopDataBox}>
//                   <Text style={styles.TopBoxTitle}>{item.title}</Text>
//                   <Text
//                     style={[
//                       styles.TopBoxDataTxt,
//                       {color: item.data == 'Due' ? 'red' : 'black'},
//                     ]}>
//                     {item.data}
//                   </Text>
//                 </View>
//               );
//             })}
//           </>
//         )}
//       </View>

//       <View
//         style={[
//           styles.MainCon,
//           {backgroundColor: selectTabs == 1 ? '#0461FE' : Color.Sky},
//         ]}>
//         <View style={{justifyContent: 'center', paddingVertical: 5}}>
//           <ScrollView horizontal>
//             {TABSDATA.map((item, indx) => {
//               return (
//                 <TabsBtn
//                   item={item}
//                   indx={indx}
//                   selectTabs={selectTabs}
//                   onPress={() => setSelectTabs(indx)}
//                 />
//               );
//             })}
//           </ScrollView>
//         </View>
//         {selectTabs == 0 && (
//           <>
//             {selectTestament == 1 && <Bible />}
//             {selectTestament == 2 && <BibleTopic />}
//             {selectTestament == 3 && <BibleMemory />}

//             {/* <View style={{height: 105, flexDirection: 'row'}}>
//               <BibleBottomBtn
//                 selectTabs={selectTestament}
//                 onPress={() => handleTestament(1)}
//                 num={1}
//                 title="Old Testament"
//               />
//               <BibleBottomBtn
//                 margH
//                 selectTabs={selectTestament}
//                 onPress={() => handleTestament(2)}
//                 num={2}
//                 title="New Testament"
//               />
//               <BibleBottomBtn
//                 selectTabs={selectTestament}
//                 onPress={() => handleTestament(3)}
//                 num={3}
//                 title="Memory"
//               />
//             </View> */}
//           </>
//         )}
//         {selectTabs == 1 && <Prayer />}
//       </View>

//       <RoundLoader isVisible={testamentModal} />
//     </Body>
//   );
// };

// export default Home;
// const styles = StyleSheet.create({
//   TopBoxMain: {
//     height: 117,
//     backgroundColor: Color.LightSky,
//     // borderRadius: 12,
//     borderBottomLeftRadius: 12,
//     borderBottomRightRadius: 12,
//     paddingTop: 16,
//     flexDirection: 'row',
//     marginBottom: 3,
//     overflow: 'hidden',
//     paddingHorizontal: 5,
//   },
//   TopImgCon: {
//     height: 80,
//     width: 70,
//     backgroundColor: 'white',
//     marginHorizontal: 10,
//   },
//   TopDataBox: {
//     height: 65,
//     width: 55,
//     backgroundColor: 'white',
//     margin: 5,
//     borderRadius: 6,
//   },
//   TopBoxTitle: {
//     fontFamily: Font.font500,
//     color: 'grey',
//     fontSize: 12,
//     textAlign: 'center',
//   },
//   TopBoxDataTxt: {
//     fontFamily: Font.font700,

//     fontSize: 20,
//     textAlign: 'center',
//     paddingTop: 5,
//   },
//   MainCon: {
//     flex: 1,
//     backgroundColor: Color.Sky,
//     borderTopLeftRadius: 10,
//     borderTopRightRadius: 10,
//   },
// });

// const topData = [
//   {
//     id: '1',
//     title: 'Bible',
//     data: 'Due',
//   },
//   {
//     id: '2',
//     title: 'Pray',
//     data: 'Due',
//   },
//   {
//     id: '3',
//     title: 'Streak',
//     data: '0X',
//   },
//   {
//     id: '4',
//     title: 'Status',
//     data: '1X',
//   },
// ];
// const TABSDATA = [
//   {
//     id: '1',
//     title: 'Bible',
//   },
//   {
//     id: '2',
//     title: 'prayer',
//   },
//   {
//     id: '3',
//     title: 'Status',
//   },
//   {
//     id: '4',
//     title: 'Events',
//   },
// ];
// const statusData = [
//   {
//     id: '1',
//     title: "Don't Pray",
//     data: 'Up to you',
//   },
//   {
//     id: '2',
//     title: 'Pray 5 mins',
//     data: '7 Days',
//   },
//   {
//     id: '3',
//     title: 'Pray 10 mins',
//     data: '14 Days',
//   },
//   {
//     id: '4',
//     title: 'Pray 15 mins',
//     data: '21 Days',
//   },
//   {
//     id: '5',
//     title: 'Pray 30 mins',
//     data: '28 Days',
//   },
//   {
//     id: '6',
//     title: 'Pray 1 Hr',
//     data: '60 Days',
//   },
//   {
//     id: '7',
//     title: 'Pray 1.5 Hr',
//     data: '120 Days',
//   },
// ];
