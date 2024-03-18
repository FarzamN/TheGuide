export const USER_DETAILS = 'USER_DETAILS';

const initial_state = {
  userDetails: false,
};

const holderReducer = (state = initial_state, action) => {
  switch (action.type) {
    case USER_DETAILS:
      return {
        ...state,
        userDetails: action.payload,
      };
    default: {
      return state;
    }
  }
};

export default holderReducer;
