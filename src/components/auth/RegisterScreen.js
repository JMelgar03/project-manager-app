import React, { useState } from 'react';
import validator from 'validator';
import { Link } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import { useDispatch, useSelector } from 'react-redux';
import { createUserEmailAndPassword } from '../../actions/auth';
/*
        {
            name: 'Jonathan',
            lastname: 'Melgar',
            email: 'melgarjonathan03@gmail.com',
            password: '123456',
            password2: '123456'
        }
*/

export const RegisterScreen = () => {

      const [validation, setvalidation] = useState({valid:true,msg:''});
      const dispatch = useDispatch();
      const {loading} = useSelector(state => state.ui)
    
    const [formValues, handleInputChange] = useForm({
        name: 'Jonathan',
        lastname: 'Melgar',
        email: 'melgarjonathan03@gmail.com',
        password: '123456',
        password2: '123456'
    });

    const {name, lastname, email, password, password2} = formValues; 

    const handleRegister = (e)=>{
        e.preventDefault();
       if(isFormValid()){
            dispatch(createUserEmailAndPassword(name, lastname, email, password));
       }
    }



    const isFormValid = ()=>{
        if(name.trim().length === 0){
            setvalidation({
                valid:false,
                msg:'Name is required'
            });
            return false;

        }else if(!validator.isEmail(email)){
            console.log('Invalid email');
            setvalidation({
                valid:false,
                msg:'Invalid email'
            });

            return false;
        }else if(lastname.trim().length === 0){

            console.log('Last Name is required');
            setvalidation({
                valid:false,
                msg:'Last Name is required'
            });
            return false;
        }
        else if(password.length <= 5 || password !== password2){
            setvalidation({
                valid:false,
                msg:'The password must contain at least 6 characters and match the confirmation'
            });

            return false;
        }

        setvalidation({valid:true, msg:''});
    return true
    }





    return (
        <div className="auth__main">
        <div className="auth__box-container animate__animated animate__fadeIn">
            <div className="projectManager__margin">
            <img className="projectManager__logo " src="../JProjectManager-logo.png" alt="Logo" />
            </div>
            
        <h2 className="auth__title">Create Your Account</h2>
        <form onSubmit={handleRegister} >
            <input
            className=" auth__input auth__input-text"
            type="text"
            name="name"
            placeholder="Name"
            autoComplete="off"
            onChange={handleInputChange}
            value={name}
             />

            <input
            className=" auth__input auth__input-text"
            type="text"
            name="lastname"
            placeholder="Last Name"
            autoComplete="off"
            onChange={handleInputChange}
            value={lastname}
             />

            <input
            className=" auth__input auth__input-text"
            type="text"
            name="email"
            placeholder="Email"
            autoComplete="off"
            onChange={handleInputChange}
            value={email}
             />

            <input
            className=" auth__input auth__input-text"
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleInputChange}
            value={password}
             />

            <input
            className=" auth__input auth__input-text"
            type="password"
            name="password2"
            placeholder="Confirm Password"
            onChange={handleInputChange}
            value={password2}
             />

            {!(validation.valid) &&(
            <div className="alert alert-danger" role="alert">
                {validation.msg}
            </div>)
            }

        <button 
          className=" auth__button-sign-in btn btn-primary "
          disabled={loading}
          >
            Register
        </button>

        <hr/>
         
           <Link to="/auth/login" className="link link-hover ">
               Have account? sign in!
           </Link>
        </form>
        </div>
    </div>
    )
}
