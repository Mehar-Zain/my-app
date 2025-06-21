import React ,{useState} from 'react'

function Form(props) {

  const upperCase=()=>{
    let newText=text.toUpperCase();
    settext(newText);
    props.showAlert("success","Converted to Uppercase!");
  }

  const lowerCase=()=>{
    let newText=text.toLowerCase();
    settext(newText);
    props.showAlert("success","Converted to Lowercase!");
  }

  const clearText=()=>{
    let newText=""
    settext(newText);
    props.showAlert("success","Text cleared!");
  }

  const copyText=()=>{
    var text=document.getElementById("my-box");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("success","Copied to clipboard!");
  }

  const onChange=(event)=>{
    settext(event.target.value);
  }


  const [text, settext] = useState("");
  return (
      <>
      <div className='container' style={{color : props.mode === "light"?"#042743":"white"}}>
        <h1>{props.heading}</h1>
        <div className="form-group my-4">
            <textarea className="form-control" rows="8" id="my-box" value={text} onChange={onChange} style={{backgroundColor : props.mode === "dark"?"#042743":"white", color : props.mode === "light"?"#042743":"white",border : props.mode === "light"?"1px solid #042743":"1px solid white"}}></textarea>
        </div>
        <button className='btn btn-primary mx-2' onClick={upperCase}>Convert to Uppercase</button>
        <button className='btn btn-primary mx-2' onClick={lowerCase}>Convert to Lowercase</button>
        <button className='btn btn-primary mx-2' onClick={clearText}>Clear text</button>
        <button className='btn btn-primary mx-2' onClick={copyText}>Copy text</button>
      </div>
      <div className='container my-3' style={{color : props.mode === "light"?"#042743":"white"}}>
        <h2>Your text summary</h2>
        <p>{text.split(" ").length - 1} words and {text.length} characters</p>
        <p>{0.008 * (text.split(" ").length - 1)} minutes to read this text</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter some text to preview it."}</p>
      </div>
      </>
  )
}

export default Form