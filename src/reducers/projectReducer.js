import { types } from "../types/types";


const initialState ={
     projects:[
            {
            id:'axaxax',
            projectName: 'Sistema De Matriculas',
            description: 'Sistema para facilitar la matricula de estudiantes.',
            startDate: new Date().getTime(),
            endDate: new Date().getTime(),
            task:[{
                id: 'zzzzzzz1',
                taskTitle:'Terminar Proyecto',
                status:'ToDo'
                },
                {
                id: 'zzzzzzz2',
                taskTitle:'Terminar Proyecto',
                status:'Doing'
                },
    
                {
                id: 'zzzzzzz3',
                taskTitle:'Terminar Proyecto',
                status:'Doing'
                }

        ] ,
        progress:'50%',
        imgBackground:'../img/fondo1.jpg'
        },

        {
        id:'axaxax2',
        projectName: 'Sistema De Matriculas 2',
        description: 'Sistema para facilitar la matricula de estudiantes.2 aaaa dhbhidhbahd hiabihbdjhana habisijndajsdnai',
        startDate: new Date().getTime(),
        endDate: new Date().getTime(),
        task:[{
            id: 'zzzzzzz7',
            taskTitle:'Terminar Proyecto',
            status:'ToDo'
            },
            {
            id: 'zzzzzzz8',
            taskTitle:'Terminar Proyecto',
            status:'Done'
            },

            {
            id: 'zzzzzzz9',
            taskTitle:'Terminar Proyecto',
            status:'Done'
            }],
        progress:'90%',
        imgBackground:'../img/fondo2.jpeg'
        },

        {
        id:'axaxax23',
        projectName: 'Sistema De Matriculas 3',
        description: 'hola mundo',
        startDate: new Date().getTime(),
        endDate: new Date().getTime(),
        task:[],
        progress:'25%',
        imgBackground:'../img/fondo3.jpg'
        
        },

        {
        id:'axaxax224',
        projectName: 'Sistema De Matriculas 4',
        description: 'hola mundo',
        startDate: new Date().getTime(),
        endDate: new Date().getTime(),
        task:[],
        progress:'60%',
        imgBackground:'../img/fondo4.jpg'
        },

        {
        id:'axaxax234',
        projectName: 'Sistema De Matriculas 5',
        description: 'hola mundo',
        startDate: new Date().getTime(),
        endDate: new Date().getTime(),
        task:[],
        progress:'80%',
        imgBackground:'../img/fondo5.jpg'
        
        },
        {
            id:'axaxax235',
            projectName: 'Sistema De Matriculas 6',
            description: 'hola mundo',
            startDate: new Date().getTime(),
            endDate: new Date().getTime(),
            task:[],
            progress:'80%',
            imgBackground:'../img/fondo6.jpg'
            
            }

        ],
    activeProject: null
}

export const projectReducer = (state= initialState, action) => {
        switch (action.type) {
           case types.projectSetActive:
               return{
                   ...state,
                   activeProject: action.payload
               }
            
            case types.projectSetDesactivate:
                return{
                    ...state,
                    activeProject: null
                }
            case types.projectCreate:
                return{
                    ...state,
                    projects:[
                        action.payload,
                        ...state.projects
                    ]
                }

                case types.projectUpdate:
                    return{
                        ...state,
                        projects: state.projects.map(p=>(p.id === action.payload.id) ?action.payload :p),
                        activeProject: action.payload 
                    }


                case types.projectDelete:
                    return{
                        ...state,
                        projects: state.projects.filter(p=>(p.id !== action.payload)),
                        activeProject: null
                    }
            
                case types.projectCreateTask:
                    return{
                        ...state,
                        projects:
                            state.projects.map(p=> (p.id === action.payload.idProject)
                            ?({
                                ...p,
                                task:[ ...p.task, action.payload.task],
                                progress: action.payload.progress
                            })
                            :(p)
                            )
                        ,
                        activeProject:{
                            ...state.activeProject,
                            task:[ ...state.activeProject.task, action.payload.task],
                            progress: action.payload.progress
                        }
                    }

            case types.projectChangeCard:
                return{
                    ...state,
                    projects: state.projects.map(p => (p.id === action.payload.project.id) 
                        ?{...p,
                        task:action.payload.project.task,
                        progress: action.payload.progress
                } 
                        : p),

                    activeProject:{ ...action.payload.project,
                        progress: action.payload.progress
                    }
                }


                case types.projectEditTask:
                   
                    return{
                        ...state,
                        projects: state.projects.map(p => (p.id === action.payload.idProject) 
                            ?{...p,
                                task: p.task.map(t=>(t.id === action.payload.task.id)
                                ?(
                                   action.payload.task
                                )
                                :(
                                    t
                                )
                            )}

                            : p),
    
                        activeProject: {
                            ...state.activeProject,
                            task: state.activeProject.task.map(t=>(t.id === action.payload.task.id)
                                                                    ?(action.payload.task)
                                                                    : t
                            )
                        }
                    }
    

            case types.projectDeleteTask:
                return {
                    ...state,
                    
                    projects:state.projects.map(p => ({
                        ...p,
                        task: p.task.filter(t=>(t.id !== action.payload.idTask)),
                        progress: action.payload.progress
                    }))
                    
                    ,
                    
                    activeProject:{ ...state.activeProject,
                        task: state.activeProject.task.filter(ta=>(ta.id !== action.payload.idTask)),
                        progress: action.payload.progress
                    }
                }
        
            default:
                return state;
        }
    
}
