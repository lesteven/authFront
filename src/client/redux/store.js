import {
  createStore, applyMiddleware, combineReducers, compose,
} from 'redux';
import thunk from 'redux-thunk';
import { data } from './data';
import { user } from './user';

const reducers = combineReducers({
  data,
  user
});

const configureStore = () => {
  return createStore(
    reducers,
    compose(applyMiddleware(thunk), window.__REDUX_DEVTOOLS_EXTENSION__())
  )
}

export default configureStore;
