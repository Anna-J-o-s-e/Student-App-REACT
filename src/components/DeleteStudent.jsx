import React from 'react'
import NavBar from './NavBar'

const DeleteStudent = () => {
    return (
        <div>
            <NavBar/>
            <br />
            <center><h1>DELETE STUDENT</h1></center>\

            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        
                            <div className="row g-3">
                            <center>
                                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                                    <label htmlFor="" className="form-label">Admn. No.</label>
                                    <input type="text" className="form-control" />

                                </div><br />
                                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                                    <button className="btn btn-success">Delete</button>

                                </div>
                                </center>
                            </div>

                    </div>
                
            </div>
        </div>
    </div >
  )
}

export default DeleteStudent