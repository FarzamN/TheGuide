export const USER_DETAILS = 'USER_DETAILS';
export const GET_SERVICES = 'GET_SERVICES';


const initial_state = {
  userDetails: null,
  get_services: [],
};

const holderReducer = (state = initial_state, action) => {
  switch (action.type) {
    case USER_DETAILS:
      return {
        ...state,
        userDetails: action.payload,
      };
    case GET_SERVICES:
      return {
        ...state,
        get_services: action.payload,
      };
    default: {
      return state;
    }
  }
};

export default holderReducer;
