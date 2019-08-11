const fetching = 'FETCHING';
const success = 'DATA FETCHED';
const hello = 'HELLO';
const reset = 'RESET';

const fetchAC = () => {
  return {
    type: fetching
  }
}

const successAC = (data) => {
  return {
    type: success,
    json: data
  }
}

export const sayHello = () => {
  return {
    type: hello,
  }
}

export const clear = () => {
  return {
    type: reset
  }
}

export const fetchData = (url) => async (dispatch) => {
    dispatch(fetchAC());
    const res = await fetch('/data');
    const json = await res.json();
    dispatch(successAC(json));
}

export const fetch2 = () => async (dispatch) => {
    console.log('fetch2');
    dispatch(fetchAC());
    const res = await fetch('/data');
    const json = await res.json();
    dispatch(successAC(json));
}

const initialState = {json:{data:[]}};

export const data = (state = initialState, action) => {
  switch(action.type) {
    case fetching:
      return { 
        ...state,
        isLoading: true
      };
    case success:
      return {
        ...state,
        isLoading: false,
        json: action.json,
      }
    case hello:
      return {
        ...state,
        hello: 'hello there!'
      }
    case reset:
      return initialState;
    default:
      return state;
  }
}

