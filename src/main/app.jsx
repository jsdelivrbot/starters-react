import React from 'react';
import ReactDom from 'react-dom';
import IndexComponent from './components/index';
import { Provider } from 'react-redux';
import store  from './core/store';

ReactDom.render(
    <Provider store={store}>
        <IndexComponent />
    </Provider>,
    document.getElementById('container')
);