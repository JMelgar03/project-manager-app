import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeStatusCard } from '../../actions/project';

export const TaskCard = (task) => {
    const {activeProject} = useSelector(state => state.project);
    const dispatch = useDispatch();
   
    const handleMoveLeft = ()=>{
        if(task.status==='Done'){
            dispatch(changeStatusCard({
                ...activeProject,
                task: activeProject.task.map(t => (t.id === task.id)?{...task,status:'Doing'}:t )
         }));

        }else if(task.status ==='Doing'){
            dispatch(changeStatusCard({
            ...activeProject,
            task: activeProject.task.map(t => (t.id === task.id)?{...task,status:'ToDo'}:t )
        }));
        }
      
   }

   const handleMoveRight = ()=>{

        if(task.status==='ToDo'){
            dispatch(changeStatusCard({
                ...activeProject,
                task: activeProject.task.map(t => (t.id === task.id)?{...task,status:'Doing'}:t )
         }));

        }else if(task.status ==='Doing'){
            dispatch(changeStatusCard({
            ...activeProject,
            task: activeProject.task.map(t => (t.id === task.id)?{...task,status:'Done'}:t )
        }));
        }
}

    return (
        <div className="card task-card-width task-card-height animate__animated animate__headShake" >
            <div className="task-card-div">
           { !(task.status ==='ToDo') && (<button className="btn task-card-btn-width task-card-btn-move " onClick={handleMoveLeft}>
               <span className="fas fa-chevron-left task-card-icon-color" >

               </span>
           </button>)}
           {
            !(task.status === 'Done') && (<button className="btn task-card-btn-width task-card-btn-move" onClick={handleMoveRight}>
                <span className="fas fa-chevron-right task-card-icon-color" >

                </span>
                </button>)}
            </div>
        <div className="card-body">
        
           <p className="card-text">{task.taskTitle}</p>
          
        </div>

        <div>
            <button className="btn task-card-btn-width"><span className="fas fa-edit task-card-icon-color"></span></button>
            <button className="btn task-card-btn-width"><span className="fas fa-trash-alt task-card-icon-color"></span></button>
        </div>
            
       </div>
    )
}
