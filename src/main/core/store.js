/**
 * Created by krzysztofkicinger on 30/08/2017.
 */
import { combineReducers, applyMiddleware, createStore, compose } from 'redux';
import { persistStore, autoRehydrate } from 'redux-persist';
import thunk from 'redux-thunk';
import { reducer as FormReducer } from 'redux-form';

import IndexReducer from '../reducers/index.reducer';

const applicationReducers = combineReducers({
    index: IndexReducer,
    form: FormReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    applicationReducers,
    composeEnhancers(
        applyMiddleware(thunk),
        autoRehydrate()
    )
);

persistStore(store, {
    blacklist: ['form']
});

export default store;