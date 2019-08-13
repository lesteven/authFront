

const LOGGED_IN = 'LOGGED_IN';
const LOGGED_OUT = 'LOGGED_OUT';

export const loginAC = (json) => {
  return {
    type: LOGGED_IN,
    payload: json.data
  }
};

export const logoutAC = () => {
  return {
    type: LOGGED_OUT
  }
};


const initialState = {
  username: ''
}

export const user = (state = initialState, action) => {
  switch (action.type) {
    case LOGGED_IN: 
      return {
        username: action.payload
      };
    case LOGGED_OUT:
      return initialState;
    default:
      return state;
  }
};
