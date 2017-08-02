import React from 'react';
import weatherApp from './weatherApp';
import Page404 from './weatherApp/common/404';
import About from './weatherApp/common/About';
import SignIn from './weatherApp/common/SignIn';
import EventPage from './weatherApp/EventPage';
import addEvent from './weatherApp/addEvent';

import { Switch, Route, Redirect } from 'react-router-dom';

const Routesss = () => (
    <div className="container">
        <Switch>
            <Route name="home" exact path='/' component={weatherApp} />
            <Route name="about" exact path='/about' component={About} />
            <Route name="login" exact path='/login' component={SignIn} />
            <Route path="addEvent" exact path='/addEvent' component={addEvent} />
            <Route path='/events/:eventid' component={EventPage} />
            <Route path="*" component={Page404} />
        </Switch>
    </div>
)

export default Routesss;