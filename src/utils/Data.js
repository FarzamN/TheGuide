import {IconType} from 'react-native-dynamic-vector-icons';
import {Login, Register} from '../screen/authentication';
import {Home} from '../screen/user';
import BibleTest from '../screen/user/TabScreen/BibleTest';
import TopicVideoQuiz from '../screen/user/TabScreen/TopicVideoQuiz';
import {emailPattern, required} from './Constants';

export const AuthNav = [
  {n: 'login', c: Login},
  {n: 'register', c: Register},
];

export const UserNav = [
  {n: 'home', c: Home},
  {n: 'bibletest', c: BibleTest},
  {n: 'topicvideoquiz', c: TopicVideoQuiz},
  ,
];

export const RegisterInput = [
  {
    icon: 'person',
    p: 'First Name',
    name: 'f_name',
  },
  {
    icon: 'person',
    p: 'Last Name',
    name: 'l_name',
  },
  {
    icon: 'email',
    p: 'Email',
    name: 'email',
  },
  {
    icon: 'phone',
    p: 'Phone Number',
    name: 'number',
    title: 'Uk and Usa Phone Number',
  },
  {
    icon: 'lock',
    p: 'Password',
    name: 'password',
    pw: true,
  },
  {
    icon: 'lock',
    p: 'confirm Password',
    name: 'c_pass',
    pw: true,
  },
];

export const loginField = [
  {
    name: 'email',
    defaultValue: 'player9@gmail.com',
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
    defaultValue: '12345678',
    rules: {
      required: required('Password'),
    },
    placeholder: 'Password',
    isPass: true,
    icName: 'lock',
  },
];
