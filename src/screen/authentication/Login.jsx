import {View, Text} from 'react-native';
import React from 'react';
import {
  Body,
  CustomButton,
  FullImage,
  MainInput,
  PasswordInput,
} from '../../components';
import {emailPattern, required} from '../../utils/Constants';
import {useForm} from 'react-hook-form';
import {style} from './style';

const Login = () => {
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
      <MainInput
        isIcon
        icon="email"
        outlined
        control={control}
        name="email"
        rules={{
          required: required('Email'),
          pattern: emailPattern,
        }}
        placeholder="Email"
        isError={errors.email}
        message={errors?.email?.message}
        keyboardType={'email-address'}
      />

      <PasswordInput
        control={control}
        name="password"
        rules={{
          required: '*Password is required',
          minLength: {
            value: 8,
            message: '*Password too short (minimum length is 8)',
          },
          maxLength: {
            value: 16,
            message: '*Password too long (maximum length is 16)',
          },
        }}
        placeholder="Password"
        fontSize={16}
      />
      {/* {errors.password && <Validation title={errors.password.message} />} */}

      <CustomButton />
    </Body>
  );
};

export default Login;
