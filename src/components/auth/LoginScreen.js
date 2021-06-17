import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import validator from 'validator';
import { Link } from 'react-router-dom';
import { loginEmailAndPassword } from '../../actions/auth';
import { startGoogleLogin } from '../../actions/auth';
import { useForm } from '../../hooks/useForm';


export const LoginScreen = () => {
    const {loading} = useSelector(state => state.ui);
    const [validation, setvalidation] = useState({valid:true,msg:''});
    const [show, setShow] = useState(false);
    
    const dispatch = useDispatch();
    const [formValues, handleInputChange] = useForm({
        email: '',
        password: ''
    })

    const {email, password} = formValues; 

    const handleLogin = (e)=>{
        e.preventDefault();
        if(isFormValid()){
            dispatch(loginEmailAndPassword(email, password));
        }
        
    }

    const isFormValid = ()=>{
        if( !validator.isEmail(email) ){
            setvalidation({valid:false, msg:'Invalid email'});
            return false;

        }else if(validator.isEmpty(password)){
            setvalidation({
                valid:false,
                msg:'Please enter password'
            });

            return false;
        }

        setvalidation({
            valid:true,
            msg:''
        });
        return true;
    }



    const googleLogin = ()=>{
        dispatch(startGoogleLogin());
    }


    const handleShoeHidePass = ()=>{
        if(show){
            setShow(false);
        }else{
            setShow(true);
        }
    }



    return (
        <div className="auth__main">
            <div className="auth__box-container animate__animated animate__fadeIn ">
                <div className="projectManager__margin">
                <img className="projectManager__logo " src="../JProjectManager-logo.png" alt="Logo" />
                </div>
                
            <h2 className="auth__title">Login to continue</h2>
            <form >
                <input
                className=" auth__input auth__input-text"
                type="text"
                name="email"
                placeholder="Email"
                autoComplete="off"
                value={email}
                onChange={handleInputChange}
                 />

                <input
                className=" auth__input auth__input-text"
                type={`${(show)?'text':'password'}`}
                name="password"
                placeholder="Password"
                value={password}
                onChange={handleInputChange}
                 />

                {(!show)
                    ?(<button className="far fa-eye fa-xs profile-btn-show-password" type="button" onClick={handleShoeHidePass}></button>)
                    :(<button className="far fa-eye-slash fa-xs profile-btn-show-password" type="button" onClick={handleShoeHidePass}></button>)
                }
                 
                 {!(validation.valid) &&(
                    <div className="alert alert-danger" role="alert">
                        {validation.msg}
                    </div>)
                }

            <button 
            className=" auth__button-sign-in btn btn-info "
            onClick={handleLogin}
            disabled={loading}
            >
                Login
            </button>

            <hr/>
                <div className="auth__social-networks">
                    <p><b>Login with social networks</b></p>
                    <div 
                    className="google-btn auth__btn-google aut__btn-google-active "
                    onClick={googleLogin}
                    >
                    <div className="google-icon-wrapper">
                        <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="google button" />
                    </div>
                
                    <p className="btn-text ">
                    <b >Sign in with google</b>
                  </p>
                
                
                </div>
                </div>
               <Link to="/auth/register" className="link link-hover ">
                   Create new account
               </Link>
            </form>
            </div>
        </div>
    )
}
