import {TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {
  AuthBody,
  BirthdayBtn,
  CustomButton,
  MainInput,
  GenderDropDown,
  Text,
  Validation,
  WhiteBtn,
  CountryBtn,
  Loader,
  Error,
} from '../../components';
import {style} from './style';
import {useForm} from 'react-hook-form';
import {emailPattern, required} from '../../utils/Constants';
import {useDispatch} from 'react-redux';
import {GlobalStyle} from '../../utils/GlobalStyle';
import {RegisterInput} from '../../utils/Data';
import {IconType} from 'react-native-dynamic-vector-icons';
import DatePicker from 'react-native-date-picker';
import moment from 'moment';
import {checkApi, registerApi} from '../../redux/actions/AuthAction';

const Register = ({navigation}) => {
  const {goBack, navigate} = navigation;
  const dispatch = useDispatch();
  const [load, setLoad] = useState(false);
  const [error, setError] = useState({visible: false, msg: ''});
  const [index, setIndex] = useState(1);
  const [gender, setGender] = useState('');
  const [Country, setCountry] = useState({name: null, id: null});
  const [City, setCity] = useState({name: null, id: null});
  const [State, setState] = useState({name: null, id: null});

  const [date, setDate] = useState(new Date());
  const [bday, setBday] = useState({
    visible: false,
    day: '',
    month: '',
    year: '',
  });

  // const onSubmit = data => {
  //   if (data.password == data.c_password) {
  //     dispatch(RegisterApi(data, setLoad, setError));
  //   } else if (gender == '') {
  //     setError({visible: true, msg: 'Please select gender'});
  //   } else if (bday.day == null || bday.month == null || bday.year == null) {
  //     setError({visible: true, msg: 'Please select birthday'});
  //   } else if (Country.name == null) {
  //     setError({visible: true, msg: 'Please select country'});
  //   } else if (State.name == null) {
  //     setError({visible: true, msg: 'Please select state'});
  //   } else if (City.name == null) {
  //     setError({visible: true, msg: 'Please select city'});
  //   } else {
  //     setError({visible: true, msg: 'Passwords do not match'});
  //     setTimeout(() => {
  //       setError(false);
  //       setMsg('');
  //     }, 2000);
  //   }
  // };
  const onSubmit = data => {
    const handleError = msg => {
      setError({visible: true, msg});
      setTimeout(() => {
        setError({visible: false, msg: ''});
      }, 2000);
    };

    if (data.password !== data.c_pass) {
      handleError('Passwords do not match');
      return;
    }

    if (gender === '') {
      handleError('Please select gender');
      return;
    }

    if (bday.day === null || bday.month === null || bday.year === null) {
      handleError('Please select birthday');
      return;
    }

    if (Country.name === null) {
      handleError('Please select country');
      return;
    }

    if (State.name === null) {
      handleError('Please select state');
      return;
    }

    if (City.name === null) {
      handleError('Please select city');
      return;
    }

    dispatch(
      registerApi(
        data,
        date,
        gender,
        City.id,
        State.id,
        Country.id,
        goBack,
        setLoad,
        setError,
      ),
    );
    // dispatch(checkApi());
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
            title="Next"
            marginTop={25}
            // onPress={() => setIndex(2)}
            onPress={handleSubmit(() => setIndex(2))}
          />
        </>
      ) : (
        <>
          <View style={{height: 20}} />
          <GenderDropDown onSelect={val => setGender(val)} />
          <BirthdayBtn
            day={bday.day}
            month={bday.month}
            year={bday.year}
            onPress={() => setBday({visible: true})}
          />
          <CountryBtn
            name="flag"
            title={Country.name || 'Country'}
            onPress={() =>
              navigate('country', {
                val: Country.name,
                setVal: setCountry,
                id: Country.id,
              })
            }
          />
          <CountryBtn
            name="map"
            title={State.name || 'State'}
            onPress={() =>
              navigate('state', {
                val: State.name,
                setVal: setState,
                id: State.id,
                countryID: Country.id,
              })
            }
          />
          <CountryBtn
            name="location-city"
            title={City.name || 'City'}
            onPress={() =>
              navigate('city', {
                val: City.name,
                setVal: setCity,
                id: City.id,
                StateID: State.id,
              })
            }
          />
          <View style={GlobalStyle.between}>
            <WhiteBtn
              title="Back"
              style={style.smBtn}
              onPress={() => setIndex(1)}
            />
            <CustomButton
              title="Finish"
              style={style.smBtn}
              onPress={handleSubmit(onSubmit)}
            />
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
        mode="date"
        onConfirm={sdate => {
          setBday({
            visible: false,
            day: sdate.getDate(),
            // month: sdate.getMonth() + 1,
            month: moment(sdate).format('MMMM'),
            year: sdate.getFullYear(),
          });
          setDate(sdate);
        }}
        onCancel={() => setBday({visible: false, day: '', month: '', year: ''})}
      />
      <Loader visible={load} />
      <Error message={error.msg} visible={error.visible} />
    </AuthBody>
  );
};

export default Register;
