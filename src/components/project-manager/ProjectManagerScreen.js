import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router';
import { setDesactivateProject } from '../../actions/project';
import { TaskCard } from './TaskCard';

const project = {
    id:'axaxax',
    projectName: 'Sistema De Matriculas',
    description: 'Sistema para facilitar la matricula de estudiantes.',
    startDate: new Date().getTime(),
    endDate: new Date().getTime(),
    task:[{
                id: 'zzzzzzz1',
                taskTitle:'Terminar Proyecto',
                status:'ToDo'
        },
        {
            id: 'zzzzzzz2',
            taskTitle:'Terminar Proyecto',
            status:'Doing'
        },
        
        {
        id: 'zzzzzzz3',
        taskTitle:'Terminar Proyecto',
        status:'Doing'
        },

        {
            id: 'zzzzzzz4',
            taskTitle:'Terminar Proyecto',
            status:'Done'
            },

            {
                id: 'zzzzzzz4',
                taskTitle:'Terminar Proyecto',
                status:'Done'
                }

    ]
    ,
    progress:'50%',
    imgBackground:'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg'
}

export const ProjectManagerScreen = () => {

    const dispatch = useDispatch();
    const {activeProject} = useSelector(state => state.project)

    
    useEffect(() => {
       
        return () => {
            dispatch(setDesactivateProject())
        }
    }, [dispatch])
   
    
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

                <div className="progress progressbar-project">
                    <div className="progress-bar progresbar-project-color" role="progressbar" style={{width: '25%'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">25%</div>
                </div>

            <div className="row">
               <div className="col-xs-12 col-md-4 animate__animated animate__zoomIn"> 
                <div className="card m-2 transparent" >
                    <div className="card-body">
                        <h5 className="card-title title-white">To do</h5>
                        <h6 className="card-subtitle mb-2 title-white">things to do</h6>
                    {
                        project.task.map(task2=>{
                            if(task2.status === 'ToDo')
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
                        <h5 className="card-title title-white">Doing</h5>
                        <h6 className="card-subtitle mb-2  title-white">things to do</h6>
                    {
                        project.task.map(task2=>{
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
                        project.task.map(task2=>{
                            if(task2.status === 'Done')
                            return <TaskCard key={task2.id} {...task2} />
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
