import React from 'react';
import { Redirect, Route, Switch } from 'react-router';
import { ProfileScreen } from '../components/project-manager/ProfileScreen';
import { ProjectManagerScreen } from '../components/project-manager/ProjectManagerScreen';
import { ProjectsScreen } from '../components/project-manager/ProjectsScreen';
import { NavBar } from '../components/ui/NavBar';

export const ProjectRouter = () => {
    return (
        <>
            <NavBar />
            <Switch>
                <Route path="/home/projects" component={ProjectsScreen} />
                <Route path="/home/manage" component={ProjectManagerScreen} />
                <Route path="/home/profile" component={ProfileScreen} />
                <Redirect to="/home/projects" />
            </Switch>
        </>
    )
}
