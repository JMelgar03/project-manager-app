import React from 'react';
import { Modal } from '../ui/Modal';
import { Projects } from './Projects';

const projects = [
    {
        id:'axaxax',
        projectName: 'Sistema De Matriculas',
        description: 'Sistema para facilitar la matricula de estudiantes.',
        startDate: new Date().getTime(),
        endDate: new Date().getTime(),
        toDo:[{}],
        doing:[{}],
        done:[{}],
        progress:'50%'
    },

    {
        id:'axaxax2',
        projectName: 'Sistema De Matriculas 2',
        description: 'Sistema para facilitar la matricula de estudiantes.2 aaaa dhbhidhbahd hiabihbdjhana habisijndajsdnai',
        startDate: new Date().getTime(),
        endDate: new Date().getTime(),
        toDo:[{}],
        doing:[{}],
        done:[{}],
        progress:'100%'
    }

];

export const ProjectsScreen = () => {
    return (
        <div className="projects-backgorund">
            
            <Modal />

            <div className="row">


            <div className="card  m-2 col-sm-12 col-md-3 card-new-entry"  >
                    <div className="card-body">
                       
                            <h5 className="card-title">Crear Un Proyecto</h5>

                            <p className="card-text">.............</p>
                            <button className="btn btn-info" type="button" data-bs-toggle="modal" data-bs-target="#exampleModal" >
                            
                                <i class="fas fa-folder-plus">Create New Project</i>
                                 
                            </button>
                    </div>
            </div>


                {
                    projects.map(project =>(
                        <Projects key={project.id} {...project} />
                    ))
                        

                }
                
            </div>
        </div>
        
        
    )
}
