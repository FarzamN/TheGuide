export const USER_DETAILS = 'USER_DETAILS';
export const GET_COUNTRY = 'GET_COUNTRY';
export const GET_CITY = 'GET_CITY';
export const GET_STATE = 'GET_STATE';
export const GET_BIBLE_SCHOOL = 'GET_BIBLE_SCHOOL';
export const GET_EVENT = 'GET_EVENT';
export const GET_GAME = 'GET_GAME';
export const API_SUCCESS = 'API_SUCCESS';
export const PRAYER_SUPPORT_GOAL = 'PRAYER_SUPPORT_GOAL';

export const PRAYER_TIME = 'PRAYER_TIME';
export const PRAYER_STREAK = 'PRAYER_STREAK';
// export const PRAY_STATUS = 'PRAY_STATUS';

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
  pray_streak: '1',
  pray_time: '60',
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
    case PRAYER_SUPPORT_GOAL:
      return {
        ...state,
        pray_support_gola: action.payload,
      };
    case 'PRAY_STATUS':
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

    default: {
      return state;
    }
  }
};

export default holderReducer;
