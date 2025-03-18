export const USER_DETAILS = 'USER_DETAILS';
export const GET_COUNTRY = 'GET_COUNTRY';
export const GET_CITY = 'GET_CITY';
export const GET_STATE = 'GET_STATE';
export const GET_BIBLE_SCHOOL = 'GET_BIBLE_SCHOOL';
export const GET_EVENT = 'GET_EVENT';
export const GET_GAME = 'GET_GAME';
export const API_SUCCESS = 'API_SUCCESS';
export const PRAYER_SUPPORT_GOAL = 'PRAYER_SUPPORT_GOAL';
export const PRAY_STATUS = 'PRAY_STATUS';
export const PRAYER_TIME = 'PRAYER_TIME';
export const PRAYER_STREAK = 'PRAYER_STREAK';
export const BIBLE_TIME = 'BIBLE_TIME';
export const BIBLE_STREAK = 'BIBLE_STREAK';
export const EMAIL_PASS = 'EMAIL_PASS';
export const GET_HTML = 'GET_HTML';
export const USER_TOTAL_POINTS = 'USER_TOTAL_POINTS';
export const IS_SPONSOR = 'IS_SPONSOR';
export const STUDENT_ROLE_GIVEN = 'STUDENT_ROLE_GIVEN';
export const MINISTRY_PROJECT = 'MINISTRY_PROJECT';
export const SPONSOR_DATA = 'SPONSOR_DATA';
export const PUBLIC_POOL_POINT = 'PUBLIC_POOL_POINT';

const initial_state = {
  userDetails: false,
  get_country: [],
  get_city: [],
  get_state: [],
  get_bible_school: [],
  get_event: [],
  pray_status: [],
  get_game: {},
  pray_support_gola: {},
  api_success: 5,
  student_role_given: 5,
  pray_streak: '0',
  pray_time: '1',
  bible_streak: '0',
  bible_time: 'Due',
  email_pass: {},
  get_html: '',
  user_total_points: 0,
  is_sponsor: 0,
  ministry_project: {},
  sponsor_data: [],
  public_pool_point: 0,
};

const holderReducer = (state = initial_state, action) => {
  switch (action.type) {
    case USER_DETAILS:
      return {
        ...state,
        userDetails: action.payload,
      };
    case GET_COUNTRY:
      return {
        ...state,
        get_country: action.payload,
      };
    case GET_CITY:
      return {
        ...state,
        get_city: action.payload,
      };
    case GET_STATE:
      return {
        ...state,
        get_state: action.payload,
      };
    case GET_BIBLE_SCHOOL:
      return {
        ...state,
        get_bible_school: action.payload,
      };
    case GET_EVENT:
      return {
        ...state,
        get_event: action.payload,
      };
    case GET_GAME:
      return {
        ...state,
        get_game: action.payload,
      };
    case API_SUCCESS:
      return {
        ...state,
        api_success: action.payload,
      };
    case STUDENT_ROLE_GIVEN:
      return {
        ...state,
        student_role_given: action.payload,
      };
    case PRAYER_SUPPORT_GOAL:
      return {
        ...state,
        pray_support_gola: action.payload,
      };
    case PRAY_STATUS:
      return {
        ...state,
        pray_status: action.payload,
      };
    case PRAYER_STREAK:
      return {
        ...state,
        pray_streak: action.payload,
      };
    case PRAYER_TIME:
      return {
        ...state,
        pray_time: action.payload,
      };
    case BIBLE_TIME:
      return {
        ...state,
        bible_time: action.payload,
      };
    case BIBLE_STREAK:
      return {
        ...state,
        bible_streak: action.payload,
      };
    case EMAIL_PASS:
      return {
        ...state,
        email_pass: action.payload,
      };
    case GET_HTML:
      return {
        ...state,
        get_html: action.payload,
      };
    case USER_TOTAL_POINTS:
      return {
        ...state,
        user_total_points: action.payload,
      };
    case IS_SPONSOR:
      return {
        ...state,
        is_sponsor: action.payload,
      };
    case MINISTRY_PROJECT:
      return {
        ...state,
        ministry_project: action.payload,
      };
    case SPONSOR_DATA:
      return {
        ...state,
        sponsor_data: action.payload,
      };
    case PUBLIC_POOL_POINT:
      return {
        ...state,
        public_pool_point: action.payload,
      };
    default: {
      return state;
    }
  }
};

export default holderReducer;
