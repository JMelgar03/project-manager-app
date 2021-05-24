import { types } from "../types/types";

export const setActiveProject = (project)=>({
        type: types.projectSetActive,
        payload: project
    
});

export const setDesactivateProject= () =>({
        type: types.projectSetDesactivate
})