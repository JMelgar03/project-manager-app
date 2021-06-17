import React from 'react';
import { Link } from 'react-router-dom';

export const LandinPageScreen = () => {
    return (
        <div className="landingPage-bg-color">
                
                <nav id="navbar-example2" className="navbar navbar-expand-lg navbar-dark bg-dark px-3">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <img className="navbar-logo " src="../Logo-white-transparent.PNG" alt="Logo" />
                 <ul className="nav nav-pills collapse navbar-collapse" id="navbarTogglerDemo01">
                    <li className="nav-item">
                        <a className="nav-link" href="#scrollspyHeading1">Introduction</a>
                    </li>
                     <li className="nav-item">
                        <a className="nav-link" href="#scrollspyHeading2">Functions</a>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">Login</a>
                     <ul className="dropdown-menu">
                        <li><Link className="dropdown-item nav-link" to="/auth/login">Login</Link></li>
                        <li><Link className="dropdown-item nav-link" to="/auth/register">Register</Link></li>
                        
                     </ul>
                 </li>
               </ul>
              </nav>

              <div className="container landingPage-bg-color pt-2">

                 
                
                <div data-bs-spy="scroll" data-bs-target="#navbar-example2" data-bs-offset="0" className="scrollspy-example landingPage-bg-color row landingPage-aligItems" tabIndex="0">
                    <div id="scrollspyHeading1 " className="landingPage-aligItems col-12">
                        <div className="row landingPage-aligItems">
                       
                        <div className="col-12 la landingPage-aligItems">
                            <img src="../Logo-white-transparent.PNG" class="img-fluid landing-img-size-logo" alt="logo">
                            </img>
                            </div>
                        
                            <div id="carouselExampleControls" className="carousel slide col-12 animate__animated animate__zoomIn" data-bs-ride="carousel">
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
                        
                        
                        <p className="landing-text col-12 animate__animated animate__fadeIn">With J Project Manager you can keep track of the tasks of your projects in an organized way, 
                        knowing at all times the percentage of tasks completed and pending.</p>
                        <div className="col-12 landingPage-aligItems animate__animated animate__fadeIn">
                        <Link to="/auth/login" className="btn btn-info w-50 ">
                        Try it now!
                        </Link>
                        </div>
                        
                    </div>
                        
                    </div>
                  

                    <div id="scrollspyHeading2" className="landingPage-aligItems row pt-5 pb-5">
                        <h2 className="col-12 pt-5 pb-5 animate__animated animate__fadeIn" >Other Functions:</h2>
                        
                        <div className="card  col-sm-12 col-md-6 col-lg-4 m-1 mt-3 animate__animated animate__zoomIn" >
                            <img src="../img/landing/gooSesion.png"  style={{width: '300px', height: '170px'}} className="card-img-top" alt="..."/>
                            <div class="card-body">
                                <h5 className="card-title">Login with Google</h5>
                                <p className="card-text">You can do a quick login using your google account your credentials are not stored on our servers to make a secure login.</p>
                                <div className="landingPage-aligItems">
                                <Link to="/auth/login" className="btn btn-info  ">
                                    Try it now!
                                </Link>
                                 </div>
                            </div>
                        </div>

                        <div className="card  col-sm-12 col-md-6 col-lg-4  m-1 mt-3 animate__animated animate__zoomIn" >
                            <img src="../img/landing/progressBar.jpg" style={{width: '300px', height: '170px'}} className="card-img-top" alt="..."/>
                            <div class="card-body">
                                <h5 className="card-title">Percentage Bar</h5>
                                <p className="card-text">A progress bar will accompany you throughout your projects to remind you how much you have completed.</p>
                                <div className="landingPage-aligItems">
                                <Link to="/auth/login" className="btn btn-info  ">
                                    Try it now!
                                </Link>
                                 </div>
                            </div>
                        </div>

                    </div>
                    
                </div>

                

           
            
        </div>

    </div>
    )
}
