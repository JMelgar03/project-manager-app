import React, { useState } from 'react';
import moment from 'moment';
import { useForm } from '../../hooks/useForm';
import { useDispatch, useSelector } from 'react-redux';
import { startProjectAddnew, startProjectEdit } from '../../actions/project';

export const Modal = () => {

    const dispatch = useDispatch();  
    
    let initialStateForm = {};
       
    const {activeProject} = useSelector(state => state.project);
       
    const {uid} = useSelector(state => state.auth);
       
        if(activeProject !== null){
            initialStateForm  = activeProject;   
           }else{
            initialStateForm = {
                projectName:'',
                description:'',
                startDate:'',
                endDate:''
            }  
           }
           
    
    
    const [formValues, handleInputChange, reset] = useForm(initialStateForm);
    
   
    const {projectName, description, startDate, endDate} = formValues;


    const initialState = {
        active: false,
        url:''   
    }
    const [state, setState] = useState(initialState);
    const [validation, setvalidation] = useState({valid:true,msg:''});

    const handleImage = (urlImage)=>{
        
        setState({
            active: true,
            url: urlImage
        })
    }

    const handleModalClose = ()=>{
        setState(initialState);
        reset();
    }

    const handleAddProject = ()=>{
        if(isFormValid()){

                if(activeProject === null){
                    dispatch(startProjectAddnew({
                        ...formValues,
                        task:[],
                        imgBackground: state.url,
                        user: uid
                    }));
                    document.getElementById('btnClose').click();
                }else{
                    if(isFormValid()){
                        dispatch(startProjectEdit({
                            ...formValues,
                            id: activeProject.id,
                            imgBackground: state.url,
                            user: activeProject.user,
                            task: activeProject.task,
                            progress:activeProject.progress
                        }));
                        document.getElementById('btnClose').click();
                        
                    }
                }

           
            
            
        }
    }
    
    const isFormValid=()=>{
       const momentStart = moment(startDate);
       const momentFinish = moment(endDate);

      

        if(projectName.trim().length === 0){
            setvalidation({
                valid:false,
                msg:'Project Name is required'
            });
            return false;

        }else if(momentStart.isSameOrAfter(momentFinish)){
           
            setvalidation({
                valid:false,
                msg:'Finish date must be greater than start Date '
            });

            return false;

        }else if(state.url === ''){
            setvalidation({
                valid:false,
                msg:'Please select a image'
            });
            return false;
        }
        setvalidation({valid:true, msg:''});
        return true
    }

    return (
        <div className="modal fade " id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content modal-border-radius"
                    style={{
                        backgroundImage: `url('${state.url}')`,
                        backgroundPosition: 'center'
                }}
                
                >
                    <div className="modal-header">
                        <h5 className={`"modal-title ${state.active && 'modal-title-user'} "`} id="exampleModalLabel">Create New Project</h5>
                </div>
            <div className="modal-body">
                    {!(validation.valid) &&(
                            <div className="alert alert-danger" role="alert">
                                {validation.msg}
                            </div>)
                        }
                <form>
                    <input 
                    className={`" auth__input auth__input-text ${(state.active)?'modal-input-colors' : 'modal-input-colors-none'} "`}
                    type="text" 
                    placeholder="Project Name"
                    name="projectName"
                    maxLength="35"
                    value={projectName}
                    onChange={handleInputChange}
                    />
                    
                    <textarea 
                    className={`" modal-textarea mt-2 auth__input auth__input-text ${(state.active)?'modal-input-colors' : 'modal-input-colors-none'} "`}
                    type="text" 
                    placeholder="Describe your project (optional)"
                    name="description"
                    value={description}
                    onChange={handleInputChange}
                    />

                    <label className={`" ${(state.active)?'modal-input-colors' : 'modal-input-colors-none'} "`}>Start Date:
                    <input 
                        className={`" mt-2 auth__input auth__input-text ${(state.active)?'modal-input-colors' : 'modal-input-colors-none'} "`}
                        type="date" 
                        name="startDate"
                        value={startDate}
                        onChange={handleInputChange}
                    />
                    </label>

                    <label className={`" ${(state.active)?'modal-input-colors' : 'modal-input-colors-none'} "`}>Finish Date:
                        <input 
                        className={`" mt-2 auth__input auth__input-text ${(state.active)?'modal-input-colors' : 'modal-input-colors-none'} "`}
                        type="date" 
                        name="endDate"
                        value={endDate}
                        onChange={handleInputChange}
                    />
                </label>
                </form>

                <div className="modal-container-image">
                    <div className="row">
                        <div className="col-3 image-focus" onClick={()=>{handleImage('../img/fondo1.jpg')}} >
                            <img src="../img/fondo1.jpg" className="img-fluid image-table-responsive " alt="..."/>
                         </div>

                        <div className="col-3" onClick={()=>{handleImage('../img/fondo2.jpeg')}}>
                            <img src="../img/fondo2.jpeg" className="img-fluid image-table-responsive" alt="..."/>
                         </div>

                        <div className="col-3" onClick={()=>{handleImage('../img/fondo3.jpg')}}>
                            <img src="../img/fondo3.jpg" className="img-fluid image-table-responsive" alt="..."/>
                        </div>

                        <div className="col-3" onClick={()=>{handleImage('../img/fondo4.jpg')}}>
                            <img src="../img/fondo4.jpg" className="img-fluid image-table-responsive" alt="..."/>
                        </div>

                        <div className="col-3" onClick={()=>{handleImage('../img/fondo5.jpg')}}>
                            <img src="../img/fondo5.jpg" className="img-fluid image-table-responsive" alt="..."/>
                        </div>

                        <div className="col-3" onClick={()=>{handleImage('../img/fondo6.jpg')}}>
                            <img src="../img/fondo6.jpg" className="img-fluid image-table-responsive" alt="..."/>
                        </div>
                     </div>
                </div>
               
                
        </div>
      <div >
          
        <button type="button" id="btnClose" className="btn btn-secondary modal-btn-size" onClick={handleModalClose} data-bs-dismiss="modal">
            <span><i className="fas fa-window-close"></i></span>
        </button> 

        <button type="button" className="btn btn-info modal-btn-size" onClick={handleAddProject}>
            <span><i className="fas fa-save"></i></span>
        </button>
         
        
      </div>
    </div>
  </div>
</div>
    )
}
