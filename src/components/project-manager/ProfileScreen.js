import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import validator from 'validator';
import {startUpdateEmail, startUpdateName, startUpdatePassword, startUploadImage } from '../../actions/auth';
import { useForm } from '../../hooks/useForm';

export const ProfileScreen = () => {
    const {name:name2, email:email2, photoURL} = useSelector(state => state.auth);
    const {loading} = useSelector(state => state.ui);
    const [formValues, handleInputChange, reset] = useForm({name:'', email:'',password1:'',password2:''});
    const dispatch = useDispatch();

    const [editableName, setEditableName] = useState(false);
    const [editableEmail, setEditableEmail] = useState(false);
    const [validation, setValidation] = useState({valid:true, msg:''});

    const {name, email, password1, password2} = formValues;

    const handleProfileImage = ()=>{
    
        document.querySelector('#fileSelector').click();
    }

    const handleFileChange = (e)=>{
     const file =  e.target.files[0];
     if(file){
         dispatch(startUploadImage(file))
    }
    }


   const handleName = ()=>{
    if(editableName){
        setEditableName(false);
    }else{
        setEditableName(true);
    }
    
    }

    const handleUpdateName = () =>{
        if(name.trim().length === 0){
            setValidation({
                valid:false,
                msg:'Name is required'
            });
           
            return
        }
        setValidation({
            valid: true,
            msg:''
        });

        dispatch(startUpdateName(name));
        setEditableName(false);
    }


    const handleEmail = ()=>{
        if(editableEmail){
            setEditableEmail(false);
        }else{
            setEditableEmail(true);
        }
        
        }

        const handleUpdateEmail= ()=>{
            if(!validator.isEmail(email)){
              
                setValidation({
                    valid:false,
                    msg:'Invalid email'
                });
    
                return;
            }

            dispatch(startUpdateEmail(email));
            setEditableEmail(false);
        }


        const handleUpdatePassword = ()=>{
            if(password1.length <= 5 || password1 !== password2){
                setValidation({
                    valid:false,
                    msg:'The password must contain at least 6 characters and match the confirmation'
                });
    
                return;
            }
            dispatch(startUpdatePassword(password1));
    
            setValidation({valid:true, msg:''});
            reset();
        }

    return (
        <div className="prfile-bg profile-cont1">
            <div className="profile-cont m-3 container animate__animated animate__fadeIn">
           
           {(loading) && (<div class="spinner-border text-info profile-spiner" role="status">
                    <span class="visually-hidden"></span>
                </div>)
                
            }
           
             <div  >
            {(photoURL==null)
            
            ?(<img src="../img/user.png" className="profile-image mx-auto d-block" alt="..."></img>)
            :(<img src={photoURL} className="profile-image mx-auto d-block" alt="..."></img>)
            }
            
            <div className="profile-cont1">
            
            <button className="btn task-card-btn-width profile-btn-img" onClick={handleProfileImage}><span className="fas fa-plus-circle task-card-icon-color"></span></button>
            <input type="file" onChange={handleFileChange} id="fileSelector" style={{display: 'none'}}/>
            </div> 
            
               
                {!(validation.valid) &&(
                <div className="alert alert-danger" role="alert">
                {validation.msg}
                </div>)
            }

               

                <h5 className="profile-title">Name: {(editableName)
                            ?(
                            <>
                            <input 
                            className="profile__input"
                            type="text" 
                            placeholder="Name" 
                            name="name" 
                            onChange={handleInputChange}
                            value={name}
                            />
                             <button className="btn task-card-btn-width" onClick={handleName}><span className="fas fa-window-close task-card-icon-color"></span></button>
                            <button className="btn task-card-btn-width" onClick={handleUpdateName}><span className="fas fa-save task-card-icon-color"></span></button>
                            </>
                            ) 
                        :(<><label className="">
                            {name2}
                            <button className="btn task-card-btn-width" onClick={handleName} ><span className="fas fa-edit task-card-icon-color"></span></button>
                        </label>
                         
                         </>
                        )}
                 
                </h5>

                <h5>Email:  {(editableEmail)
                            ?(<><input 
                                className="profile__input"
                            type="text" 
                            placeholder="Email" 
                            name="email" 
                            onChange={handleInputChange}
                            value={email}
                            />
                             <button className="btn task-card-btn-width" onClick={handleEmail}><span className="fas fa-window-close task-card-icon-color"></span></button>
                            <button className="btn task-card-btn-width" onClick={handleUpdateEmail}><span className="fas fa-save task-card-icon-color"></span></button>
                            </>
                            ) 
                        :(<><label className="">
                            {email2}
                             <span className=""><button className="btn task-card-btn-width" onClick={handleEmail}  ><span className="fas fa-edit task-card-icon-color"></span></button></span> 
                        </label>
                      
                        </>
                        )}
                    
                </h5>

                <h4>
                        Change Password: 
                        <input 
                                className="profile__input"
                            type="password" 
                            placeholder="New Password" 
                            name="password1" 
                            onChange={handleInputChange}
                            value={password1}
                            />

                            <input 
                                className="profile__input"
                            type="password" 
                            placeholder="Confirm Password" 
                            name="password2" 
                            onChange={handleInputChange}
                            value={password2}
                            />

                            <button className="btn btn-info mb-2" onClick={handleUpdatePassword}>Change and Save</button>
                </h4>

             </div>
          </div>
        </div>
    )
}
