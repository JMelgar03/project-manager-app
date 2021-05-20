import React from 'react';
import { Redirect, Route, Switch } from 'react-router';
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
                <Redirect to="/home/projects" />
            </Switch>
        </>
    )
}
