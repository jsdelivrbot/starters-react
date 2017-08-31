import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import { Route, Switch } from "react-router";
import { BrowserRouter } from "react-router-dom";

import store from './core/store';
import Router from './core/router';

import IndexComponent from "./components/index";
import PathComponent from "./components/path";

ReactDom.render(
    <BrowserRouter>
        <Provider store={store}>
            <Switch>
                <Route path='/path' component={PathComponent}/>
                <Route path='/' component={IndexComponent} exact={true}/>
            </Switch>
        </Provider>
    </BrowserRouter>,
    document.getElementById('container')
);