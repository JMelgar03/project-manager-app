import React from 'react'

export const Projects = ({projectName, description, progress, imgBackground}) => {
    

    return (
        <>          

            <div className="card  m-2 col-sm-12 col-md-3 cards-border card-project-cursor" style={{
                    backgroundImage: `url(${imgBackground})`,
                    backgroundPosition: 'center',}} 
            >
                
                    <div className="card-body card-body-margin ">
                            <h5 className="card-title card-text-white">{projectName}</h5>
                            <p className="card-text card-project-description card-text-white">{description}</p>

                            <div className="progress progress-bar-background">
                            <div className="progress-bar  progress-bar-color"  role="progressbar"  aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"
                            style={{
                                width: progress
                            }}
                            > 
                            </div>
                            </div>
                            
                    </div>
            </div>
                    
            

        </>
    )
}
