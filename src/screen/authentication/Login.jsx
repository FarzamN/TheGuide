import {
  Text,
  Error,
  AuthBody,
  WhiteBtn,
  MainInput,
  CustomButton,
} from '../../components';
import {style} from './style';
import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {useForm} from 'react-hook-form';
import {loginField} from '../../utils/Data';
import {GlobalStyle} from '../../utils/GlobalStyle';
import {View, TouchableOpacity} from 'react-native';
import {LoginApi} from '../../redux/actions/AuthAction';
import {IconType} from 'react-native-dynamic-vector-icons';

const Login = ({navigation}) => {
  const {navigate} = navigation;
  const dispatch = useDispatch();
  const [load, setLoad] = useState(false);
  const [err, setErr] = useState({visible: false, msg: ''});

  const onSubmit = data => dispatch(LoginApi(data, setLoad, setErr));

  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm({mode: 'all'});
  return (
    <AuthBody
      Sub="Login to continue using the app"
      heading="Welcome Back!"
      styles={style.loginImage}
      source={require('../../assets/image/loginBanner.png')}>
      <View style={GlobalStyle.height} />

      {loginField.map(field => (
        <MainInput
          key={field.name}
          control={control}
          name={field.name}
          // defaultValue={field.defaultValue}
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

      {/* <TouchableOpacity>
        <Text style={style.forget} text="Forget password" />
      </TouchableOpacity> */}
      <CustomButton
        load={load}
        title="Submit"
        marginTop={20}
        disabled={load}
        onPress={handleSubmit(onSubmit)}
      />
      <View style={GlobalStyle.height} />
      <WhiteBtn
        title="Create a new account"
        onPress={() => navigate('register')}
      />
      <Error visible={err.visible} message={err.msg} />
    </AuthBody>
  );
};

export default Login;
