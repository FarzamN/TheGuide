import {TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {
  AuthBody,
  BirthdayBtn,
  CustomButton,
  MainInput,
  RegisterDropDown,
  Text,
  Validation,
  WhiteBtn,
} from '../../components';
import {style} from './style';
import {useForm} from 'react-hook-form';
import {emailPattern, required} from '../../utils/Constants';
import {useDispatch} from 'react-redux';
import {RegisterApi} from '../../redux/actions/AuthAction';
import {GlobalStyle} from '../../utils/GlobalStyle';
import {RegisterInput} from '../../utils/Data';
import {IconType} from 'react-native-dynamic-vector-icons';
import DatePicker from 'react-native-date-picker';

const Register = ({navigation}) => {
  const {goBack, navigate} = navigation;
  const dispatch = useDispatch();
  const [load, setLoad] = useState(false);
  const [error, setError] = useState({visible: false, msg: ''});
  const [index, setIndex] = useState(1);
  const [gender, setGender] = useState('');

  const [date, setDate] = useState(new Date());
  const [bday, setBday] = useState({
    visible: false,
    day: '',
    month: '',
    year: '',
  });

  const onSubmit = data => {
    if (data.password == data.c_password) {
      dispatch(RegisterApi(data, setLoad, setError));
    } else if (gender == '') {
      setError({visible: true, msg: 'Please select gender'});
    } else {
      setError({visible: true, msg: 'Passwords do not match'});
      setTimeout(() => {
        setError(false);
        setMsg('');
      }, 2000);
    }
  };
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm({mode: 'all'});
  return (
    <AuthBody
      Sub="enter your personal information"
      heading="Welcome!"
      styles={style.regsterImage}
      source={require('../../assets/image/registerBanner.png')}>
      {index == 1 ? (
        <>
          {RegisterInput.map(({name, p, pw, title, icon}) => {
            const error = errors[name];
            const rules =
              name === 'password' || name === 'c_password'
                ? {
                    required: required('Password'),
                  }
                : {
                    required: required(p),
                    pattern: name === 'email' ? emailPattern : undefined,
                  };
            return (
              <MainInput
                icName={icon}
                type={IconType.MaterialIcons}
                isPass={pw}
                key={name}
                control={control}
                name={name}
                rules={rules}
                placeholder={title || p}
                isError={!!error}
                message={error?.message}
                keyboardType={
                  name == 'email'
                    ? 'email-address'
                    : name == 'number'
                    ? 'number-pad'
                    : 'default'
                }
              />
            );
          })}
          <CustomButton
            // onPress={handleSubmit(() => setIndex(2))}
            onPress={() => setIndex(2)}
            marginTop={25}
            title="Next"
          />
        </>
      ) : (
        <>
          <View style={{height: 20}} />
          <RegisterDropDown onSelect={val => setGender(val)} />
          <BirthdayBtn
            day={bday.day}
            month={bday.month}
            year={bday.year}
            onPress={() => setBday({visible: true})}
          />
          <View style={GlobalStyle.between}>
            <WhiteBtn
              style={style.smBtn}
              title="Back"
              onPress={() => setIndex(1)}
            />
            <CustomButton style={style.smBtn} title="Finish" />
          </View>
        </>
      )}

      <TouchableOpacity
        onPress={goBack}
        style={[style.alreadyBox, GlobalStyle.justify]}>
        <Text center title="Already have account?" style={style.already} />
      </TouchableOpacity>
      <DatePicker
        modal
        open={bday.visible}
        date={date}
        mode="date" // Ensure mode is 'date' for day, month, and year selection
        onConfirm={selectedDate => {
          const day = selectedDate.getDate();
          const month = selectedDate.getMonth() + 1; // Months are zero-based
          const year = selectedDate.getFullYear();
          setBday({visible: false, day, month, year});
          setDate(selectedDate);
        }}
        onCancel={() => setBday({visible: false})}
      />
    </AuthBody>
  );
};

export default Register;
