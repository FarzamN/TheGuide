import {View, ScrollView, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {
  BirthdayBtn,
  CountryBtn,
  CustomButton,
  GenderDropDown,
  MainInput,
  ProfileBody,
  Text,
} from '../../../components';
import {emailPattern, required} from '../../../utils/Constants';
import Icon, {IconType} from 'react-native-dynamic-vector-icons';
import {useForm} from 'react-hook-form';
import {useDispatch, useSelector} from 'react-redux';
import {GlobalStyle} from '../../../utils/GlobalStyle';
import {Color} from '../../../utils/Color';
import {style} from './style';
import DatePicker from 'react-native-date-picker';
import moment from 'moment';
import {editProfile} from '../../../redux/actions/AuthAction';

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
    userdetail.date_of_birth ? new Date(userdetail.date_of_birth) : new Date(),
  );

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
      df: userdetail.name,
    },
    {
      icon: 'email',
      p: 'Email',
      name: 'email',
      df: userdetail.email,
    },
    {
      icon: 'phone',
      df: userdetail.phone_number,
      p: 'Phone Number',
      name: 'number',
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
        {data.map(({name, p, title, icon, df}) => {
          const error = errors[name];
          const rules =
            name === 'password' || name === 'c_password'
              ? {required: required('Password')}
              : {
                  required: required(p),
                  pattern: name === 'email' ? emailPattern : undefined,
                };
          return (
            <MainInput
              defaultValue={df}
              icName={icon}
              type={IconType.MaterialIcons}
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
        <View style={{height: 20}} />

        {/* Gender Dropdown */}
        <GenderDropDown
          white
          df={{key: userdetail.gender, value: userdetail.gender}}
          onSelect={setGender}
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
        theme="light"
        modal
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
    </ProfileBody>
  );
};

export default EditProfile;
