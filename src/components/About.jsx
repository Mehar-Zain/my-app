import React, { useState } from 'react'

function About(props) {
    let myStyle={
      color:props.mode==="dark"?"white":"#042743",
      backgroundColor:props.mode==="dark"?"#042743":"white"
    }
  return (
    <div style={{color : props.mode === "light"?"#042743":"white"}}>
        <div className='d-flex'>
            <h1 className='container my-4' style={{color : props.mode === "light"?"#042743 !important":"white"}}>About Us</h1>
        </div>
        <div className="accordion" id="accordionExample">
      <div className="accordion-item" style={myStyle}>
        <h2 className="accordion-header">
          <button
            style={myStyle}
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseOne"
            aria-expanded="false"
            aria-controls="collapseOne"
          >
            <strong>Analyze your text</strong>
          </button>
        </h2>
        <div
          id="collapseOne"
          className="accordion-collapse collapse"
          data-bs-parent="#accordionExample"
        >
          <div className="accordion-body">
            This is the first item’s accordion body. It is hidden by default...
          </div>
        </div>
      </div>

      <div className="accordion-item" style={myStyle}>
        <h2 className="accordion-header">
          <button
            style={myStyle}
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseTwo"
            aria-expanded="false"
            aria-controls="collapseTwo"
          >
            <strong>Free to use</strong>
          </button>
        </h2>
        <div
          id="collapseTwo"
          className="accordion-collapse collapse"
          data-bs-parent="#accordionExample"
        >
          <div className="accordion-body">
            This is the second item’s accordion body. It is hidden by default...
          </div>
        </div>
      </div>

      <div className="accordion-item" style={myStyle}>
        <h2 className="accordion-header">
          <button
            style={myStyle}
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseThree"
            aria-expanded="false"
            aria-controls="collapseThree"
          >
            <strong>Browser compatible</strong>
          </button>
        </h2>
        <div
          id="collapseThree"
          className="accordion-collapse collapse"
          data-bs-parent="#accordionExample"
        >
          <div className="accordion-body">
            This is the third item’s accordion body. It is hidden by default...
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default About