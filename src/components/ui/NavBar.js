import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { startlogOut } from '../../actions/auth';




export const NavBar = () => {

   const dispatch = useDispatch();


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
                
                <img className="navbar-logo " src="../JProjectManager-logo.png" alt="Logo" />
               
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
          
          <Link className="nav-link active" to="/home/projects" aria-current="page" >
              
          <i class="fas fa-home"></i>Home
            </Link>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#" onClick={handleLogout}>Logout</a>
        </li>
        <li className="nav-item">
          
          <Link className="nav-link " to="/home/manage" tabIndex="-1" aria-disabled="true" >
                   Manage
            </Link>
        </li>
      </ul>
    </div>
    <form className="d-flex ml-5 navbar-form">
                <input className="form-control mt-2" type="search" placeholder="Search" aria-label="Search"/>
                <button className="btn btn-outline-info ml-2" type="submit">
                    
                <i class="fas fa-search"></i>
                    
                    </button>
            </form>
  </div>
</nav>
    )
}
