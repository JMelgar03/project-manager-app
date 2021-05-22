import React from 'react'

export const Modal = () => {
    return (
        <div className="modal fade " id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content modal-border-radius">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Create New Project</h5>
                        
                </div>
            <div className="modal-body">
                <form>
                    <input 
                    className="modal-input-colors auth__input auth__input-text"
                    type="text" 
                    placeholder="Project Name"
                    name="projectName"
                    />
                    
                    <input 
                    className="modal-input-colors mt-2 auth__input auth__input-text"
                    type="text" 
                    placeholder="Describe your project"
                    name="Description"
                    />

                    <label>Start Date:
                    <input 
                        className="modal-input-colors mt-2 auth__input auth__input-text"
                        type="date" 
                        name="startDate"
                    />
                    </label>

                    <label>Finish Date:
                        <input 
                        className="modal-input-colors mt-2 auth__input auth__input-text"
                        type="date" 
                        name="finishDate"
                    />
                </label>
                </form>
        </div>
      <div className="">
          
        <button type="button" className="btn btn-secondary modal-btn-size" data-bs-dismiss="modal">Close</button>
        <button type="button" className="btn btn-info modal-btn-size">Save changes</button>
         
        
      </div>
    </div>
  </div>
</div>
    )
}
