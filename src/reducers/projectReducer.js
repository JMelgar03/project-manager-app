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
            case types.projectAddNew:
                return{
                    ...state,
                    projects:[
                        action.payload,
                        ...state.projects
                    ]
                }

            case types.projectChangeCard:
                return{
                    ...state,
                    projects: state.projects.map(p => (p.id === action.payload.id) ?action.payload : p),
                    activeProject: action.payload
                }
        
            default:
                return state;
        }
    
}
