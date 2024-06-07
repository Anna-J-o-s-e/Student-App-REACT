import React from 'react'
import NavBar from './NavBar'

const SearchStudent = () => {
    return (
        <div>
            <NavBar/>
<br /><h1><center>SEARCH STUDENT</center></h1>
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <center>
                            <div className="row g-3">
                                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                                    <label htmlFor="" className="form-label">Student Name</label>
                                    <input type="text" className="form-control" />

                                </div>
                                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                                    <button className="btn btn-success">Search</button>

                                </div>
                            </div>
                        </center>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default SearchStudent