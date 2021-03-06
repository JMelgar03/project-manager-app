import React from 'react';
import { useDispatch } from 'react-redux';
import { setActiveProject } from '../../actions/project';
import { progress } from '../../helpers/progress';

export const Projects = (project) => {
    const dispatch = useDispatch();

    const progressNow = progress(project);

    const handleActiveProject = ()=>{

        dispatch(setActiveProject(
            {...project,
                progress:progressNow
        }));
        
    } 
    

    return (
        <>          

            <div className="card  m-2 col-sm-12 col-md-3 cards-border card-project-cursor animate__animated animate__zoomIn" 
            style={{
                    backgroundImage: `url(${project.imgBackground})`,
                    backgroundPosition: 'center',}} 
                onClick={handleActiveProject}
            >
                
                    <div className="card-body card-body-margin ">
                            <h5 className="card-title card-text-white project-title-width">{project.projectName}</h5>
                            <p className="card-text card-project-description card-text-white" >{project.description}</p>

                            <div className="progress progress-bar-background">
                            <div className="progress-bar  progress-bar-color"  role="progressbar"  aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"
                            style={{
                                width: progressNow
                            }}
                            > 
                            </div>
                            </div>
                            
                    </div>
            </div>
                    
            

        </>
    )
}
