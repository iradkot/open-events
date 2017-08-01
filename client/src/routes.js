import React from 'react';
import weatherApp from './weatherApp';
import Page404 from './weatherApp/common/404';
import About from './weatherApp/common/About';

import {Switch, Route, Redirect} from 'react-router-dom';

const Routesss = () => (
    <div className="container">
        <Switch>
            <Route name="home" exact path='/' component={weatherApp} />
            <Route name="about" exact path='/about' component={About} />
            <Route path="*" component={Page404}/>
        </Switch>
    </div>
)

export default Routesss;