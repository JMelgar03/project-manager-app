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

export const AppRouter = () => {

    const dispatch = useDispatch();
    const [check, setCheck] = useState(true);
    const [isLogged, setisLogged] = useState(false);

    useEffect(() => {
        firebase.auth().onAuthStateChanged(( user )=>{
            if(user?.uid){
                dispatch(login(user.uid, user.displayName));
                setisLogged(true);
            } else{
                setisLogged(false);
            }

            setCheck(false);
        });
        
    }, [dispatch, setCheck, setisLogged]);

    if(check){
        return(
            <div className="wait-screen">
                
                <span><i class="fas fa-spinner fa-2x"> </i> </span> 
                <span> <h2> checking please wait...</h2></span>


            </div>
        )
    }

    
    return (
        <Router>
           <Switch>
               <PublicRoute isLogged={isLogged}  path="/auth" component={AuthRouter} />
               
               <PrivateRoute  isLogged={isLogged} path="/home" component={ProjectRouter} />
               

               <Redirect to="/home" />
           </Switch>
        </Router>
    )
}
