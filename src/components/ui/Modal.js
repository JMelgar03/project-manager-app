import React, { useState } from 'react'
import { useForm } from '../../hooks/useForm';

export const Modal = () => {

    const {values, handleInputChange} = useForm()

    const initialState = {
        active: false,
        url:''   
    }
    const [state, setState] = useState(initialState);

    const handleImage = (urlImage)=>{
        
        setState({
            active: true,
            url: urlImage
        })
    }

    const handleModalClose = ()=>{
        setState(initialState);
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
                <form>
                    <input 
                    className={`" auth__input auth__input-text ${(state.active)?'modal-input-colors' : 'modal-input-colors-none'} "`}
                    type="text" 
                    placeholder="Project Name"
                    name="projectName"
                    />
                    
                    <input 
                    className={`" mt-2 auth__input auth__input-text ${(state.active)?'modal-input-colors' : 'modal-input-colors-none'} "`}
                    type="text" 
                    placeholder="Describe your project"
                    name="Description"
                    />

                    <label className={`" ${(state.active)?'modal-input-colors' : 'modal-input-colors-none'} "`}>Start Date:
                    <input 
                        className={`" mt-2 auth__input auth__input-text ${(state.active)?'modal-input-colors' : 'modal-input-colors-none'} "`}
                        type="date" 
                        name="startDate"
                    />
                    </label>

                    <label className={`" ${(state.active)?'modal-input-colors' : 'modal-input-colors-none'} "`}>Finish Date:
                        <input 
                        className={`" mt-2 auth__input auth__input-text ${(state.active)?'modal-input-colors' : 'modal-input-colors-none'} "`}
                        type="date" 
                        name="finishDate"
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
          
        <button type="button" className="btn btn-secondary modal-btn-size" onClick={handleModalClose} data-bs-dismiss="modal">
            <span><i className="fas fa-window-close"></i></span>
        </button>

        <button type="button" className="btn btn-info modal-btn-size">
            <span><i className="fas fa-save"></i></span>
        </button>
         
        
      </div>
    </div>
  </div>
</div>
    )
}
