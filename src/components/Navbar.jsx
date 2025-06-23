import React from 'react'
import PropTypes from 'prop-types'
// import { Link } from 'react-router-dom'


function Navbar(props) {
  return (
    <>
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
      <div className="container-fluid">
        {/* <Link className="navbar-brand" to="#">{props.title}</Link> */}
        <a className="navbar-brand" href="#">{props.title}</a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              {/* <Link className="nav-link active" aria-current="page" to="/">Home</Link> */}
              <a className="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            {/* <li className="nav-item">
              <Link className="nav-link" to="/about">About</Link>
            </li> */}
          </ul>
          <div className="d-flex">
            <div className='bg-primary rounded-5 mx-2' onClick={()=>{props.toggleMode("primary")}} style={{height:"20px",width:"20px",cursor:"pointer"}}></div>
            <div className='bg-danger rounded-5 mx-2' onClick={()=>{props.toggleMode("danger")}} style={{height:"20px",width:"20px",cursor:"pointer"}}></div>
            <div className='bg-success rounded-5 mx-2' onClick={()=>{props.toggleMode("success")}} style={{height:"20px",width:"20px",cursor:"pointer"}}></div>
            <div className='bg-warning rounded-5 mx-2' onClick={()=>{props.toggleMode("warning")}} style={{height:"20px",width:"20px",cursor:"pointer"}}></div>
          </div>
          <div className={`form-check form-switch text-${props.mode === "light"?"dark":"light"}`}>
            <input onClick={()=>{props.toggleMode(null)}} className="form-check-input" type="checkbox" role="switch" id="switchCheckDefault"/>
            <label className="form-check-label" htmlFor="switchCheckDefault">Toggle Mode</label>
          </div>
          {/* `<form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-primary" type="submit">
              Search
            </button>
          </form>` */}
        </div>
      </div>
    </nav>
    </>
  )
}

Navbar.propTypes={
    title:PropTypes.string.isRequired
}

Navbar.defaultProps={
    title: "title"
}

export default Navbar