const yourNum = 3700;
const total = 6000;

const Percentage = (yourNum / total) * 100;

console.log(Math.floor(Percentage.toFixed(0, 2)));

// import {style} from './style';
// import {ScrollView, View} from 'react-native';
// import {useDispatch, useSelector} from 'react-redux';
// import {GlobalStyle} from '../../../utils/GlobalStyle';
// import {useFocusEffect} from '@react-navigation/native';
// import MoVideoPlayer from 'react-native-mo-video-player';
// import {getGameApi} from '../../../redux/actions/UserAction';
// import React, {useCallback, useEffect, useState, Fragment} from 'react';
// import {Body, GameBtn, GameHeader, Loader, Text} from '../../../components';
// import {Image_Url} from '../../../utils/Urls';

// const GameScreen = ({navigation, route}) => {
//   const dispatch = useDispatch();
//   const {item} = route.params;
//   const get_game = useSelector(state => state.get_game);
//   // console.log('get_game', get_game);
//   const {goBack, getParent} = navigation;
//   const [load, setLoad] = useState(false);
//   const [displayedText, setDisplayedText] = useState('');
//   const fullText =
//     'what is the results of not walking in obedience to the light.';

//   useFocusEffect(
//     useCallback(() => {
//       getParent().setOptions({
//         tabBarStyle: GlobalStyle.HideBar,
//       });
//     }, []),
//   );

//   useEffect(() => {
//     let index = 0;
//     const interval = setInterval(() => {
//       setDisplayedText(prev => prev + fullText[index]);
//       index += 1;

//       if (index >= fullText.length) {
//         clearInterval(interval);
//       }
//     }, 200);

//     return () => clearInterval(interval);
//   }, []);
//   useEffect(() => {
//     dispatch(getGameApi(setLoad, item.id));
//   }, []);
//   return (
//     <Body>
//       <GameHeader
//         progress={0.5}
//         title={item.course_name}
//         subTitle={item.game_title}
//         onClose={goBack}
//       />
//       {get_game.map((game, index) => {
//         // console.log(
//         //   'game',
//         //   game.game_question['question and answer']['1']['text'],
//         // );
//         Object.entries(game.game_question['question and answer'])
//           .sort()
//           .map(([key, value], index) => {
//             console.log('key', key);
//             console.log('value', value);
//           });
//         return (
//           <Fragment key={index}>
//             <MoVideoPlayer
//               style={style.videoPlayer}
//               source={{
//                 uri: game.game_header_data[0].file[0].src,
//               }}
//               poster={Image_Url + game.image_app}
//               autoPlay
//               playInBackground={false}
//               showHeader={false}
//               showSeeking10SecondsButton={false}
//             />
//             <ScrollView style={GlobalStyle.Padding}>
//               <Text center style={style.GameTitle} title={fullText} />
//               <Text style={style.GameSubText} title={'according to john 1:4'} />
//               <View style={{height: 15}} />
//               <View style={GlobalStyle.mapContaner}>
//                 {[
//                   {title: 'condemnation', color: '#00CE64'},
//                   {title: 'Forgiveness', color: '#FD8D34'},
//                   {title: 'Blessing', color: '#0088FE'},
//                   {title: 'condemnation', color: '#792DFD'},
//                 ].map((game, i) => (
//                   <GameBtn key={i} data={game} />
//                 ))}
//               </View>
//             </ScrollView>
//           </Fragment>
//         );
//       })}
//       <Loader visible={load} />
//     </Body>
//   );
// };

// export default GameScreen;
