import React from 'react';
import ReactDOM from 'react-dom';
import css from './index.css';
import { Provider } from 'react-redux';
import configureStore from '../redux/store';
import Template from '../comp/Template';

const Index = () => {
  return(
    <Provider store = { configureStore() }>
        <Template />
    </Provider>
  )
}

ReactDOM.render(<Index />,document.getElementById('index'));
