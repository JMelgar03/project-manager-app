import React from 'react'
import { Provider } from 'react-redux';
import { AppRouter } from './routers/AppRouter';
import { store } from './store/store';
import './styles/auth/auth.css';
import './styles/projectManager/logo.css'

export const ProjectApp = () => {
    return (
        <div>
            <Provider store={store}>

            <AppRouter />

            </Provider>

            
        </div>
    )
}
