import { createStore, applyMiddleware } from 'redux';
import Thunk from 'redux-thunk';

import todoApp from '../reducers/todoApp'

let store = createStore(todoApp, applyMiddleware(Thunk))

export default store;
