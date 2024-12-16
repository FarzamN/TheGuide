import moment from 'moment';
import {styles} from './style';
import RenderDot from './renderDot';
import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {useGeolocation} from '../../hooks';
import {View, TextInput} from 'react-native';
import {ContBox, Correct, Error, TimeService} from '..';
import {useNavigation} from '@react-navigation/native';

import {
  NumberCreate,
  NumberUpdate,
  prayer_streak,
} from '../../redux/actions/UserAction';
import {Image_Url} from '../../utils/Urls';

const Number = () => {
  const dispatch = useDispatch();
  const {navigate} = useNavigation();
  const {location} = useGeolocation();

  const [add, setAdd] = useState(false);
  const [timerSelect, setTimerSelect] = useState(false);
  const [err, setErr] = useState({show: false, msg: ''});
  const [time, setTime] = useState({hours: '', minutes: '', seconds: ''});

  const handleMap = () =>
    navigate('webview', {uri: Image_Url + 'prayer/webview/map'});

  /*
  const isValidTime = time => {
    const {hours, minutes, seconds} = time;
    return (
      (hours === '' || (Number(hours) >= 0 && Number(hours) < 24)) &&
      (minutes === '' || (Number(minutes) >= 0 && Number(minutes) < 60)) &&
      (seconds === '' || (Number(seconds) >= 0 && Number(seconds) < 60))
    );
  };
  */

  const handleNumber = async () => {
    const data = {
      id: null,
      startTime: moment().format('YYYY-MM-DD HH:mm:ss'),
      statusName: 'timer',
      lat: location.latitude,
      long: location.longitude,
    };

    try {
      const {id, start_time} = await NumberCreate(data);

      const end_time = moment()
        .add(time.minutes, 'minute')
        .format('YYYY-MM-DD HH:mm:ss');
      const startTime = moment(start_time, 'YYYY-MM-DD HH:mm:ss');
      const endTime = moment(end_time, 'YYYY-MM-DD HH:mm:ss');

      const goal = endTime.diff(startTime, 'minutes');
      const dataTwo = {id, end_time, goal};
      await NumberUpdate(dataTwo, setAdd);
      dispatch(prayer_streak());
    } catch (error) {
      console.error('Error in handleNumber:', error);
    }
  };

  const handleSave = () => {
    if (time.minutes) {
      handleNumber();
      setTimeout(() => handleMap(), 1500);
    } else {
      setTime({hours: '', minutes: '', seconds: ''});
      setErr({show: true, msg: 'Please enter valid time in 12-hour format!'});
      setTimeout(() => {
        setErr({show: false, msg: ''});
      }, 2000);
    }
  };

  /*
const validateInput = () => {
  const {hours, minutes, seconds} = time;
  const isValid =
    (hours === '' || (parseInt(hours) >= 0 && parseInt(hours) < 12)) &&
    (minutes === '' || (parseInt(minutes) >= 0 && parseInt(minutes) < 60)) &&
    (seconds === '' || (parseInt(seconds) >= 0 && parseInt(seconds) < 60));
  if (!isValid) {
    setTime({hours: '', minutes: '', seconds: ''});
    setErr({show: true, msg: 'Please enter valid time in 12-hour format!'});
    setTimeout(() => {
      setErr({show: false, msg: ''});
    }, 2000);
  }
  return isValid;
};
 */

  const renderTimeBox = (key, value) => (
    <ContBox label={key.charAt(0).toUpperCase() + key.slice(1)}>
      <TextInput
        value={value}
        maxLength={2}
        placeholder="00"
        style={styles.inputText}
        keyboardType="number-pad"
        placeholderTextColor={'#787677'}
        onChangeText={text => setTime(prev => ({...prev, [key]: text}))}
      />
    </ContBox>
  );

  const handleBTN = () => {
    handleSave();
    setTimerSelect(pre => !pre);
  };
  return (
    <>
      <View style={styles.MainBox}>
        {renderTimeBox('hours', time.hours)}
        <RenderDot />
        {renderTimeBox('minutes', time.minutes)}
        <RenderDot />
        {renderTimeBox('seconds', time.seconds)}
      </View>
      <View style={{alignSelf: 'center', marginBottom: 20}}>
        {/* <TimeService data={{title: 'Save'}} onPress={handleSave} /> */}
        {['Save'].map((i, ix) => (
          <TimeService
            key={ix}
            data={{title: i}}
            onPress={handleBTN}
            focus={timerSelect}
          />
        ))}
      </View>
      <Correct visible={add} text={'Pray Added'} />
      <Error message={err.msg} visible={err.show} />
    </>
  );
};

export default Number;
