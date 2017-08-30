/**
 * Created by krzysztofkicinger on 30/08/2017.
 */
import { combineReducers, applyMiddleware, createStore, compose } from 'redux';

import IndexReducer from '../reducers/index.reducer';

const applicationReducers = combineReducers({
    index: IndexReducer
});

const store = createStore(
    applicationReducers
);

export default store;