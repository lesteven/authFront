import { useReducer } from 'react';
import qs from 'querystringify';

const initialState = {
  isLoading: false,
  isError: false,
  errorMsg: '',
}

const INIT = 'CRUD_INIT';
const SUCCESS = 'CRUD_SUCCESS';
const ERROR = 'CURD_ERROR';

const reducer = (state, action) => {
  switch (action.type) {
    case INIT:
      return {
        ...state,
        isLoading: true,
        isError: false,
        errorMsg: ''
      };
    case SUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: false,
        errorMsg: '',
        data: action.payload
      };
    case ERROR:
      return {
        ...state,
        isLoading: false,
        isError: true,
        errorMsg: action.payload
      };
    default:
      return state;
  }
}



const crudData = (method) => (url, data) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const crud = async (e) => {
    e.preventDefault();
    dispatch({type: INIT});
    const res = await fetch(url, {
      method,
      credentials: 'include',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: qs.stringify(data)
    }).catch(e => {
      dispatch({type: ERROR});
      console.log(e);
    });

    const json = await res.json().catch(e => {
      dispatch({type: ERROR});
      console.log(e);
    });
    if (json.data) {
      dispatch({type: SUCCESS, payload: json.data});
    } else {
      dispatch({type: ERROR, payload: json.error});
    }
    console.log(json);
  }
  return [state, crud];
}

export const useGet = crudData('GET');
export const usePost = crudData('POST');
export const usePut = crudData('PUT');
export const useDelete = crudData('DELETE');
