import React from 'react'
import { Redirect, Route, Switch } from 'react-router'

import { LoginScreen } from '../components/auth/LoginScreen'
import { RegisterScreen } from '../components/auth/RegisterScreen'
import { LandinPageScreen } from '../components/project-manager/LandinPageScreen'

export const AuthRouter = () => {
    return (
        <div>
            <Switch>
                <Route path="/auth/login" component={LoginScreen} />
                <Route path="/auth/register" component={RegisterScreen} />
                <Route path="/auth/landingPage" component={LandinPageScreen} />
                <Redirect to="/auth/landingPage" />
            </Switch>
        </div>
    )
}
