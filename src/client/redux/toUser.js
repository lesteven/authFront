
const USER_INPUT = 'USER_INPUT';
const CLEAR_INPUT = 'CLEAR_INPUT';

export const inputAC = (payload) => ({
  type: USER_INPUT,
  payload
});

export const clearAC = () => ({
  type: CLEAR_INPUT
});

const initialState = '';

export const toUser = (state = initialState, action) => {
  switch (action.type) {
    case USER_INPUT:
      return action.payload;
    case CLEAR_INPUT:
      return initialState;
    default:
      return state;
  }
}
