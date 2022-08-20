
import React, { useState, useRef } from 'react';
/**
 * @task :add validation to email, if email is not valid, if not valid email, dont allow to submit
 * @error_message :  "Email is invalid"  if email is wrong. (must be same message) 
 * 
 * 
 */

function App() {
  const emailRef = useRef(null);
  const [error , setError] = useState("");

 
 const validate = (event) =>{
  event.preventDefault();
  var regEx = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/;
  if(!emailRef.current.value.match(regEx)){
   setError("Email is invalid");
   return;
  }
  else{
    setError("");
    console.log("email");
  }
  console.log(emailRef.current.value);
 }
  return(
    <div className="App">
     hey
     <form onSubmit={validate}>
     <input type="text" ref={emailRef}/>
     {error && <h2 style={{color: 'red'}}>{error}</h2>}
     <button type='submit'>submit</button>
     </form>
    </div>
  )
}


export default App;
