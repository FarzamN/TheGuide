import {IconType} from 'react-native-dynamic-vector-icons';
import {Login, Register, Country, City, State} from '../screen/authentication';
import {Home} from '../screen/user';
import BibleTest from '../screen/user/TabScreen/BibleTest';
import TopicVideoQuiz from '../screen/user/TabScreen/TopicVideoQuiz';
import {emailPattern, required} from './Constants';

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
    title: 'UK and USA Phone Number',
  },
  // {
  //   icon: 'pin-drop',
  //   p: 'Address',
  //   name: 'address',
  // },
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
