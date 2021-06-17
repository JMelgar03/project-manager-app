import Swal from "sweetalert2";
import { fetchWithoutUid } from "../helpers/fetch";
import { types } from "../types/types";
import { finishUiLoading, startUiLoading } from "./uiLoading";

export const setActiveProject = (project)=>({
        type: types.projectSetActive,
        payload: project
    
});

export const setDesactivateProject= () =>({
        type: types.projectSetDesactivate
});



export const startProjectAddnew=(project)=>{
        return async(dispatch)=>{
         try {
                dispatch(startUiLoading());
                const resp = await fetchWithoutUid('project/new',project,'POST');
                const body = await resp.json();
                if(body.ok){
                  project.id = body.project.id
                  dispatch(projectAddNew(project));
                  dispatch(finishUiLoading());
                }else{
                        dispatch(finishUiLoading());
                        Swal.fire('Error','Contact to administrator: melgarjonathan03@gmail.com','error');
                }

         } catch (error) {
                dispatch(finishUiLoading());
                Swal.fire('Error', error, 'error');
         }

        }
}

const projectAddNew = (project)=>({
        type: types.projectCreate,
        payload: project
});



export const startLoadProjects = (idUser)=>{
      return async(dispatch)=>{
        try {
          dispatch(startUiLoading());
          const resp = await fetchWithoutUid(`project/${idUser}`,idUser,'GET');
          const body = await resp.json();
          if(body.ok){
                dispatch(finishUiLoading());
                dispatch(loadProjects(body.projects));
          }else{
                dispatch(finishUiLoading());
                Swal.fire('Error','Contact to administrator: melgarjonathan03@gmail.com','error');
          }

        } catch (error) {
                dispatch(finishUiLoading());
                Swal.fire('Error', error, 'error');
        }

      
      }
};

export const loadProjects = (projects)=>({
        type: types.projectLoaded,
        payload: projects
});

export const startProjectEdit = (project)=>{
        return async(dispatch)=>{
                try {
                        dispatch(startUiLoading());
                        const resp = await fetchWithoutUid(`project/${project.id}`,project,'PUT');
                        const body = await resp.json();
                        if(body.ok){
                                dispatch(finishUiLoading());
                                dispatch(projectEdited(project));
                                Swal.fire('Complete','Project Edited','success');
                        }else{
                                dispatch(finishUiLoading());
                                Swal.fire('Error','Contact to administrator: melgarjonathan03@gmail.com','error');
                        }
                } catch (error) {
                        dispatch(finishUiLoading());
                        Swal.fire('Error', error, 'error');
                }
                
        }
}



 const projectEdited = (project)=>({
        type: types.projectUpdate,
        payload: project
});

export const startProjectDelete = (idProject, idUser)=>{
        return async(dispatch)=>{
                try {
                dispatch(startUiLoading());
                const res = await fetchWithoutUid(`project/${idProject}`,idUser,'DELETE');
                const body = await res.json();
                if(body.ok){
                        dispatch(finishUiLoading());
                        dispatch(projectDeleted(idProject));
                }else{
                        dispatch(finishUiLoading());
                        Swal.fire('Error','Contact to administrator: melgarjonathan03@gmail.com','error');
                }

        }
         catch (error) {
                dispatch(finishUiLoading());
                Swal.fire('Error',error,'error');
                }
        
        }
}

const projectDeleted = (idProject)=>({
        type: types.projectDelete,
        payload: idProject
});

export const startCardTaskCreate= (idProject, task, progress)=>{
        return async(dispatch)=>{
                try {
                   dispatch(startUiLoading());
                   const resp = await fetchWithoutUid(`task/new/${idProject}`,task,'POST');
                   const body = await resp.json();
                   
                   if(body.ok){
                        dispatch(finishUiLoading());
                        dispatch(cardTaskCreated(idProject,body.taskSaved,progress));
                   }else{
                        dispatch(finishUiLoading());
                        Swal.fire('Error','Contact to administrator: melgarjonathan03@gmail.com','error');
                   }
                

                } catch (error) {
                        dispatch(finishUiLoading());
                        Swal.fire('Error',error,'error');
                }
        }

}


 const cardTaskCreated = (idProject, task, progress)=>({
        type: types.projectCreateTask,
        payload: {idProject: idProject,
                task: task,
                progress: progress
        }
});

export const startCardTaskEdit = (idProject,task)=>{
        return async(dispatch)=>{
                try {
                        dispatch(startUiLoading());
                        const resp = await fetchWithoutUid(`task/${task._id}`,task,'PUT');
                        const body = await resp.json();
                        if(body.ok){
                           dispatch(finishUiLoading());
                           dispatch(cardTaskEdited(idProject, task))
                        }else{
                                dispatch(finishUiLoading());
                                Swal.fire('Error','Contact to administrator: melgarjonathan03@gmail.com','error');
                        }
                        
                } catch (error) {
                        dispatch(finishUiLoading());
                        Swal.fire('Error',error,'error');
                }
              
        }
} 

 const cardTaskEdited = (idProject,task)=>({
        type: types.projectEditTask,
        payload: {
         idProject: idProject,
         task: task
        }
});


export const startCardTaskDelete = (idTask, progress, task)=>{
        return async(dispatch)=>{
                try {
                        dispatch(startUiLoading());
                        const resp = await fetchWithoutUid(`task/${idTask}`,task,'DELETE');
                        const body = await resp.json();
                        if(body.ok){
                           dispatch(finishUiLoading());
                           dispatch(cardTaskDeleted(idTask, progress));
                        }else{
                                dispatch(finishUiLoading());
                                Swal.fire('Error','Contact to administrator: melgarjonathan03@gmail.com','error');
                        }
                        
                } catch (error) {
                        dispatch(finishUiLoading());
                        Swal.fire('Error',error,'error');
                }
        }
}

 const cardTaskDeleted = (idTask, progress)=>({
        type: types.projectDeleteTask,
        payload: {
                idTask: idTask,
                progress: progress
        }
});

export const startChangeStatusCard = (project,progress, task)=>{
        return async(dispatch)=>{
                try {
                        dispatch(startUiLoading());
                        const resp = await fetchWithoutUid(`task/${task._id}`,task,'PUT');
                        const body = await resp.json();
                        if(body.ok){
                           dispatch(finishUiLoading());
                           dispatch(changeStatusCard(project,progress));
                        }else{
                                dispatch(finishUiLoading());
                                Swal.fire('Error','Contact to administrator: melgarjonathan03@gmail.com','error');
                        }
                        
                } catch (error) {
                        dispatch(finishUiLoading());
                        Swal.fire('Error',error,'error');
                }

        }
}

const changeStatusCard = (project,progress)=>({
        type: types.projectChangeCard,
        payload:{
                project:project,
                progress:progress
        }
})

export const projectLogOut=()=>({
        type: types.projectLogOut
})