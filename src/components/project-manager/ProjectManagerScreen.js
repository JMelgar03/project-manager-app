import React from 'react'

export const ProjectManagerScreen = () => {
   
    
    return (
        <div >
            <div className="row">
               <div className="col-4 "> 
                <div className="card m-2" >
                    <div className="card-body">
                        <h5 className="card-title">To do</h5>
                        <h6 className="card-subtitle mb-2 text-muted">list of task</h6>
                        
                        <div class="card" >
                         <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" class="card-link">Card link</a>
                            <a href="#" class="card-link">Another link</a>
                         </div>
                        </div>

                    
                    </div>
                </div>
            </div>

            <div className="col-4 "> 
                <div className="card m-2" >
                    <div className="card-body">
                        <h5 className="card-title">Doing</h5>
                        <h6 className="card-subtitle mb-2 text-muted">list of task</h6>
                    
                    </div>
                </div>
            </div>

            <div className="col-4 "> 
                <div className="card m-2" >
                    <div className="card-body">
                        <h5 className="card-title">Done</h5>
                        <h6 className="card-subtitle mb-2 text-muted">list of task</h6>
                    
                    </div>
                </div>
            </div>
            </div>
           
            
            
        </div>
    )
}
