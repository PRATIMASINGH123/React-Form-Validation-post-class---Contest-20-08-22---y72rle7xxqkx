
import React, { useState, useRef } from 'react';


function App() {

  const fnameRef = useRef()
  const emailRef = useRef("");
  const [error , setError] =useState("");
  const [submitBtn , setSubmitBtn] = useState(true);
  const [data,setData]=useState({});
 

  const HandleSubmit = (event) =>{
    event.preventDefault();

    setData({
      fname:fnameRef.current.value,
      lname:emailRef.current.value,
    })
  }

  const HandleChange = (event) => {
    const search = emailRef.current.value;
    const re = /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/;
    if (!re.test(search)){
      setError("Email is invalid")
      setSubmitBtn(true)
    }
    
    if (re.test(search)){
      setSubmitBtn(false)
      setError("")
    }
  }

  return(
    <div className="App">
      <h1>How About Them Apples</h1>
      <form>
        <fieldset>
          <label>
            <p>First Name</p>
            <input id='fname' name="name"  ref={fnameRef}/>
            <br></br>
            <p>Email</p>
            <input id='lname' name="name" onChange={HandleChange}  ref={emailRef}/>
            {error && <h2 style={{color: 'red'}}>{error}</h2>}
          </label>
        </fieldset>

        <button id='submit' type="submit" onClick={HandleSubmit} disabled={submitBtn}>Submit</button>
      </form>
      {
        data.fname != undefined && (
          <div>
          <h1>{data.fname}</h1>
          <h2>{data.lname}</h2>
          </div>
        )
      }
    </div>
  )
}


export default App;
