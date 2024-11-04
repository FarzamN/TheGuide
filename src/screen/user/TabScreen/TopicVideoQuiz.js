import {
  Animated,
  BackHandler,
  Dimensions,
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import {Color} from '../../../utils/Color';
import TestHeader from '../../../components/Header/TestHeader';
import LinearGradient from 'react-native-linear-gradient';
import {Font} from '../../../utils/Font';
import Icon, {IconType} from 'react-native-dynamic-vector-icons';
import VideoPlayer from 'react-native-video-player';
import LottieView from 'lottie-react-native';

const SCREEN_HEIGHT = Dimensions.get('window').height;

const DATA = [
  {
    id: '1',
    answer: '',
  },
  {
    id: '2',
    answer: '',
  },
  {
    id: '3',
    answer: '',
  },
  {
    id: '4',
    answer: '',
  },
  {
    id: '5',
    answer: '',
  },
];

const TopicVideoQuiz = ({navigation}) => {
  const [myData, setMyData] = useState(DATA);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isType, setIsType] = useState('');
  const [coinsShow, setCoinsShow] = useState(false);
  const [answerIndx, setAnswerIndx] = useState(0);
  const [totalCoins, setTotalCoins] = useState(0);
  const animatedShowValue2 = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const handleBackPress = () => {
      setMyData(DATA);
      navigation.goBack();
      return true;
    };

    BackHandler.addEventListener('hardwareBackPress', handleBackPress);

    return () => {
      BackHandler.removeEventListener('hardwareBackPress', handleBackPress);
    };
  }, []);

  // setTimeout(() => {
  //     setIsPlaying(!isPlaying)
  // }, 1000);

  //     const numbers = [23,55,21,87,56];
  // let maxValue = Math.max(...numbers);

  const handleSubmit = elm => {
    setIsType(elm);
    if (elm == 'false') {
      if (answerIndx < DATA.length) {
        myData[answerIndx].answer = 'w';
        setAnswerIndx(answerIndx + 1);
      }
    } else {
      setCoinsShow(true);
      setTotalCoins(totalCoins + 10);
      Animated.spring(animatedShowValue2, {
        toValue: 1,
        delay: 100,
        duration: 500,
        useNativeDriver: true,
      }).start(({finished}) => {
        if (finished) {
          setTimeout(() => {
            setCoinsShow(false);
            Animated.timing(animatedShowValue2, {
              toValue: 0,
              duration: 0,
              useNativeDriver: true,
            }).reset();
          }, 1000);
        }
      });
    }
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: Color.HeaderSky}}>
      <StatusBar backgroundColor={Color.HeaderSky} barStyle={'light-content'} />
      <TestHeader name="Different kinds of player" />

      <View style={{height: 200}}>
        <VideoPlayer
          resizeMode="cover"
          video={{
            uri: 'https://sassolution.org/funeral/storage/app/public/test.mp4',
          }}
          style={{
            width: '100%',
            height: '100%',
          }}
          autoplay={true}
          showDuration={true}
          paused={isPlaying}
        />
      </View>

      <LinearGradient
        start={{x: 1, y: 1}}
        end={{x: 2, y: 2}}
        colors={['#5261E4', '#404AD3', '#3ab3fc', '#4F5BCE']}
        style={{flex: 1}}>
        <View
          style={{
            height: 55,
            borderBottomColor: '#404AD3',
            borderWidth: 1,
            flexDirection: 'row',
          }}>
          <View
            style={{
              flex: 0.65,
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            {myData.map((item, index) => {
              return (
                <View
                  key={index}
                  style={{
                    height: 25,
                    width: 35,
                    backgroundColor: item.answer == 'w' ? 'white' : 'red',
                    borderWidth: 1,
                    borderColor: 'white',
                    borderRadius: 6,
                    marginLeft: 4,
                  }}
                />
              );
            })}
          </View>

          <View
            style={{
              flex: 0.35,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <View
              style={{
                height: 25,
                width: 85,
                borderRadius: 20,
                borderWidth: 1.3,
                borderColor: Color.LineDarkBlue,
                flexDirection: 'row',
                backgroundColor: '#FFFFFF',
              }}>
              <View
                style={{
                  height: 35,
                  width: 35,
                  borderRadius: 100,
                  alignSelf: 'flex-end',
                  top: 6,
                  left: -6,
                  overflow: 'hidden',
                }}>
                <Image
                  style={{
                    height: '100%',
                    width: '100%',
                  }}
                  source={require('../../../assets/image/coin.png')}
                  resizeMode="cover"
                />
              </View>
              <View style={{flex: 1}}>
                <Text
                  style={{
                    color: Color.LineDarkBlue,
                    fontFamily: Font.font700,
                    fontSize: 15,
                    textAlign: 'center',
                    right: 7,
                    top: 1,
                  }}>
                  {totalCoins}
                </Text>
              </View>
            </View>
          </View>
        </View>

        <View style={styles.MainShadowCon}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <Text
              style={{
                fontFamily: Font.font700,
                fontSize: 18,
                color: '#3F4ADA',
              }}>
              God hears our prayers
            </Text>
          </ScrollView>
        </View>

        <View style={styles.shadowSty1} />
        <View style={styles.shadowSty2} />

        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <TouchableOpacity
            onPress={() => handleSubmit('true')}
            activeOpacity={0.8}
            disabled={!isPlaying}>
            <LinearGradient
              start={{x: 0, y: 0}}
              end={{x: 1, y: 0}}
              colors={
                !isPlaying
                  ? ['#D3D3D3', '#D3D3D3', '#D3D3D3', '#D3D3D3']
                  : ['#36BE18', '#36BE18', '#81E015', '#81E015']
              }
              // colors={['#36BE18', '#36BE18', '#81E015', '#81E015']}
              style={{
                height: 65,
                width: 110,
                backgroundColor: 'red',
                borderRadius: 20,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Icon
                size={30}
                name="check"
                color={Color.white}
                type={IconType.FontAwesome}
              />
              <Text
                style={{
                  fontFamily: Font.font700,
                  color: 'white',
                  fontSize: 12,
                  bottom: 3,
                }}>
                TRUE
              </Text>
            </LinearGradient>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => handleSubmit('false')}
            activeOpacity={0.8}
            disabled={!isPlaying}>
            <LinearGradient
              start={{x: 0, y: 0}}
              end={{x: 1, y: 0}}
              colors={
                !isPlaying
                  ? ['#D3D3D3', '#D3D3D3', '#D3D3D3', '#D3D3D3']
                  : ['#FF314F', '#FF3342', '#FF2E73', '#FF3060']
              }
              // colors={['#FF314F', '#FF3342', '#FF2E73', '#FF3060']}
              style={{
                height: 65,
                width: 110,
                backgroundColor: 'red',
                borderRadius: 20,
                marginLeft: 20,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Icon
                size={35}
                name="cross"
                color={Color.white}
                type={IconType.Entypo}
              />
              <Text
                style={{
                  fontFamily: Font.font700,
                  color: 'white',
                  fontSize: 12,
                  bottom: 5,
                }}>
                FALSE
              </Text>
            </LinearGradient>
          </TouchableOpacity>
          {coinsShow && (
            <Animated.View
              style={[
                {
                  height: 45,
                  width: 50,
                  position: 'absolute',
                  zIndex: 9999,
                  bottom: 20,
                  right: '20%',
                },
                {
                  transform: [
                    {
                      translateY: animatedShowValue2.interpolate({
                        inputRange: [0, 1],
                        outputRange: [0, -(SCREEN_HEIGHT * 1) / 1.8],
                      }),
                    },
                    {
                      translateX: animatedShowValue2.interpolate({
                        inputRange: [0, 1],
                        outputRange: [isType == 'false' ? 0 : -150, 40],
                      }),
                    },
                  ],
                },
              ]}>
              <LottieView
                style={{
                  height: '100%',
                  width: '100%',
                }}
                source={require('../../../components/Lootie/coins3.json')}
                autoPlay
                loop
                // speed={0.7}
              />
            </Animated.View>
          )}
        </View>
      </LinearGradient>
    </SafeAreaView>
  );
};

export default TopicVideoQuiz;

const styles = StyleSheet.create({
  MainShadowCon: {
    height: 280,
    width: '80%',
    backgroundColor: 'white',
    alignSelf: 'center',
    marginTop: 20,
    borderRadius: 8,
    zIndex: 9999,
    shadowColor: 'rgba(0,0,0)',
    shadowOffset: [1, 1],
    shadowRadius: 1,
    shadowOpacity: 0.4,
    elevation: 1,
    padding: 10,
  },
  shadowSty1: {
    height: 50,
    width: '65%',
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    alignSelf: 'center',
    marginTop: 20,
    borderRadius: 8,
    zIndex: 999,
    position: 'absolute',
    bottom: 125,
    shadowColor: 'rgba(0,0,0)',
    shadowOffset: [1, 1],
    shadowRadius: 1,
    shadowOpacity: 0.4,
    elevation: 1,
  },
  shadowSty2: {
    height: 50,
    width: '50%',
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    alignSelf: 'center',
    marginTop: 20,
    borderRadius: 8,
    zIndex: 99,
    position: 'absolute',
    bottom: 115,
    shadowColor: 'rgba(0,0,0)',
    shadowOffset: [1, 1],
    shadowRadius: 1,
    shadowOpacity: 0.4,
    elevation: 1,
  },
});
