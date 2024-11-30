import {View, TextInput} from 'react-native';
import React, {useState} from 'react';
import {ContBox, Correct, Error, TimeService} from '..';
import {styles} from './style';
import RenderDot from './renderDot';
import {useNavigation} from '@react-navigation/native';

const Number = ({handleBtn, handleAdd}) => {
  const {goBack} = useNavigation();
  const [add, setAdd] = useState(false);
  const [err, setErr] = useState({show: false, msg: ''});
  const [time, setTime] = useState({hours: '', minutes: '', seconds: ''});

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
  const handleSave = () => {
    if (!time.minutes) {
      setTime({hours: '', minutes: '', seconds: ''});
      setErr({show: true, msg: 'Please enter valid time in 12-hour format!'});
      setTimeout(() => {
        setErr({show: false, msg: ''});
      }, 2000);
    } else {
      handleBtn();
      setAdd(true);
      handleAdd(setAdd);
      setTimeout(() => {
        setAdd(false);
        goBack();
      }, 2000);
    }
  };

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

  const renderTimeBox = (key, value) => (
    <ContBox label={key.charAt(0).toUpperCase() + key.slice(1)}>
      <TextInput
        style={styles.inputText}
        keyboardType="number-pad"
        value={value}
        onChangeText={text => setTime(prev => ({...prev, [key]: text}))}
        maxLength={2}
        placeholder="00"
        onSubmitEditing={handleSave}
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
      <Error message={err.msg} visible={err.show} />
    </>
  );
};

export default Number;
