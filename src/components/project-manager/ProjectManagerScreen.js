import React from 'react'
import { useDispatch } from 'react-redux'
import { startlogOut } from '../../actions/auth';

export const ProjectManagerScreen = () => {
    const dispatch = useDispatch();

    const handleLogOut =()=>{
        dispatch(startlogOut());    
    }
    
    return (
        <div>
            <h2>ProjectManagerScreen</h2>
            <button 
                className="btn btn-danger"
                onClick={handleLogOut}
                >
                LogOut
            </button>
        </div>
    )
}
