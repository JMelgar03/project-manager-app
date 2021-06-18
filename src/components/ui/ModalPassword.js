import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import validator from 'validator';
import { startResetPassword } from '../../actions/auth';
import { useForm } from '../../hooks/useForm';



export const ModalPassword = () => {
    const dispatch = useDispatch();
    const [formValues,handleInputChange,reset] = useForm({email :''});
    const [validation, setValidation] = useState({valid:true, msg:''});

    const {email} = formValues; 

    const handleResetPassword = ()=>{
        if(!validator.isEmail(email)){
          
            setValidation({
                valid:false,
                msg:'Invalid email'
            });

            return;
        }

        dispatch(startResetPassword(email));
        setValidation({
            valid:true,
            msg:''
        });
    }

    const handleReset = ()=>{
        setValidation({
            valid:true,
            msg:''
        });

        reset();
    }

    return (
        <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Restore Password</h5>
             
            </div>
            <div className="modal-body">
              <input type="text" className="profile__input" placeholder="Enter your account email." onChange={handleInputChange}  name="email" value={email}/>

              {!(validation.valid) &&(
                <div className="alert alert-danger" role="alert">
                {validation.msg}
                </div>)
            }

            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={handleReset}>Close</button>
              <button type="button" className="btn btn-info" onClick={handleResetPassword}>Reset Password</button>
            </div>
          </div>
        </div>
      </div>
    )
}
