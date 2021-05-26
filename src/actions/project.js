import { types } from "../types/types";

export const setActiveProject = (project)=>({
        type: types.projectSetActive,
        payload: project
    
});

export const setDesactivateProject= () =>({
        type: types.projectSetDesactivate
});

export const projectAddNew = (project)=>({
        type: types.projectAddNew,
        payload: project
});

export const changeStatusCard = (project)=>({
        type: types.projectChangeCard,
        payload:project
})