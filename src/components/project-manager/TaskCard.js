import React from 'react'

export const TaskCard = ({taskTitle}) => {
    return (
        <div className="card task-card-width" >
        <div className="card-body">
           
           <p className="card-text">{taskTitle}</p>
          
        </div>
       </div>
    )
}
