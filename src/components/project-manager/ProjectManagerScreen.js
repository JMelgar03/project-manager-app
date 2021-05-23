import React from 'react'
import { TaskCard } from './TaskCard';

const project = {
    id:'axaxax',
    projectName: 'Sistema De Matriculas',
    description: 'Sistema para facilitar la matricula de estudiantes.',
    startDate: new Date().getTime(),
    endDate: new Date().getTime(),
    task:[{
        id: 'zzzzzzz',
        taskTitle:'Terminar Proyecto',
        status:'ToDo'
    }]
    ,
    progress:'50%',
    imgBackground:'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg'
}

export const ProjectManagerScreen = () => {
   
    
    return (
        <div className="background-project-manager" style={{
            backgroundImage: `url(https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg)`,
            backgroundPosition: 'cover',}}>

                <div className="progress progressbar-project">
                    <div className="progress-bar progresbar-project-color" role="progressbar" style={{width: '25%'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">25%</div>
                </div>

            <div className="row">
               <div className="col-4 "> 
                <div className="card m-2 transparent" >
                    <div className="card-body">
                        <h5 className="card-title title-white">To do</h5>
                        <h6 className="card-subtitle mb-2 text-muted title-white">list of task</h6>
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

            <div className="col-4 "> 
                <div className="card m-2" >
                    <div className="card-body">
                        <h5 className="card-title">Doing</h5>
                        <h6 className="card-subtitle mb-2 text-muted">list of task</h6>


                    
                    </div>
                </div>
            </div>

            <div className="col-4 "> 
                <div className="card m-2" >
                    <div className="card-body">
                        <h5 className="card-title">Done</h5>
                        <h6 className="card-subtitle mb-2 text-muted">list of task</h6>


                    
                    </div>
                </div>
            </div>
            </div>
           
            
            
        </div>
    )
}
