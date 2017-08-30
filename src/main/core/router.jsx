import React from 'react';
import { Route, Switch } from "react-router";
import { BrowserRouter } from "react-router-dom";

import IndexComponent from "../components/index";
import PathComponent from "../components/path";

export default () =>
    <BrowserRouter>
        <Switch>
            <Route path='/path' component={PathComponent}/>
            <Route path='/' component={IndexComponent} exact={true}/>
        </Switch>
    </BrowserRouter>;