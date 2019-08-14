import {
  createStore, applyMiddleware, combineReducers, compose,
} from 'redux';
import thunk from 'redux-thunk';
import { data } from './data';
import { user } from './user';
import { toUser } from './toUser';

const reducers = combineReducers({
  data,
  user,
  toUser,
});

const configureStore = () => {
  return createStore(
    reducers,
    compose(applyMiddleware(thunk), 
      window.__REDUX_DEVTOOLS_EXTENSION? 
        window.__REDUX_DEVTOOLS_EXTENSION__(): f => f)
  )
}

export default configureStore;
