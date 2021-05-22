import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { startlogOut } from '../../actions/auth';




export const NavBar = () => {

   const dispatch = useDispatch();
   const {name} = useSelector(state => state.auth)


    const handleLogout = ()=>{
         dispatch(startlogOut());   
        }

    return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark navbar-background">
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                
                <img className="navbar-logo " src="../Logo-white-transparent.PNG" alt="Logo" />
               
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
          
          <Link className="nav-link active" to="/home/projects" aria-current="page" >
              
          <i className="fas fa-home fa-2x"></i>
            </Link>
        </li>
        
        <li className="nav-item">
          
          <Link className="nav-link " to="/home/manage" tabIndex="-1" aria-disabled="true" >
                   Manage
            </Link>
        </li>

        

      



      </ul>
    </div>
    <form className="d-flex  navbar-form">
                <input className="form-control mt-2" type="search" placeholder="Search" aria-label="Search"/>
                <button className="btn btn-outline-info ml-2" type="submit">
                    
                    <i className="fas fa-search"></i>
                    
                </button>

                <div class=" dropdown nav-item">
                    <a class="dropdown-toggle nav-link navbar-user-name navbar-hover" type="button" id="dropdownMenu2" data-bs-toggle="dropdown" aria-expanded="false">
                        <span className="fas fa-user"> </span> {name}
                    </a>
                    <ul className="dropdown-menu" aria-labelledby="dropdownMenu2">
                        <li><button className="dropdown-item" type="button">Action</button></li>
                        <li >
                            <button className="dropdown-item fas fa-sign-out-alt "  onClick={handleLogout}><span className="navbar-font"> Logout</span></button>
                     
                        </li>
                    </ul>
                </div>
        
            </form>

           

          
           


  </div>
</nav>
    )
}
