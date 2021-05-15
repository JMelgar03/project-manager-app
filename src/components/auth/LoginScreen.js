import React from 'react';
import '../../styles/auth/auth.css'

export const LoginScreen = () => {
    return (
        <div className="auth__main">
            <div className="auth__box-container">
            <h2 className="auth__title">Please Sign In</h2>
            <form >
                <input
                className="form-control"
                type="text"
                name="email"
                placeholder="Email"
                autoComplete="off"
                 />

                <input
                className="form-control"
                type="password"
                name="password"
                placeholder="password"
                
                 />

            <button className=" auth__button-sign-in btn btn-primary ">
                Sign in
            </button>
            </form>
            </div>
        </div>
    )
}
