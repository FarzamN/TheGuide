import {
  StyleSheet,
  Text,
  TextInput,
  Touchable,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import Icon, {IconType} from 'react-native-dynamic-vector-icons';
import {Font} from '../../utils/Font';
import {Color} from '../../utils/Color';

const Timer = () => {
  const [startTimr, setStartTimr] = useState(false);
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [hours, setHours] = useState(0);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let interval = null;
    if (isActive) {
      interval = setInterval(() => {
        setSeconds(seconds => {
          if (seconds === 59) {
            setMinutes(minutes => {
              if (minutes === 59) {
                setHours(hours => hours + 1);
                return 0;
              }
              return minutes + 1;
            });
            return 0;
          }
          return seconds + 1;
        });
      }, 1000);
    } else if (!isActive && seconds !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, seconds]);

  const handleStartStop = () => {
    setIsActive(!isActive);
  };
  const handleReset = () => {
    setIsActive(false);
    setSeconds(0);
    setMinutes(0);
    setHours(0);
  };
  const formatTime = time => (time < 10 ? `0${time}` : time);

  return (
    <View style={{flex: 1}}>
      <View style={styles.MainBox}>
        <View style={styles.InputCon}>
          <Text style={styles.TimrTxt}>{formatTime(hours)}</Text>
        </View>
        <Icon
          style={styles.DotCon}
          type={IconType.Entypo}
          name="dots-two-vertical"
          size={18}
          color={'white'}
        />
        <View style={styles.InputCon}>
          <Text style={styles.TimrTxt}>{formatTime(minutes)}</Text>
        </View>

        <Icon
          style={styles.DotCon}
          type={IconType.Entypo}
          name="dots-two-vertical"
          size={18}
          color={'white'}
        />

        <View style={styles.InputCon}>
          <Text style={styles.TimrTxt}>{formatTime(seconds)}</Text>
        </View>
      </View>
    </View>
  );
};

export default Timer;

const styles = StyleSheet.create({
  MainBox: {
    height: 95,
    backgroundColor: '#004FB4',
    marginVertical: 12,
    flexDirection: 'row',
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: 'rgba(0,0,0)',
    shadowOffset: [1, 1],
    shadowRadius: 1,
    shadowOpacity: 0.4,
    elevation: 1,
  },
  InputCon: {
    height: 60,
    width: 50,
    backgroundColor: 'white',
    borderRadius: 8,
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
  },
  DotCon: {
    marginHorizontal: 5,
  },
  MultipleBtnCon: {
    height: 35,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  BtnCon: {
    height: 25,
    width: 55,
    backgroundColor: '#05BEF7',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: 'rgba(0,0,0)',
    shadowOffset: [1, 1],
    shadowRadius: 1,
    shadowOpacity: 0.4,
    elevation: 1,
  },
  BtnTxt: {
    color: 'white',
    fontFamily: Font.font400,
  },
  TimrTxt: {
    color: '#004FB4',
    fontFamily: Font.font400,
    fontSize: 20,
    bottom: 1,
  },
});
