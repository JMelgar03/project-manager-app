import React, { useEffect, useState } from 'react';
import {firebase} from '../firebase/firebase-config';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect
  } from "react-router-dom";

import { ProjectManagerScreen } from '../components/project-manager/ProjectManagerScreen';
import { AuthRouter } from './AuthRouter';
import { useDispatch } from 'react-redux';
import { login } from '../actions/auth';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';

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
            <h1>ESPERE...</h1>
        )
    }

    
    return (
        <Router>
           <Switch>
               <PublicRoute isLogged={isLogged}  path="/auth" component={AuthRouter} />
               
               <PrivateRoute exact isLogged={isLogged} path="/" component={ProjectManagerScreen} />

               <Redirect to="/" />
           </Switch>
        </Router>
    )
}
