import {Login, Register} from '../screen/authentication';
import {Home} from '../screen/user';
import BibleTest from '../screen/user/TabScreen/BibleTest';
import TopicVideoQuiz from '../screen/user/TabScreen/TopicVideoQuiz';

export const AuthNav = [
  {n: 'login', c: Login},
  {n: 'register', c: Register},
];

export const UserNav = [
  {n: 'home', c: Home},
  {n: 'bibletest', c: BibleTest},
  {n: 'topicvideoquiz', c: TopicVideoQuiz},
,];
