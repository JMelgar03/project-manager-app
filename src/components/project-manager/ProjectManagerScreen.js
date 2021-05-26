import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router';
import { setDesactivateProject } from '../../actions/project';
import { TaskCard } from './TaskCard';


export const ProjectManagerScreen = () => {

    const dispatch = useDispatch();
    const {activeProject} = useSelector(state => state.project);
    const [progressBar, setProgressBar] = useState(50);

     let progressNow=0;
    let i = 0;
    
    useEffect(() => {
        setProgressBar(progressNow);
        return () => {
           //dispatch(setDesactivateProject())
        }
    }, [dispatch,progressNow])
   
       

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
            <div className="title-project">
                <h2>{activeProject?.projectName}</h2>
            </div>

                <div className="progress progressbar-project">
                    <div className="progress-bar progresbar-project-color" role="progressbar" style={{width: progressBar+'%'}} aria-valuenow={`${progressBar}`} aria-valuemin="0" aria-valuemax="100">{progressBar} %</div>
                </div>

            <div className="row">
               
               <div className="col-xs-12 col-md-4 animate__animated animate__zoomIn"> 
                <div className="card m-2 transparent" >
                    <div className="card-body">
                        <h5 className="card-title title-white">To do</h5>
                        <h6 className="card-subtitle mb-2 title-white">things to do</h6>
                    {
                        activeProject?.task.map(task2=>{
                            if(task2.status === 'ToDo')
                            return <TaskCard key={task2.id} {...task2} />
                        }
                        )

                    }
                        
                        <button className="btn fas fa-plus-square title-white"></button>
                    </div>
                   
                </div>
            </div>

            <div className="col-xs-12 col-md-4 animate__animated animate__zoomIn"> 
                <div className="card m-2 transparent" >
                    <div className="card-body">
                        <h5 className="card-title title-white">Doing</h5>
                        <h6 className="card-subtitle mb-2  title-white">things to do</h6>
                    {
                        activeProject?.task.map(task2=>{
                            if(task2.status === 'Doing')
                            return <TaskCard key={task2.id} {...task2} />
                        }
                        )

                    }
                        
                      
                    </div>
                </div>
            </div>

            <div className="col-xs-12 col-md-4 animate__animated animate__zoomIn"> 
                <div className="card m-2 transparent" >
                    <div className="card-body">
                        <h5 className="card-title title-white">Done</h5>
                        <h6 className="card-subtitle mb-2  title-white">things to do</h6>
                    {   
                        activeProject?.task.map(task2=>{
                            if(task2.status === 'Done'){
                                i++;
                                progressNow = Math.floor( (i/activeProject?.task.length)*100 );
                                
                                console.log(progressNow);
                                return <TaskCard key={task2.id} {...task2} />
                            
                        }
                        }
                        )
                    }
                        

                    </div>
                </div>
            </div>


        </div>
           
            
            
        </div>
    )
}
