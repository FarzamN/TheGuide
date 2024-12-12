import {TimeService} from '..';
import {styles} from './style';
import ContBox from './contBox';
import RenderDot from './renderDot';
import {View, TextInput} from 'react-native';
import {GlobalStyle} from '../../utils/GlobalStyle';
import React, {useRef, useState, useEffect} from 'react';
import {
  prayer_streak,
  TimerCreate,
  TimerUpdate,
} from '../../redux/actions/UserAction';
import {useDispatch} from 'react-redux';
import {useGeolocation} from '../../hooks';
import moment from 'moment';
import {playSound} from '../../utils/Constants';
import {Image_Url} from '../../utils/Urls';
import {useNavigation} from '@react-navigation/native';

const Timer = () => {
  const dispatch = useDispatch();
  const {location} = useGeolocation();
  const {navigate} = useNavigation();

  const timerRef = useRef(null);
  const [isRunning, setIsRunning] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [timerSelect, setTimerSelect] = useState(0);
  const [time, setTime] = useState({hours: '00', minutes: '00', seconds: '00'});

  const [timerData, setAPItimerData] = useState({});

  const handleMap = () =>
    navigate('webview', {uri: Image_Url + 'prayer/webview/map'});

  const handleStart = () => {
    const data = {
      end_time: null,
      startTime: moment().format('YYYY-MM-DD HH:mm:ss'),
      statusName: 'timer',
      lat: location.latitude,
      long: location.longitude,
    };
    setTimeout(() => {
      handleMap();
    }, 1300);
    TimerCreate(data, setAPItimerData);
  };

  const handleEnd = val => {
    const end_time = moment().format('YYYY-MM-DD HH:mm:ss');
    const startTime = moment(timerData.start_time, 'YYYY-MM-DD HH:mm:ss');
    const endTime = moment(end_time, 'YYYY-MM-DD HH:mm:ss').add(10, 'seconds');
    const goal = endTime.diff(startTime, 'minutes');
    console.log({startTime, goal, endTime});
    const data = {goal, end_time, id: timerData.id};
    dispatch(TimerUpdate(data, val));
    dispatch(prayer_streak());
    if (val === 'show') playSound();
  };

  const incrementTime = () => {
    setTime(prevTime => {
      let hours = parseInt(prevTime.hours, 10);
      let minutes = parseInt(prevTime.minutes, 10);
      let seconds = parseInt(prevTime.seconds, 10);

      seconds += 1;
      if (seconds === 60) {
        seconds = 0;
        minutes += 1;
      }
      if (minutes === 60) {
        minutes = 0;
        hours += 1;
      }

      return {
        hours: hours.toString().padStart(2, '0'),
        minutes: minutes.toString().padStart(2, '0'),
        seconds: seconds.toString().padStart(2, '0'),
      };
    });
  };

  const handlePress = id => {
    switch (id) {
      case 2: // Start or Stop
        if (isRunning) {
          handleEnd('show');
          clearInterval(timerRef.current);
        } else {
          handleStart();
          timerRef.current = setInterval(incrementTime, 1000);
        }
        setIsRunning(prev => !prev);
        setIsPaused(false);
        break;
      case 1: // Pause or Continue
        if (isRunning) {
          clearInterval(timerRef.current);
          setIsPaused(true);
          handleEnd('dShow');
        } else {
          timerRef.current = setInterval(incrementTime, 1000);
          setIsPaused(false);
        }
        setIsRunning(prev => !prev);
        break;
      case 3: // useless Save
        // handleStart(time);
        setTime({hours: '00', minutes: '00', seconds: '00'});
        setIsRunning(false);
        setIsPaused(false);
        break;
      case 4: // Reset
        clearInterval(timerRef.current);
        setIsRunning(false);
        setIsPaused(false);
        setTime({hours: '00', minutes: '00', seconds: '00'});
        break;
    }
    setTimerSelect(id);
  };

  useEffect(() => {
    return () => {
      clearInterval(timerRef.current);
    };
  }, []);

  const renderTimeBox = (label, value) => (
    <ContBox label={label}>
      <TextInput
        style={styles.inputText}
        keyboardType="number-pad"
        value={value}
        onChangeText={text =>
          setTime(prev => ({...prev, [label.toLowerCase()]: text}))
        }
        editable={false}
        placeholder="00"
        maxLength={2}
        placeholderTextColor={'#787677'}
      />
    </ContBox>
  );

  const getButtonData = () => {
    if (isRunning && !isPaused) {
      return [
        {title: 'Pause', id: 1},
        {title: 'Save', id: 2},
      ];
    } else if (isPaused) {
      return [
        {title: 'Start', id: 1},
        {title: 'Save', id: 3},
      ];
    } else {
      return [
        {title: 'Start', id: 2},
        {title: 'Reset', id: 4},
      ];
    }
  };

  const buttonData = getButtonData();

  return (
    <>
      <View style={styles.MainBox}>
        {renderTimeBox('Hour', time.hours)}
        <RenderDot />
        {renderTimeBox('Min', time.minutes)}
        <RenderDot />
        {renderTimeBox('Sec', time.seconds)}
      </View>

      <View style={[GlobalStyle.mapContaner, styles.TimeCont]}>
        {buttonData.map((i, ix) => (
          <TimeService
            key={ix}
            data={i}
            focus={timerSelect === i.id}
            onPress={() => handlePress(i.id)}
          />
        ))}
      </View>
    </>
  );
};

export default Timer;

// ---------------

// import {TimeService} from '..';
// import {styles} from './style';
// import ContBox from './contBox';
// import RenderDot from './renderDot';
// import {View, TextInput} from 'react-native';
// import {GlobalStyle} from '../../utils/GlobalStyle';
// import React, {useRef, useState, useEffect} from 'react';

// const Timer = ({handleStart, handleEnd}) => {
//   const timerRef = useRef(null);
//   const [isRunning, setIsRunning] = useState(false);
//   const [timerSelect, setTimerSelect] = useState(0);
//   const [time, setTime] = useState({hours: '00', minutes: '00', seconds: '00'});

//   const incrementTime = () => {
//     setTime(prevTime => {
//       let hours = parseInt(prevTime.hours, 10);
//       let minutes = parseInt(prevTime.minutes, 10);
//       let seconds = parseInt(prevTime.seconds, 10);

//       seconds += 1;
//       if (seconds === 60) {
//         seconds = 0;
//         minutes += 1;
//       }
//       if (minutes === 60) {
//         minutes = 0;
//         hours += 1;
//       }

//       return {
//         hours: hours.toString().padStart(2, '0'),
//         minutes: minutes.toString().padStart(2, '0'),
//         seconds: seconds.toString().padStart(2, '0'),
//       };
//     });
//   };

//   const handlePress = id => {
//     if (id === 2) {
//       if (isRunning) {
//         handleEnd();
//         clearInterval(timerRef.current);
//       } else {
//         handleStart();
//         timerRef.current = setInterval(incrementTime, 1000);
//       }
//       setIsRunning(prev => !prev);
//       setTimerSelect(id);
//     } else if (id === 3) {
//       clearInterval(timerRef.current);
//       setIsRunning(false);
//       setTime({hours: '00', minutes: '00', seconds: '00'});
//       setTimerSelect(id);
//     } else {
//       setTimerSelect(id);
//     }
//   };

//   useEffect(() => {
//     return () => {
//       clearInterval(timerRef.current);
//     };
//   }, []);

//   const renderTimeBox = (label, value) => (
//     <ContBox label={label}>
//       <TextInput
//         style={styles.inputText}
//         keyboardType="number-pad"
//         value={value}
//         onChangeText={text =>
//           setTime(prev => ({...prev, [label.toLowerCase()]: text}))
//         }
//         editable={false}
//         placeholder="00"
//         maxLength={2}
//         placeholderTextColor={'#787677'}
//       />
//     </ContBox>
//   );

//   const data = [
//     {title: isRunning ? 'Pause' : 'Continue', id: 1},
//     {title: isRunning ? 'Stop' : 'Start', id: 2},
//     {title: 'Stop', id: 3},
//     {title: 'Reset', id: 4},
//   ];

//   return (
//     <>
//       <View style={styles.MainBox}>
//         {renderTimeBox('Hour', time.hours)}
//         <RenderDot />
//         {renderTimeBox('Min', time.minutes)}
//         <RenderDot />
//         {renderTimeBox('Sec', time.seconds)}
//       </View>

//       <View style={[GlobalStyle.mapContaner, styles.TimeCont]}>
//         {data.map((i, ix) => (
//           <TimeService
//             key={ix}
//             data={i}
//             focus={timerSelect == i.id}
//             onPress={() => handlePress(i.id)}
//           />
//         ))}
//       </View>
//     </>
//   );
// };

// export default Timer;
