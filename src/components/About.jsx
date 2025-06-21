import React, { useState } from 'react'

function About(props) {
    const [myStyle, setMyStyle] = useState({
        color:"black",
        backgroundColor:"white"
    })

    const [btnText, setbtnText] = useState("Enable Dark Mode")

    const toggleStyle=()=>{
        if(myStyle.color === "black"){
            setMyStyle({  
            color:"white",
            backgroundColor:"black"
            })
            setbtnText("Enable Light Mode")
        }
        else{
            setMyStyle({  
            color:"black",
            backgroundColor:"white"
            })
            setbtnText("Enable Dark Mode")
        }
    }
  return (
    <div style={{color : props.mode === "light"?"#042743":"white"}}>
        <div className='d-flex'>
            <h1 className='container my-4' style={{color : props.mode === "light"?"#042743 !important":"white"}}>About Us</h1>
            <button onClick={toggleStyle} className='btn btn-dark my-3 w-25' >{btnText}</button>
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
            Accordion Item #1
          </button>
        </h2>
        <div
          id="collapseOne"
          className="accordion-collapse collapse"
          data-bs-parent="#accordionExample"
        >
          <div className="accordion-body">
            <strong>This is the first item’s accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element...
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
            Accordion Item #2
          </button>
        </h2>
        <div
          id="collapseTwo"
          className="accordion-collapse collapse"
          data-bs-parent="#accordionExample"
        >
          <div className="accordion-body">
            <strong>This is the second item’s accordion body.</strong> It is hidden by default...
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
            Accordion Item #3
          </button>
        </h2>
        <div
          id="collapseThree"
          className="accordion-collapse collapse"
          data-bs-parent="#accordionExample"
        >
          <div className="accordion-body">
            <strong>This is the third item’s accordion body.</strong> It is hidden by default...
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default About