import {
  Text,
  MainInput,
  CountryBtn,
  ProfileBody,
  BirthdayBtn,
  CustomButton,
  GenderDropDown,
  Error,
} from '../../../components';

import moment from 'moment';
import {style} from './style';
import React, {useEffect, useState} from 'react';
import {useForm} from 'react-hook-form';
import {Color} from '../../../utils/Color';
import DatePicker from 'react-native-date-picker';
import {useDispatch, useSelector} from 'react-redux';
import {GlobalStyle} from '../../../utils/GlobalStyle';
import {editProfile} from '../../../redux/actions/AuthAction';
import {View, ScrollView, TouchableOpacity} from 'react-native';
import Icon, {IconType} from 'react-native-dynamic-vector-icons';
import {tab} from '../../../utils/Constants';

const EditProfile = ({navigation}) => {
  const dispatch = useDispatch();
  const {navigate, goBack} = navigation;
  const userdetail = useSelector(state => state.userDetails);

  const [load, setLoad] = useState(false);
  const [gender, setGender] = useState(userdetail.gender || '');
  const [error, setError] = useState({visible: false, msg: ''});

  const [City, setCity] = useState({
    name: userdetail.user_city,
    id: userdetail.user_city_id,
  });
  const [State, setState] = useState({
    name: userdetail.user_state,
    id: userdetail.user_state_id,
  });
  const [Country, setCountry] = useState({
    name: userdetail.user_country,
    id: userdetail.user_country_id,
  });

  const [date, setDate] = useState(
    new Date(moment(userdetail?.date_of_birth).format()),
  );


  const [bday, setBday] = useState(() => {
    const dateOfBirth = moment(userdetail?.date_of_birth).format(
      'MMMM-YYYY-DD',
    );

    if (dateOfBirth) {
      const [month, year, day] = dateOfBirth.split('-');
      return {
        visible: false,
        day,
        month,
        year,
      };
    }

    return {
      visible: false,
      day: '',
      month: '',
      year: '',
    };
  });

  const onSubmit = data => {
    const handleError = msg => {
      setError({visible: true, msg});
      setTimeout(() => {
        setError({visible: false, msg: ''});
      }, 2000);
    };

    if (Country.id === null) {
      handleError('Please Select Country');
      return;
    }
    if (State.id === null) {
      handleError('Please Select State');
      return;
    }
    if (City.id === null) {
      handleError('Please Select City');
      return;
    }
    dispatch(
      editProfile(
        userdetail.user_id,
        data,
        date,
        gender,
        City,
        State,
        Country,
        goBack,
        setLoad,
      ),
    );
  };

  const data = [
    {
      icon: 'person',
      p: 'Name',
      name: 'f_name',
      disable: false,
      df: userdetail.first_name,
    },
    {
      icon: 'person',
      p: 'Name',
      name: 'l_name',
      disable: false,
      df: userdetail.last_name,
    },
    {
      icon: 'email',
      p: 'Email',
      name: 'email',
      disable: true,

      df: userdetail.email,
    },
    /* {
      icon: 'phone',
      df: userdetail.phone_number,
      p: 'Phone Number',
      name: 'number',
      disable: true,
      title: 'UK and USA Phone Number',
    },
    */
  ];
  const [prevCountryId, setPrevCountryId] = useState(
    userdetail.user_country_id,
  );

  useEffect(() => {
    if (prevCountryId !== Country.id) {
      setState({name: null, id: null});
      setCity({name: null, id: null});
      setPrevCountryId(Country.id);
    }
    if (userdetail.user_state_id !== State.id) {
      setCity({name: null, id: null});
    }
  }, [Country.id, State.id]);

  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm({mode: 'all'});

  return (
    <ProfileBody>
      <ScrollView style={GlobalStyle.Padding}>
        <View
          style={[
            GlobalStyle.between,
            GlobalStyle.mtop,
            {marginVertical: tab ? 10 : 0},
          ]}>
          <View />
          <Text style={style.heading} title="More Information" />
          <TouchableOpacity
            onPress={goBack}
            style={[GlobalStyle.justify, style.logoutImgWrap]}>
            <Icon
              name="close"
              size={tab ? 25 : 18}
              type={IconType.AntDesign}
              color={Color.black}
            />
          </TouchableOpacity>
        </View>

        {/* Main Inputs */}
        {data.map(({name, p, title, icon, df, disable}) => {
          const error = errors[name];

          return (
            <MainInput
              defaultValue={df}
              icName={icon}
              disable={!disable}
              type={'MaterialIcons'}
              key={name}
              control={control}
              name={name}
              placeholder={title || p}
              isError={!!error}
              message={error?.message}
            />
          );
        })}

        {/* 
        <View style={{height: 20}} />
        <GenderDropDown
          white
          onSelect={setGender}
          df={{key: userdetail.gender, value: userdetail.gender}}
        /> */}

        {/* Birthday Button */}
        <BirthdayBtn
          white
          day={bday.day}
          month={bday.month}
          year={bday.year}
          onPress={() => setBday({...bday, visible: true})}
        />

        {/* Country, State, City Buttons */}
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

        <CustomButton
          marginTop={20}
          load={load}
          disabled={load}
          title={'Edit Profile'}
          onPress={handleSubmit(onSubmit)}
        />
      </ScrollView>

      <DatePicker
        modal
        theme="light"
        buttonColor="black"
        open={bday.visible}
        date={date}
        mode="date"
        onConfirm={selectedDate => {
          setBday({
            visible: false,
            day: selectedDate.getDate(),
            month: moment(selectedDate).format('MMMM'),
            year: selectedDate.getFullYear(),
          });
          setDate(selectedDate);
        }}
        onCancel={() =>
          setBday({
            visible: false,
            day: bday.day,
            month: bday.month,
            year: bday.year,
          })
        }
      />
      <Error visible={error.visible} message={error.msg} />
    </ProfileBody>
  );
};

export default EditProfile;
