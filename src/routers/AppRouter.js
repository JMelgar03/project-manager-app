import React, { useEffect, useState } from 'react';
import {firebase} from '../firebase/firebase-config';
import {
    BrowserRouter as Router,
    Switch,
    Redirect
  } from "react-router-dom";


import { AuthRouter } from './AuthRouter';
import { useDispatch } from 'react-redux';
import { login } from '../actions/auth';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';
import { ProjectRouter } from './ProjectRouter';
import { setActiveProject } from '../actions/project';

export const AppRouter = () => {

    const dispatch = useDispatch();
    const [check, setCheck] = useState(true);
    const [isLoggedIn, setisLoggedIn] = useState(false);
    

    useEffect(() => {
        firebase.auth().onAuthStateChanged(async( user )=>{
            
            if(user?.uid){
            
                dispatch(login(user.uid, user.displayName, user.emailVerified,user.email));

                setisLoggedIn(true);

                if(localStorage.getItem('activeProject')!==null){
                    const project = JSON.parse(localStorage.getItem('activeProject'))
                   
                    dispatch(setActiveProject(project));
                }
                
            }
            else{
                setisLoggedIn(false);
            }

            setCheck(false);
        });
        
    }, [dispatch, setCheck, setisLoggedIn]);

    if(check){
        return(
            <div className="wait-screen">
                
                <span><i className="fas fa-spinner fa-2x"> </i> </span> 
                <span> <h2> checking please wait...</h2></span>


            </div>
        )
    }

    
    return (
        <Router>
           <Switch>
               <PublicRoute isLogged={isLoggedIn}  path="/auth" component={AuthRouter} />
               
               <PrivateRoute  isLogged={isLoggedIn}  path="/home" component={ProjectRouter} />
               

               <Redirect to="/auth/landingPage" />
           </Switch>
        </Router>
    )
}
