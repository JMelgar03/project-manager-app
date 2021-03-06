import React from 'react';
import { Redirect, Route } from 'react-router';
import PropTypes from 'prop-types';

export const PublicRoute = ({
    isLogged,
    
    component: Component,
    ...rest
}) => {

    return (<Route  
            {...rest}
            component={(props)=>(
                (isLogged)
                ? (<Redirect to="/home" />)
                : (<Component {...props} />)
            )
        }
        
        />
            
        
    )
}

PublicRoute.propTypes = {
    isLogged: PropTypes.bool.isRequired,
    component: PropTypes.func.isRequired
}