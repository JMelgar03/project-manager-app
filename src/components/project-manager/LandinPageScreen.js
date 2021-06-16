import React from 'react'

export const LandinPageScreen = () => {
    return (
        <div className="landingPage-bg-color">
                
                <nav id="navbar-example2" className="navbar navbar-expand-lg navbar-light bg-dark px-3">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <img className="navbar-logo " src="../Logo-white-transparent.PNG" alt="Logo" />
                 <ul className="nav nav-pills collapse navbar-collapse" id="navbarTogglerDemo01">
                    <li className="nav-item">
                        <a className="nav-link" href="#scrollspyHeading1">Introduction</a>
                    </li>
                     <li className="nav-item">
                        <a className="nav-link" href="#scrollspyHeading2">Second</a>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">Dropdown</a>
                     <ul className="dropdown-menu">
                        <li><a className="dropdown-item" href="#scrollspyHeading3">Third</a></li>
                        <li><a className="dropdown-item" href="#scrollspyHeading4">Fourth</a></li>
                        <li><hr className="dropdown-divider"/></li>
                        <li><a className="dropdown-item" href="#scrollspyHeading5">Fifth</a></li>
                     </ul>
                 </li>
               </ul>
              </nav>

              <div className="container landingPage-bg-color">
                
                <div data-bs-spy="scroll" data-bs-target="#navbar-example2" data-bs-offset="0" className="scrollspy-example landingPage-bg-color row landingPage-aligItems" tabindex="0">
                    <div id="scrollspyHeading1 " className="landingPage-aligItems col-12">
                        <div >
                            <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                                <div className="carousel-inner">
                                    <div className="carousel-item active">
                                        <img src="../img/landing/introduction.png" className="d-block w-100" alt="..."/>
                                    </div>
                                    <div className="carousel-item">
                                        <img src="../img/landing/introduction2.png" className="d-block w-100" alt="..."/>
                                    </div>
                                    <div className="carousel-item">
                                        <img src="../img/landing/introduction3.png" className="d-block w-100" alt="..."/>
                                    </div>
                                </div>
                               <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Previous</span>
                                </button>
                                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Next</span>
                                </button>
                            </div>
                        
                        
                        <p className=" landingPage-aligItems">With J Project Manager you can keep track of the tasks of your projects in an organized way, 
                        knowing at all times the percentage of tasks completed and pending.</p>
                    </div>
                        
                    </div>
                  

                    <div id="scrollspyHeading2" className="landingPage-aligItems col-12">
                        <h2  >Introduction</h2>
                        <p></p>
                    </div>
                    
                </div>

                

           
            
        </div>

    </div>
    )
}
