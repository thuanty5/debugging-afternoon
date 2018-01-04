import reduxPromiseMiddleware from 'redux-promise-middleware';
import {createStore, applyMiddleware} from 'redux';

import reducer from './reducer';

export default createStore(reducer, applyMiddleware(reduxPromiseMiddleware()));