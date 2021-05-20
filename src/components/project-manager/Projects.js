import React from 'react'

export const Projects = ({projectName, description, progress}) => {
    

    return (
        <>          
            
            <div className="card  m-2 col-sm-12 col-md-3" >
                <div style={{
                     display: 'flex',
                    alignItems:'center',
                    justifyContent: 'center'        
            }}>
                <img src="https://img2.freepng.es/20181212/lxj/kisspng-master-class-tuition-payments-course-photography-5c10dbf345e872.6443716315446087552864.jpg" className="card-img-top card-project-image" alt="..." />
                
                </div>
                
                    <div className="card-body">
                            <h5 className="card-title">{projectName}</h5>

                            <div className="progress">
                            <div className="progress-bar bg-info"  role="progressbar"  aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"
                            style={{
                                width: progress
                            }}
                            > 
                            </div>
                            </div>

                            <p className="card-text card-project-description">{description}</p>
                            <a href="#" className="btn btn-info">Go somewhere</a>
                    </div>
            </div>
                    
            

        </>
    )
}
