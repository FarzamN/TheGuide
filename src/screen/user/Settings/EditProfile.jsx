import {
  Text,
  MainInput,
  CountryBtn,
  ProfileBody,
  BirthdayBtn,
  CustomButton,
  GenderDropDown,
} from '../../../components';

import moment from 'moment';
import {style} from './style';
import React, {useState} from 'react';
import {useForm} from 'react-hook-form';
import {Color} from '../../../utils/Color';
import DatePicker from 'react-native-modal-datetime-picker';
import {useDispatch, useSelector} from 'react-redux';
import {GlobalStyle} from '../../../utils/GlobalStyle';
import {editProfile} from '../../../redux/actions/AuthAction';
import {View, ScrollView, TouchableOpacity} from 'react-native';
import Icon, {IconType} from 'react-native-dynamic-vector-icons';

const EditProfile = ({navigation}) => {
  const dispatch = useDispatch();
  const {navigate, goBack} = navigation;
  const userdetail = useSelector(state => state.userDetails);

  const [load, setLoad] = useState(false);
  const [gender, setGender] = useState(userdetail.gender || '');
  const [City, setCity] = useState({name: null, id: null});
  const [State, setState] = useState({name: null, id: null});
  const [error, setError] = useState({visible: false, msg: ''});
  const [Country, setCountry] = useState({name: null, id: null});

  const [date, setDate] = useState(
    new Date(moment(userdetail?.date_of_birth).format()),
  );
  console.log('date', date);
  // const [date, setDate] = useState(
  //   userdetail?.date_of_birth
  //     ? new Date(userdetail?.date_of_birth)
  //     : new Date(),
  // );

  // Initialize bday state with date_of_birth or set default values
  const [bday, setBday] = useState(() => {
    const dateOfBirth = userdetail.date_of_birth; // e.g., "1998-06-10"
    if (dateOfBirth) {
      const [year, month, day] = dateOfBirth.split('-');
      return {
        visible: false,
        day,
        month: moment(dateOfBirth).format('MMMM'), // Convert numeric month to name
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
      df: userdetail.name,
    },
    {
      icon: 'email',
      p: 'Email',
      name: 'email',
      disable: true,

      df: userdetail.email,
    },
    {
      icon: 'phone',
      df: userdetail.phone_number,
      p: 'Phone Number',
      name: 'number',
      disable: true,
      title: 'UK and USA Phone Number',
    },
  ];

  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm({mode: 'all'});

  return (
    <ProfileBody>
      <ScrollView style={GlobalStyle.Padding}>
        <View style={[GlobalStyle.between, GlobalStyle.mtop]}>
          <View />
          <Text style={style.heading} title="More Information" />
          <TouchableOpacity
            onPress={goBack}
            style={[GlobalStyle.justify, style.logoutImgWrap]}>
            <Icon name="close" type={IconType.AntDesign} color={Color.black} />
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
              type={IconType.MaterialIcons}
              key={name}
              control={control}
              name={name}
              placeholder={title || p}
              isError={!!error}
              message={error?.message}
            />
          );
        })}
        <View style={{height: 20}} />

        {/* Gender Dropdown */}
        <GenderDropDown
          white
          onSelect={setGender}
          df={{key: userdetail.gender, value: userdetail.gender}}
        />

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
        isDarkModeEnabled={false}
        modal
        isVisible={bday.visible}
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
    </ProfileBody>
  );
};

export default EditProfile;
