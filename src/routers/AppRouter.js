import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect
  } from "react-router-dom";
import { LoginScreen } from '../components/auth/LoginScreen';
import { RegisterScreen } from '../components/auth/RegisterScreen';
import { ProjectManagerScreen } from '../components/project-manager/ProjectManagerScreen';

export const AppRouter = () => {
    return (
        <Router>
           <Switch>
               <Route exact path="/login" component={LoginScreen} />
               <Route exact path="/register" component={RegisterScreen} />
               <Route exact path="/" component={ProjectManagerScreen} />

               <Redirect to="/" />
           </Switch>
        </Router>
    )
}
