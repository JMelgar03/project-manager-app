import { types } from "../types/types";

export const setActiveProject = (project)=>({
        type: types.projectSetActive,
        payload: project
    
});

export const setDesactivateProject= () =>({
        type: types.projectSetDesactivate
});

export const projectAddNew = (project)=>({
        type: types.projectCreate,
        payload: project
});


export const projectEdited = (project)=>({
        type: types.projectUpdate,
        payload: project
})

export const projectDeleted = (idProject)=>({
        type: types.projectDelete,
        payload: idProject
});


export const cardTaskCreated = (idProject, task, progress)=>({
        type: types.projectCreateTask,
        payload: {idProject: idProject,
                task: task,
                progress: progress
        }
});

export const cardTaskEdited = (idProject,task)=>({
        type: types.projectEditTask,
        payload: {
         idProject: idProject,
         task: task
        }
});

export const cardTaskDeleted = (idTask, progress)=>({
        type: types.projectDeleteTask,
        payload: {
                idTask: idTask,
                progress: progress
        }
})

export const changeStatusCard = (project,progress)=>({
        type: types.projectChangeCard,
        payload:{
                project:project,
                progress:progress
        }
})