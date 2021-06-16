import React, { useState } from 'react';

export const ProfileScreen = () => {
    const [editableName, setEditableName] = useState(false);
    const [editableEmail, setEditableEmail] = useState(false);

   const handleName = ()=>{
    if(editableName){
        setEditableName(false);
    }else{
        setEditableName(true);
    }
    
    }

    const handleEmail = ()=>{
        if(editableEmail){
            setEditableEmail(false);
        }else{
            setEditableEmail(true);
        }
        
        }

    return (
        <div className="prfile-bg profile-cont1">
            <div className="profile-cont m-3 container animate__animated animate__fadeIn">
             <div className="">
             <img src="../img/user.png" className="profile-image mx-auto d-block" alt="..."></img>
                <h2>Profile User</h2>
               
                <h5>Name: {(editableName)
                            ?(
                            <>
                            <input 
                            className="profile__input"
                            type="text" 
                            placeholder="Name" 
                            name="name" />
                             <button className="btn task-card-btn-width" onClick={handleName}><span className="fas fa-window-close task-card-icon-color"></span></button>
                            <button className="btn task-card-btn-width" onClick={handleName}><span className="fas fa-save task-card-icon-color"></span></button>
                            </>
                            ) 
                        :(<><label>
                            Jonathan
                        </label>
                         <button className="btn task-card-btn-width" onClick={handleName} ><span className="fas fa-edit task-card-icon-color"></span></button>
                         </>
                        )}
                </h5>

                <h5>Email:  {(editableEmail)
                            ?(<><input 
                                className="profile__input"
                            type="text" 
                            placeholder="Email" 
                            name="email" />
                             <button className="btn task-card-btn-width" onClick={handleEmail}><span className="fas fa-window-close task-card-icon-color"></span></button>
                            <button className="btn task-card-btn-width" onClick={handleEmail}><span className="fas fa-save task-card-icon-color"></span></button>
                            </>
                            ) 
                        :(<><label>
                             email@algo.com
                        </label>
                        <button className="btn task-card-btn-width" onClick={handleEmail}  ><span className="fas fa-edit task-card-icon-color"></span></button>
                        </>
                        )}

                </h5>

                <h4>
                        Change Password: 
                        <input 
                                className="profile__input"
                            type="password" 
                            placeholder="New Password" 
                            name="password1" />

<input 
                                className="profile__input"
                            type="password" 
                            placeholder="Confirm Password" 
                            name="password1" />

                            <button className="btn btn-info mb-2">Change and Save</button>
                </h4>

             </div>
          </div>
        </div>
    )
}
