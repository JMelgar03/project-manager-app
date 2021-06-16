import React from 'react'
import { Provider } from 'react-redux';
import { AppRouter } from './routers/AppRouter';
import { store } from './store/store';
import './styles/auth/auth.css';
import './styles/auth/landing.css';
import './styles/projectManager/logo.css';
import './styles/projectManager/projects-screen.css';
import './styles/ui/navbar.css';
import './styles/ui/modal.css';
import './styles/ui/tableImage.css';
import './styles/projectManager/project-manager-screen.css';
import './styles/projectManager/task-card.css';
import './styles/projectManager/profile.css';

export const ProjectApp = () => {
    return (
        <div>
            <Provider store={store}>

            <AppRouter />

            </Provider>

            
        </div>
    )
}
