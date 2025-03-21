import {
  Text,
  Error,
  Correct,
  WhiteBtn,
  AuthBody,
  MainInput,
  CountryBtn,
  BirthdayBtn,
  CustomButton,
} from '../../components';
import moment from 'moment';
import {style} from './style';
import {useForm} from 'react-hook-form';
import {useDispatch} from 'react-redux';
import {genderData, RegisterInput} from '../../utils/Data';
import DatePicker from 'react-native-date-picker';
import {GlobalStyle} from '../../utils/GlobalStyle';
import {TouchableOpacity, View} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import {IconType} from 'react-native-dynamic-vector-icons';
import {emailPattern, required, tab} from '../../utils/Constants';
import {checkAuth, registerApi} from '../../redux/actions/AuthAction';
import {styles as birthdayStyle} from '../../components/Button/style';

const Register = ({navigation}) => {
  const dispatch = useDispatch();
  const {goBack, navigate} = navigation;

  const [index, setIndex] = useState(1);
  const [load, setLoad] = useState(false);
  const [gender, setGender] = useState(gender || '');
  const [City, setCity] = useState({name: null, id: null});
  const [State, setState] = useState({name: null, id: null});
  const [error, setError] = useState({visible: false, msg: ''});
  const [success, setSuccess] = useState({visible: false, msg: ''});
  const [Country, setCountry] = useState({name: null, id: null});

  const [date, setDate] = useState(new Date());
  const [bday, setBday] = useState({
    visible: false,
    day: '',
    year: '',
    month: '',
  });

  const onNext = data => {
    if (data.password !== data.c_pass) {
      setError({visible: true, msg: 'Passwords do not match'});
      setTimeout(() => {
        setError({visible: false, msg: ''});
      }, 2000);
    } else {
      checkAuth(data, setIndex, setLoad, setError);
    }
  };
  const onSubmit = data => {
    const handleError = msg => {
      setError({visible: true, msg});
      setTimeout(() => {
        setError({visible: false, msg: ''});
      }, 2000);
    };
    /*
if (gender === '') {
  handleError('Please select gender');
  return;
}

if (bday.day === null || bday.month === null || bday.year === null) {
  handleError('Please select birthday');
  return;
}
*/

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
        navigate,
        setLoad,
        setError,
        setSuccess,
      ),
    );
    // dispatch(checkApi());
  };

  const scrollViewRef = useRef(null);

  const scrollToTop = () => {
    scrollViewRef.current?.scrollTo({x: 0, y: 0, animated: true});
  };

  useEffect(() => {
    scrollToTop();
  }, [index]);

  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm({mode: 'all'});
  return (
    <AuthBody
      heading="Welcome!"
      ref={scrollViewRef}
      styles={style.regsterImage}
      Sub="Enter your personal information"
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
            load={load}
            disabled={load}
            onPress={handleSubmit(onNext)}
          />
        </>
      ) : (
        <>
          <View style={{height: 20}} />
          {/* <DropDown onSelect={setGender} data={genderData}/> */}
          {/* <BirthdayBtn
            optional
            day={bday.day}
            month={bday.month}
            year={bday.year}
            onPress={() => setBday({visible: true})}
          /> */}
          <Text
            title={'Birthyear'}
            style={birthdayStyle.BDayTitle}
          />
          <MainInput
            icName='cake'
            name='birthyear'
            control={control}
            placeholder='Birthyear'
            keyboardType="number-pad"
            isError={errors?.birthyear}
            type={IconType.MaterialIcons}
            message={errors?.birthyear?.message}
            rules={{
              required: "Birthyear is required",
              maxLength:  {
                value: 4,
                message: "use 2000 year format",
              },
            }}
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
          <View style={{height: 20}} />
          <View style={style.termBox}>
            {[
              {
                t: 'By Registering you are agreeing to our ',
                isNav: false,
                press: null,
              },
              {
                t: 'terms & conditions ',
                isNav: true,
                press: () => navigate('term', {type: 'terms-and-conditions'}),
              },
              {t: 'and ', isNav: false, press: null},
              {
                isNav: true,
                t: 'privacy policy ',
                press: () => navigate('term', {type: 'privacy-and-policy'}),
              },
            ].map(({t, isNav, press}, index) => (
              <TouchableOpacity onPress={press} key={index}>
                <Text
                  style={[isNav && style.term, {fontSize: tab ? 18 : 14}]}
                  title={t}
                />
              </TouchableOpacity>
            ))}
          </View>
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
        theme="light"
        modal
        title={'Select Birthday'}
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
      <Error message={error.msg} visible={error.visible} />
      <Correct message={success.msg} visible={success.visible} />
    </AuthBody>
  );
};

export default Register;
