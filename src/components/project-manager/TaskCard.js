import React from 'react'

export const TaskCard = ({taskTitle}) => {
    return (
        <div className="card task-card-width task-card-height" >
            <div className="task-card-div">
            <button className="btn task-card-btn-width task-card-btn-move"><span className="fas fa-chevron-left task-card-icon-color"></span></button>
            <button className="btn task-card-btn-width task-card-btn-move"><span className="fas fa-chevron-right task-card-icon-color"></span></button>
            </div>
        <div className="card-body">
        
           <p className="card-text">{taskTitle}</p>
          
        </div>

        <div>
            <button className="btn task-card-btn-width"><span className="fas fa-edit task-card-icon-color"></span></button>
            <button className="btn task-card-btn-width"><span className="fas fa-trash-alt task-card-icon-color"></span></button>
        </div>
            
       </div>
    )
}
