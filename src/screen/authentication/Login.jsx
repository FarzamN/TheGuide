import {
  Error,
  AuthBody,
  WhiteBtn,
  MainInput,
  CustomButton,
  Text,
} from '../../components';
import {style} from './style';
import {View, TouchableOpacity} from 'react-native';
import {useForm} from 'react-hook-form';
import {GlobalStyle} from '../../utils/GlobalStyle';
import {useDispatch, useSelector} from 'react-redux';
import React, {useLayoutEffect, useState} from 'react';
import {LoginApi} from '../../redux/actions/AuthAction';
import {IconType} from 'react-native-dynamic-vector-icons';
import {emailPattern, required} from '../../utils/Constants';
import {USER_DETAILS} from '../../redux/reducer/Holder';

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

  const handleGuest = () => 
    dispatch({type: USER_DETAILS, payload: 'guest'});
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
      heading="Welcome Back!"
      styles={style.loginImage}
      Sub="Login to continue using the app"
      source={require('../../assets/image/loginBanner.png')}>
      <View style={GlobalStyle.height} />
      <TouchableOpacity style={style.guestBtn} onPress={handleGuest}>
        <Text title={'Guest'} style={style.guestText} />
      </TouchableOpacity>
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
