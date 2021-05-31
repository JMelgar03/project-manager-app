import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { cardTaskDeleted, cardTaskEdited, changeStatusCard } from '../../actions/project';
import { progress } from '../../helpers/progress';
import { useForm } from '../../hooks/useForm';


export const TaskCard = (task) => {
    const {activeProject} = useSelector(state => state.project);
    const dispatch = useDispatch();

    const [formValues, handleInputChange] = useForm(task);

    const [editable,setEditable] = useState(false);

    const {taskTitle} = formValues; 

   
    const handleMoveLeft = ()=>{
        if(task.status==='Done'){

            const newProject = {
                ...activeProject,
                task: activeProject.task.map(t => (t.id === task.id)?{...task,status:'Doing'}:t)
            }
  
            const progressNow = progress(newProject);

            dispatch(changeStatusCard(newProject,progressNow));

        }else if(task.status ==='Doing'){
            dispatch(changeStatusCard({
            ...activeProject,
            task: activeProject.task.map(t => (t.id === task.id)?{...task,status:'ToDo'}:t )
          },
        activeProject.progress
        
        ));
        }
      
   }


   const handleMoveRight = ()=>{

        if(task.status==='ToDo'){
            dispatch(changeStatusCard({
                ...activeProject,
                task: activeProject.task.map(t => (t.id === task.id)?{...task,status:'Doing'}:t )
         },
         activeProject.progress
         ));

        }else if(task.status ==='Doing'){
            const newProject = {
                ...activeProject,
                task: activeProject.task.map(t => (t.id === task.id)?{...task,status:'Done'}:t)
            }
                
            const progressNow = progress(newProject);
            
            dispatch(changeStatusCard(newProject,progressNow));
        }
    }


    const handleEditTask = ()=>{
        if(editable){
            setEditable(false);
        }else{
            setEditable(true);
        }
       
    }


    const handleSaveEditTask = ()=>{
        
        dispatch(cardTaskEdited(activeProject.id, formValues));
        setEditable(false);
    }


    const handleDeleteTask = ()=>{
        const newProject = {
            ...activeProject,
            task: activeProject.task.filter(t=>(t.id !== task.id ))
        }

        const progressNow = progress(newProject);
        console.log(newProject);
        dispatch(cardTaskDeleted(task.id, progressNow));
       
    }


    return (
        <div className="card task-card-width task-card-height animate__animated animate__headShake task-card-background" >
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
        <div className="task-description">
        
           {
                (editable)
                    ?(<textarea className="card-text task-text-area" name="taskTitle" onChange={handleInputChange} value={taskTitle} ></textarea>)
                    :(<p className="card-text">{task.taskTitle}</p>)
            }
          
        </div>

        

        {
                (editable)
                    ?(<div>
                         <button className="btn task-card-btn-width" onClick={handleEditTask}><span className="fas fa-window-close task-card-icon-color"></span></button>
                        <button className="btn task-card-btn-width" onClick={handleSaveEditTask}><span className="fas fa-save task-card-icon-color"></span></button>
                       
                    </div>)
                    :(<div>
                        <button className="btn task-card-btn-width" onClick={handleEditTask} data-bs-toggle="modal" data-bs-target="#modalTask"><span className="fas fa-edit task-card-icon-color"></span></button>
                        <button className="btn task-card-btn-width" onClick={handleDeleteTask}><span className="fas fa-trash-alt task-card-icon-color"></span></button>
                    </div>)
        }
            
        
            
       </div>
    )
}
