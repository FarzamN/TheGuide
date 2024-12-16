import React, {useLayoutEffect, useState} from 'react';
import {
  Text,
  Error,
  AuthBody,
  WhiteBtn,
  MainInput,
  CustomButton,
} from '../../components';
import {style} from './style';
import {useDispatch, useSelector} from 'react-redux';
import {useForm} from 'react-hook-form';
import {GlobalStyle} from '../../utils/GlobalStyle';
import {View, TouchableOpacity} from 'react-native';
import {LoginApi} from '../../redux/actions/AuthAction';
import {IconType} from 'react-native-dynamic-vector-icons';
import {emailPattern, required} from '../../utils/Constants';

const Login = ({navigation}) => {
  const {navigate} = navigation;
  const dispatch = useDispatch();
  const email_pass = useSelector(state => state.email_pass);

  const [load, setLoad] = useState(false);
  const [err, setErr] = useState({visible: false, msg: ''});
  const [savedEP, setSaveEP] = useState({email: '', pass: ''});

  const onSubmit = data => dispatch(LoginApi(data, setLoad, setErr));

  useLayoutEffect(() => {
    if (email_pass.email) {
      setSaveEP({email: email_pass.email, pass: email_pass.password});
      setValue('email', email_pass.email);
      setValue('password', email_pass.password);
    }
  }, [email_pass, setValue]);

  const {
    control,
    handleSubmit,
    formState: {errors},
    setValue,
  } = useForm({
    mode: 'all',
    defaultValues: {
      email: savedEP.email,
      password: savedEP.pass,
    },
  });

  return (
    <AuthBody
      Sub="Login to continue using the app"
      heading="Welcome Back!"
      styles={style.loginImage}
      source={require('../../assets/image/loginBanner.png')}>
      <View style={GlobalStyle.height} />

      {[
        {
          name: 'email',
          rules: {
            pattern: emailPattern,
            required: required('Email'),
          },
          placeholder: 'Email',
          keyboardType: 'email-address',
          isPass: false,
          icName: 'email',
        },
        {
          name: 'password',
          rules: {
            required: required('Password'),
          },
          placeholder: 'Password',
          isPass: true,
          icName: 'lock',
        },
      ].map(field => (
        <MainInput
          key={field.name}
          control={control}
          name={field.name}
          rules={field.rules}
          placeholder={field.placeholder}
          keyboardType={field.keyboardType}
          isPass={field.isPass}
          message={errors?.[field.name]?.message}
          isError={errors?.[field.name]}
          type={IconType.MaterialIcons}
          icName={field.icName}
        />
      ))}

      <CustomButton
        load={load}
        title="Submit"
        marginTop={20}
        disabled={load}
        onPress={handleSubmit(onSubmit)}
      />

      <View style={{height: 20}} />
      <WhiteBtn
        title="Create a new account"
        onPress={() => navigate('register')}
      />
      <Error visible={err.visible} message={err.msg} />
    </AuthBody>
  );
};

export default Login;
