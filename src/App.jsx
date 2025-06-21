import { useState } from 'react'
import './App.css'
import About from './components/About'
import Form from './components/Form'
import Navbar from './components/Navbar'
import Alert from './components/Alert'
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route
// } from "react-router-dom";



function App() {
  const [Mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert=(type,message)=>{
    setAlert({
      type:type,
      msg:message
    })
    setTimeout(()=>{
      setAlert(null);
    },2000);
  }

  const toggleMode=()=>{
    if(Mode === "light"){
      setMode("dark");
      document.body.style.backgroundColor="#042743";
      showAlert("success","Dark mode has been enabled!");
    }
    else{
      setMode("light");
      document.body.style.backgroundColor="white";
      showAlert("success","Light mode has been enabled!");
    }
  }
  return (
    <>
    {/* <Router> */}
    <Navbar title="TextUtils" mode={Mode} toggleMode={toggleMode} />
    <Alert alert={alert}/>
    <div className='container mt-3 mb-5'>
    {/* <Routes>
      <Route exact path="/about" element={<About mode={Mode} />} />
      <Route exact path="/" element={<Form showAlert={showAlert} heading="Enter text to analyze below" mode={Mode} />} />
    </Routes> */}
    <Form showAlert={showAlert} heading="Enter text to analyze below" mode={Mode} />
    <About mode={Mode} />
    </div>
    {/* </Router> */}
    </>
  )
}

export default App
