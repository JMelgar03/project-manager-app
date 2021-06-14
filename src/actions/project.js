import Swal from "sweetalert2";
import { fetchWithoutUid } from "../helpers/fetch";
import { types } from "../types/types";

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
                const resp = await fetchWithoutUid('project/new',project,'POST');
                const body = await resp.json();
                if(body.ok){
                  project.id = body.project.id
                  dispatch(projectAddNew(project));
                }

         } catch (error) {
                 console.log(error);
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
          const resp = await fetchWithoutUid(`project/${idUser}`,idUser,'GET');
          const body = await resp.json();
          if(body.ok){
                dispatch(loadProjects(body.projects));
          }

        } catch (error) {
                console.log(error)
        }

      
      }
};

const loadProjects = (projects)=>({
        type: types.projectLoaded,
        payload: projects
});

export const startProjectEdit = (project)=>{
        return async(dispatch)=>{
                try {
                     
                        const resp = await fetchWithoutUid(`project/${project.id}`,project,'PUT');
                        const body = await resp.json();
                        if(body.ok){
                                dispatch(projectEdited(project));
                                Swal.fire('Complete','Project Edited','success');
                        }else{
                                Swal.fire('Error',body.msg,'error');
                        }
                } catch (error) {
                        console.log(error);
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
                const res = await fetchWithoutUid(`project/${idProject}`,idUser,'DELETE');
                const body = await res.json();
                if(body.ok){
                        dispatch(projectDeleted(idProject));
                }else{
                        Swal.fire('Error',body.msg,'error');
                }

        }
         catch (error) {
                        console.log(error)
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
                   const resp = await fetchWithoutUid(`task/new/${idProject}`,task,'POST');
                   const body = await resp.json();
                   
                   if(body.ok){
                       
                        dispatch(cardTaskCreated(idProject,body.taskSaved,progress));
                   }
                

                } catch (error) {
                        console.log(error);
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
                        const resp = await fetchWithoutUid(`task/${task._id}`,task,'PUT');
                        const body = await resp.json();
                        if(body.ok){
                           dispatch(cardTaskEdited(idProject, task))
                        }
                        
                } catch (error) {
                        console.log(error)
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
                        
                        const resp = await fetchWithoutUid(`task/${idTask}`,task,'DELETE');
                        const body = await resp.json();
                        if(body.ok){
                           dispatch(cardTaskDeleted(idTask, progress));
                        }
                        
                } catch (error) {
                        console.log(error)
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
                        
                        const resp = await fetchWithoutUid(`task/${task._id}`,task,'PUT');
                        const body = await resp.json();
                        if(body.ok){
                           dispatch(changeStatusCard(project,progress));
                        }
                        
                } catch (error) {
                        console.log(error)
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