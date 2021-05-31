import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router';
import { setDesactivateProject } from '../../actions/project';

import { Modal } from '../ui/Modal';
import { Projects } from './Projects';





export const ProjectsScreen = () => {

    const {userEmailVerified} = useSelector(state => state.auth);
    const {projects, activeProject} = useSelector(state => state.project);
    const dispatch = useDispatch();
   const handleResendEmailVerification =()=>{ //Pendiente de realizar...
       console.log('Resend');
   }

   useEffect(() => {
        dispatch(setDesactivateProject());
       
    }, [dispatch])

     


    return (
        <div className="projects-background">
            
            <Modal />

            {
                !userEmailVerified
                &&
                <div className="alert alert-warning" role="alert">
                Please reply to the verification email.
                you did not receive it? <span className="resend-email" onClick={handleResendEmailVerification}>Resend</span>
                </div>
            }


            {
                activeProject && <Redirect to="/home/manage"></Redirect>
            }
            

            <div className="row cards-screen-center ">


            <div className="card  m-2 col-sm-12 col-md-3 card-new-entry cards-border animate__animated animate__zoomIn"  >
                    <div className="card-body card-new-entry-center">
                       
                           

                            
                            <button className="btn btn-info" type="button" data-bs-toggle="modal" data-bs-target="#exampleModal" >
                            
                                <i className="fas fa-folder-plus">
                                    <span className="projects-font"> Create New Project</span>    
                                </i>
                                 
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
