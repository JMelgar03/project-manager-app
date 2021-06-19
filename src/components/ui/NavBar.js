import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { startlogOut } from '../../actions/auth';
import { loadProjects, startLoadProjects } from '../../actions/project';
import { useForm } from '../../hooks/useForm';




export const NavBar = () => {

   const dispatch = useDispatch();
   const {name, photoURL, uid} = useSelector(state => state.auth);
   const {projects} = useSelector(state => state.project)

    const [formValues, handleInputChange] = useForm({search:''})
    const {search} = formValues;
    const handleLogout = ()=>{
         dispatch(startlogOut());   
        }
    

    const handleSearch = async()=>{
        if(search === ''){
        dispatch(startLoadProjects(uid))
       }else{
       
        const searchLW = search.toLocaleLowerCase();
        const projectFiltered = projects?.filter(p => p.projectName.toLocaleLowerCase().includes(searchLW));
        

           dispatch(loadProjects(projectFiltered));
       } 
    }

    const busqueda = localStorage.getItem('busqueda');

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
        
        

      </ul>
    </div>
    <form className="d-flex  navbar-form">
                {(busqueda !== 'false')
                ?(<><input className="form-control mt-2" type="search" name="search" value={search} onChange={handleInputChange} placeholder="Search" aria-label="Search"/>
                <button className="btn btn-outline-info ml-2 mr-2" onClick={handleSearch} type="button">
                    
                    <i className="fas fa-search"></i>
                    
                </button></>)
                :('')
                }
                
                <div className="dropdown nav-item" style={{backgroundColor:'none', border:'none', paddingTop:'5px'}}>
                    <a className="dropdown-toggle nav-link navbar-user-name navbar-hover" style={{backgroundColor:'none', border:'none'}} href="#" type="button" id="dropdownMenu2" data-bs-toggle="dropdown" aria-expanded="false">
                       
                       { (photoURL !== null)?(<><img src={photoURL} className="navbar-image-user" /> {name}</>)
                        :(<><span className="fas fa-user"> </span> {name}</>)
                        }

                    </a>
                    <ul className="dropdown-menu" aria-labelledby="dropdownMenu2">
                        <li><Link to="/home/profile" className="dropdown-item" type="button"><span className="fas fa-user"> </span> Profile</Link></li>
                        <li >
                            <button className="dropdown-item fas fa-sign-out-alt " type="button"  onClick={handleLogout}><span className="navbar-font"> Logout</span></button>
                     
                        </li>
                    </ul>
                </div>
        
            </form>

  </div>
</nav>
    )
}
