export const progress = (project)=>{
    let i = 0;
    let progressNow = 0
            

            if(project.task.length !== 0){
                project.task.map(t=>{if(t.status === 'Done'){
                    i++;
                }
               });
               
                 progressNow = Math.floor((i/project.task.length)*100) +'%';
            } 
            

            return progressNow;
}