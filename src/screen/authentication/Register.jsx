import {ScrollView, Text, View} from 'react-native';
import React, {useState} from 'react';
import {
  Body,
  CustomButton,
  Error,
  FullImage,
  Loader,
  MainInput,
  PasswordInput,
  Validation,
} from '../../components';
import {style} from './style';
import {useForm} from 'react-hook-form';
import {emailPattern, required} from '../../utils/Constants';
import {useDispatch} from 'react-redux';
import {RegisterApi} from '../../redux/actions/AuthAction';
import {GlobalStyle} from '../../utils/GlobalStyle';

const Register = ({navigation}) => {
  const dispatch = useDispatch();
  const [load, setLoad] = useState(false);
  const [error, setError] = useState(false);
  const [msg, setMsg] = useState('');

  const onSubmit = data => {
    if (data.password == data.c_password) {
      dispatch(RegisterApi(data, setLoad, setError, setMsg));
    } else {
      setError(true);
      setMsg('Passwords do not match');
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
    <Body>
      <FullImage
        style={style.ImageBox}
        source={require('../../assets/image/logo.png')}
      />
      <ScrollView
        style={GlobalStyle.Padding}
        showsVerticalScrollIndicator={false}>
        <MainInput
          control={control}
          name="f_name"
          rules={{
            required: required('First Name'),
          }}
          placeholder="First Name"
        />
        <Validation
          message={errors?.f_name?.message}
          isError={errors?.f_name}
        />
        <MainInput
          control={control}
          name="l_name"
          rules={{
            required: required('Last Name'),
          }}
          placeholder="Last Name"
        />
        <Validation
          isError={errors?.l_name}
          message={errors?.l_name?.message}
        />

        <MainInput
          control={control}
          name="email"
          rules={{
            required: required('Email'),
            pattern: emailPattern,
          }}
          placeholder="Email"
          keyboardType={'email-address'}
        />
        <Validation message={errors?.email?.message} isError={errors?.email} />

        <PasswordInput
          control={control}
          name="password"
          rules={{
            required: required('Password'),
          }}
          placeholder="Password"
        />
        <Validation
          isError={errors?.password}
          message={errors?.password?.message}
        />
        <PasswordInput
          control={control}
          name="c_password"
          rules={{
            required: required('Confirm Password'),
          }}
          placeholder="Confirm Password"
        />
        <Validation
          isError={errors?.c_password}
          message={errors?.c_password?.message}
        />
        <CustomButton
          title="Finish"
          onPress={handleSubmit(onSubmit)}
          style={{marginTop: 20}}
        />
        <View style={{height: 15}} />
        <CustomButton
          title="Alrady have an account"
          onPress={() => navigation.navigate('register')}
          style={style.newAccountButton}
          textStyle={style.newAccountButtonText}
        />
      </ScrollView>
      <Error visible={error} message={msg} />
      <Loader visible={load} />
    </Body>
  );
};

export default Register;
