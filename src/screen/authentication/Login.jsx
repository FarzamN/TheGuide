import {View, Text, TouchableOpacity, ScrollView} from 'react-native';
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
import {
  emailPattern,
  maxLength,
  minLength,
  required,
} from '../../utils/Constants';
import {useForm} from 'react-hook-form';
import {style} from './style';
import {GlobalStyle} from '../../utils/GlobalStyle';
import {useDispatch} from 'react-redux';
import {LoginApi} from '../../redux/actions/AuthAction';

const Login = ({navigation}) => {
  const dispatch = useDispatch();
  const [load, setLoad] = useState(false);
  const [error, setError] = useState(false);
  const [msg, setMsg] = useState('');
  const onSubmit = data => {
    dispatch(LoginApi(data, setLoad, setError, setMsg));
  };
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm({mode: 'all'});
  return (
    <Body>
      <FullImage
        source={require('../../assets/image/logo.png')}
        style={style.ImageBox}
      />
      <ScrollView
        style={GlobalStyle.Padding}
        showsVerticalScrollIndicator={false}>
        <View style={GlobalStyle.height} />
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
            minLength,
            maxLength,
            required: required('Password'),
          }}
          placeholder="Password"
        />
        <Validation
          message={errors?.password?.message}
          isError={errors?.password}
        />
        <TouchableOpacity>
          <Text style={style.forget}>Forget password</Text>
        </TouchableOpacity>
        <CustomButton
          title="Submit"
          onPress={handleSubmit(onSubmit)}
          style={{marginTop: 20}}
        />
        <View style={GlobalStyle.height} />
        <CustomButton
          title="Create a new account"
          onPress={() => navigation.navigate('register')}
          style={style.newAccountButton}
          textStyle={style.newAccountButtonText}
        />
      </ScrollView>
      <Loader visible={load} />
      <Error visible={error} message={msg} />
    </Body>
  );
};

export default Login;
