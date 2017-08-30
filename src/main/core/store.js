/**
 * Created by krzysztofkicinger on 30/08/2017.
 */
import { combineReducers, applyMiddleware, createStore, compose } from 'redux';

import IndexReducer from '../reducers/index.reducer';

const applicationReducers = combineReducers({
    index: IndexReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    applicationReducers,
    composeEnhancers(
        applyMiddleware()
    )
);

export default store;