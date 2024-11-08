export const USER_DETAILS = 'USER_DETAILS';
export const GET_COUNTRY = 'GET_COUNTRY';
export const GET_CITY = 'GET_CITY';
export const GET_STATE = 'GET_STATE';
export const GET_BIBLE_SCHOOL = 'GET_BIBLE_SCHOOL';
export const GET_EVENT = 'GET_EVENT';
export const GET_GAME = 'GET_GAME';

const initial_state = {
  userDetails: false,
  get_country: [],
  get_city: [],
  get_state: [],
  get_bible_school: [],
  get_event: [],
  get_game: {},
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
    default: {
      return state;
    }
  }
};

export default holderReducer;
