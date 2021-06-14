import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router';
import { startCardTaskCreate, startProjectDelete} from '../../actions/project';
import { progress } from '../../helpers/progress';
import { useForm } from '../../hooks/useForm';
import { Modal } from '../ui/Modal';
import { TaskCard } from './TaskCard';


export const ProjectManagerScreen = () => {

    const dispatch = useDispatch();
    const {activeProject} = useSelector(state => state.project);
    const {uid} = useSelector(state => state.auth);
   
    const [valid, setValid] = useState(true);
   

    const [formValues, handleInputChange, reset] = useForm({taskTitle:''});
    const {taskTitle} = formValues;

    
    
    useEffect(() => {
        
        return () => {
           //dispatch(setDesactivateProject())
        }
    }, [dispatch]);

    const handleDeleteProject = ()=>{
        dispatch( startProjectDelete(activeProject.id, {user: uid}) )
    }

   
    const handleAddNewTask = ()=>{
       
        if(isTaskValid()){
           const task = {
                taskTitle: taskTitle,
                status: 'ToDo'
            }

            const newProject = {
                ...activeProject,
                task:[ ...activeProject.task,
                        task
                ]
            }

            const progressNow = progress(newProject);
            

           dispatch(startCardTaskCreate(activeProject.id, task, progressNow));
           reset();
          
        }
    } 

    const isTaskValid = ()=>{
        if(taskTitle?.trim().length < 1){
            setValid(false);
            return false;
        }
        setValid(true);
        return true;
    }
       

    return (
        <div className="background-project-manager" style={{
            backgroundImage: `url('${activeProject?.imgBackground}')`,
            backgroundPosition: 'center',
            height: '100vh',
            width: '100vw'
            }}>

                {
                    !activeProject && <Redirect to="/home/projects"></Redirect>
                }

                <Modal />

            <div className="title-project">
                <h2>{activeProject?.projectName}</h2>
                <div className="project-manager-div-button">
                    <div className="dropdown">
                        <button className=" btn width-button-project " type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                        <span className="fas fa-cog project-manager-icon-button"></span>
                        </button>
                        <ul className="dropdown-menu  drop-down-background" aria-labelledby="dropdownMenuButton1">
                            <li><button className="btn " data-bs-toggle="modal" data-bs-target="#exampleModal"><span className="fas fa-edit project-manager-icon-button"> Edit Project</span></button></li>
                            <li> <button className="btn " onClick={handleDeleteProject} ><span className="fas fa-trash-alt project-manager-icon-button"> Delete</span></button></li>
                        </ul>
                    </div>
                
                
                </div>
               
            </div>

                <div className="progress progressbar-project">
                    <div className="progress-bar progresbar-project-color" role="progressbar" style={{width: `${activeProject?.progress}`}} aria-valuenow="0" aria-valuemin="0" aria-valuemax="100">{activeProject?.progress}</div>
                </div>
            <div className="container">
            <div className="row project-manager-max-2"  >
               
               <div className="col-xs-4 col-md-4 animate__animated animate__zoomIn project-manager-max"> 
                <div className="card m-2 transparent project-manager-container-task" >
                    <div className="card-body">
                        <h5 className="card-title title-white">To do</h5>
                        <h6 className="card-subtitle mb-2 title-white">things to do</h6>

                            <div className="card task-card-width task-card-height animate__animated animate__headShake new-task-card-background" >
                                 <div className="card-body ">
                                    <textarea 
                                        className={`card-text task-text-area  ${!(valid)? ' animate__animated animate__headShake' : ''}`}
                                        name="taskTitle"
                                        placeholder="add a new task..."
                                        value={taskTitle}
                                        onChange={handleInputChange}
                                    />
                                     <div>
                                        <button className="btn fas fa-plus-square title-white" onClick={handleAddNewTask}></button>
                                    </div>
                                </div>
                            </div>

                    {
                        activeProject?.task.map(task2=>{
                            if(task2.status === 'ToDo')
                            return <TaskCard key={task2._id} {...task2} />
                        }
                        )

                    }
                        
                       
                    </div>
                   
                </div>
            </div>

            <div className="col-xs-4 col-md-4 animate__animated animate__zoomIn project-manager-max"> 
                <div className="card m-2 transparent project-manager-container-task" >
                    <div className="card-body ">
                        <h5 className="card-title title-white">Doing</h5>
                        
                    {
                        activeProject?.task.map(task2=>{
                            if(task2.status === 'Doing')
                            return <TaskCard key={task2._id} {...task2} />
                        }
                        )

                    }
                        
                      
                    </div>
                </div>
            </div>

            <div className="col-xs-4 col-md-4 animate__animated animate__zoomIn project-manager-max"> 
                <div className="card m-2 transparent project-manager-container-task" >
                    <div className="card-body">
                        <h5 className="card-title title-white">Done</h5>
                        <h6 className="card-subtitle mb-2  title-white">things to do</h6>
                    {   
                        activeProject?.task.map(task2=>{
                            if(task2.status === 'Done'){ 
                                
                                return <TaskCard key={task2._id} {...task2} />
                            
                        }
                        }
                        )
                    }
                        

                    </div>
                </div>
            </div>


        </div>
        </div>
            
            
        </div>
    )
}
