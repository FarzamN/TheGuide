import {View, TextInput} from 'react-native';
import React, {useState} from 'react';
import {ContBox, Correct, Error, TimeService} from '..';
import {styles} from './style';
import RenderDot from './renderDot';
import {useNavigation} from '@react-navigation/native';

const Number = () => {
  const {goBack} = useNavigation();
  const [add, setAdd] = useState(false);
  const [err, setErr] = useState({show: false, msg: ''});
  const [time, setTime] = useState({hours: '', minutes: '', seconds: ''});

  // Input validation helper
  const isValidTime = ({hours, minutes, seconds}) => {
    return (
      (hours === '' || (Number(hours) >= 0 && Number(hours) < 24)) &&
      (minutes === '' || (Number(minutes) >= 0 && Number(minutes) < 60)) &&
      (seconds === '' || (Number(seconds) >= 0 && Number(seconds) < 60))
    );
  };

  const handleSave = () => {
    // if (!isValidTime(time)) {
    //   setErr({show: true, msg: 'Please enter valid time values!'});
    //   setTimeout(() => {
    //     setErr({show: false, msg: ''});
    //   }, 2000);
    //   return;
    // }
    setAdd(true);
    setTimeout(() => {
      setAdd(false);
      goBack();
    }, 1000);
  };

  const renderTimeBox = (key, value) => (
    <ContBox label={key.charAt(0).toUpperCase() + key.slice(1)}>
      <TextInput
        style={styles.inputText}
        keyboardType="number-pad"
        value={value}
        onChangeText={text => setTime(prev => ({...prev, [key]: text}))}
        maxLength={2}
        placeholder="00"
        placeholderTextColor={'#787677'}
      />
    </ContBox>
  );

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
        <TimeService data={{title: 'Save'}} onPress={handleSave} />
      </View>
      <Correct visible={add} text={'Pray Added'} />
    </>
  );
};

export default Number;
