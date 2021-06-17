import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router';
import Swal from 'sweetalert2';
import { sendVerificationEmail } from '../../actions/auth';
import { setDesactivateProject, startLoadProjects } from '../../actions/project';

import { Modal } from '../ui/Modal';
import { Projects } from './Projects';





export const ProjectsScreen = () => {

    const {userEmailVerified, uid} = useSelector(state => state.auth);
    const {projects, activeProject} = useSelector(state => state.project);
    const {loading} = useSelector(state => state.ui);

    

    const dispatch = useDispatch();
    const handleResendEmailVerification =()=>{
        dispatch(sendVerificationEmail());
        Swal.fire('Success','success')
   }

   useEffect(() => {
        dispatch(startLoadProjects(uid));
        dispatch(setDesactivateProject());
        localStorage.setItem('activeProject',JSON.stringify(null));
        localStorage.setItem('busqueda',JSON.stringify(true));

    }, [dispatch,uid])

     
    

   

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

            { (loading) && (<div className="spinner-border text-info profile-spiner" role="status">
                    <span className="visually-hidden"></span>
                </div>)
                
            }
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
                    projects?.map(project =>(
                        <Projects key={project.id} {...project} />
                    ))
                        

                }

            
                
            </div>

            {
                (projects?.length === 0 && loading === false)?(<div style={{width:'100%', display:'flex', justifyContent:'flex-end'}}><div className="project-screen-alert alert alert-info alert-dismissible fade show" role="alert">
                                                <strong> Hi!</strong> We have noticed that you do not have a project created yet, 
                                                click on the button to create a new project and start! <span><button type="button" className="project-screen-btn-alert btn-close fas fa-window-close" data-bs-dismiss="alert" aria-label="Close"></button></span>
                
                                                </div>
                                            </div>)
                    :('')
            }

        </div>  
    )
}
