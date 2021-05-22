import React from 'react'

export const Modal = () => {
    return (
        <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Create New Project</h5>
                        
                </div>
            <div className="modal-body">
                <form>
                    <input 
                    className="form-control"
                    type="text" 
                    placeholder="Project Name"
                    
                    />
                </form>
        </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" className="btn btn-info">Save changes</button>
      </div>
    </div>
  </div>
</div>
    )
}
