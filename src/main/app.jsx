import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';

import store from './core/store';
import Router from './core/router';

ReactDom.render(
    <Provider store={store}>
        <Router />
    </Provider>,
    document.getElementById('container')
);