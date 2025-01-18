import {
  Animated,
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
import {Font} from '../../../utils/Font';
import Icon, {IconType} from 'react-native-dynamic-vector-icons';
import {Color} from '../../../utils/Color';
import TestHeader from '../../../components/Header/TestHeader';
import LinearGradient from 'react-native-linear-gradient';
import {CustomButton} from '../../../components';

const SCREEN_HEIGHT = Dimensions.get('window').height;

const BibleTest = () => {
  const barColr = '#60462E';

  const animatedShowValue = useRef(new Animated.Value(0)).current;
  const animatedShowValue2 = useRef(new Animated.Value(0)).current;

  const [coinsShow, setCoinsShow] = useState(false);

  const openCloseAnimation = () => {
    const toValue = animatedShowValue._value === 0 ? 1 : 0;
    Animated.timing(animatedShowValue, {
      toValue,
      duration: 1000,
      useNativeDriver: false,
    }).start();
  };

  useEffect(() => {
    Animated.timing(animatedShowValue, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: false,
    }).start();
  }, []);
  const animatedContentStyle = {
    opacity: animatedShowValue.interpolate({
      inputRange: [0, 1],
      outputRange: [0, 1],
    }),
    transform: [
      {
        translateY: animatedShowValue.interpolate({
          inputRange: [0, 1],
          outputRange: [-20, 0], // Adjust the value as needed
        }),
      },
    ],
  };
  const animatedShowStyle = {
    height: animatedShowValue.interpolate({
      inputRange: [0, 1],
      outputRange: [40, (SCREEN_HEIGHT * 1) / 1.5],
    }),
  };

  const handleContinue = () => {
    openCloseAnimation();
  };

  // const startAnimation = () => {
  //     Animated.spring(animatedShowValue2, {
  //         toValue: 1,
  //         delay: 100,
  //         useNativeDriver: true
  //     }).start()
  // }

  const startAnimation = () => {
    setCoinsShow(true);
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
        }, 1500);
      }
    });
  };

  const phrase =
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#60462E'}}>
      <StatusBar backgroundColor={barColr} barStyle={'light-content'} />

      <TestHeader name="Zacharias and Gabriel" />

      <View
        style={{
          height: 100,
          marginHorizontal: 15,
          borderRadius: 10,
          // borderTopLeftRadius: 10,
          // borderTopRightRadius: 10,
          marginTop: 30,
          overflow: 'hidden',
        }}>
        <Image
          resizeMode="cover"
          style={{
            height: '100%',
            width: '100%',
          }}
          source={require('../../../assets/image/book.jpeg')}
        />
      </View>

      <Animated.View
        style={[
          {
            width: '85%',
            alignSelf: 'center',
            borderRadius: 5,
            // overflow: 'hidden',
            bottom: 10,
          },
          animatedShowStyle,
        ]}>
        <LinearGradient
          // start={{ x: 0, y: .1 }}
          // end={{ x: 1, y: 2 }}
          start={{x: 0, y: 2}}
          end={{x: 3, y: 2}}
          colors={[
            '#BDA173',
            '#E8CB9C',
            '#BDA173',
            '#E8CB9C',
            '#BDA173',
            '#E8CB9C',
            '#BDA173',
          ]}
          style={{
            flex: 1,
          }}>
          <Animated.View style={[styles.content, animatedContentStyle]}>
            <View
              style={{
                height: 40,
                flexDirection: 'row',
              }}>
              <View
                style={{
                  flex: 0.35,
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <View
                  style={{
                    height: 27,
                    width: 25,
                    borderRadius: 7,
                    backgroundColor: '#D6EFFC',
                    borderColor: 'black',
                    borderWidth: 1.5,
                  }}
                />
                <View
                  style={{
                    height: 27,
                    width: 25,
                    borderRadius: 7,
                    backgroundColor: '#D6EFFC',
                    borderColor: 'black',
                    borderWidth: 1.5,
                    marginHorizontal: 5,
                  }}
                />
                <View
                  style={{
                    height: 27,
                    width: 25,
                    borderRadius: 7,
                    backgroundColor: '#D6EFFC',
                    borderColor: 'black',
                    borderWidth: 1.5,
                  }}
                />
              </View>
              <View style={{flex: 0.3}}>
                <View
                  style={{
                    height: 70,
                    width: 70,
                    borderRadius: 100,
                    borderWidth: 4,
                    borderColor: '#94AEC6',
                    position: 'absolute',
                    top: -24,
                    zIndex: 9999,
                    alignSelf: 'center',
                    backgroundColor: '#303249',
                    justifyContent: 'center',
                    alignItems: 'center',
                    shadowColor: 'rgba(0,0,0)',
                    shadowOffset: [1, 1],
                    shadowRadius: 1,
                    shadowOpacity: 0.4,
                    elevation: 1,
                  }}>
                  <View
                    style={{
                      height: 40,
                      width: 40,
                      borderRadius: 100,
                      backgroundColor: '#D6D8DB',
                      shadowColor: 'rgba(0,0,0)',
                      shadowOffset: [1, 1],
                      shadowRadius: 1,
                      shadowOpacity: 0.4,
                      elevation: 1,
                    }}></View>
                </View>
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
                    width: 80,
                    borderRadius: 20,
                    borderWidth: 2,
                    borderColor: '#60462E',
                    flexDirection: 'row',
                  }}>
                  <View style={{flex: 1}}></View>
                  <View
                    style={{
                      height: 30,
                      width: 30,
                      borderRadius: 100,
                      borderWidth: 2,
                      borderColor: '#60462E',
                      alignSelf: 'flex-end',
                      top: 3,
                      left: 2,
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
                </View>
              </View>
            </View>

            <ScrollView
              style={{flex: 1, paddingTop: 20}}
              showsVerticalScrollIndicator={false}>
              <Text
                style={{
                  color: '#60462E',
                  fontWeight: '900',
                  fontSize: 18,
                  textAlign: 'center',
                }}>
                {phrase}
              </Text>
            </ScrollView>

            <TouchableOpacity activeOpacity={0.8} onPress={startAnimation}>
              <LinearGradient
                start={{x: 0, y: 2}}
                end={{x: 3, y: 2}}
                colors={[
                  '#5B7011',
                  '#94AA21',
                  '#5B7011',
                  '#94AA21',
                  '#5B7011',
                  '#94AA21',
                  '#5B7011',
                ]}
                style={{
                  height: 50,
                  width: '70%',
                  alignSelf: 'center',
                  borderRadius: 4,
                  zIndex: 999,
                  justifyContent: 'center',
                  alignItems: 'center',
                  // top: 10
                  marginVertical: 10,
                  zIndex: 99999,
                }}>
                <Text
                  style={{
                    fontWeight: '700',
                    fontSize: 22,
                    color: 'white',
                  }}>
                  Continue
                </Text>
              </LinearGradient>

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
                            outputRange: [0, -(SCREEN_HEIGHT * 1) / 1.7],
                          }),
                        },
                        {
                          translateX: animatedShowValue2.interpolate({
                            inputRange: [0, 1],
                            outputRange: [0, 10],
                          }),
                        },
                      ],
                    },
                  ]}>
                  {/* <LottieView
                    style={{
                      height: '100%',
                      width: '100%',
                    }}
                    source={require('../../../components/Lootie/coins3.json')}
                    autoPlay
                    loop
                    // speed={0.7}
                  /> */}
                </Animated.View>
              )}
            </TouchableOpacity>
          </Animated.View>
        </LinearGradient>
      </Animated.View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  content: {
    flex: 1,
    // padding: 20,
  },
});
export default BibleTest;
