import React, { useState } from 'react'
import './login.css'
import { Navigate, useNavigate } from 'react-router-dom'

export const Login = () => {

const[username,  setUsername]=useState("")
const[password , setPassword]=useState("")
const[login , setlogin]=useState(true)
const[msg , setmsg]=useState("")
const[protectedMsg , setProtectedMsg]=useState("")

const[token , setToken]=useState(localStorage.getItem("token") || "")

const navigate = useNavigate()

const handleAuth= async()=>{

  setmsg("");
  const endpoint = login ? "login":"Register";


try {
  const response = await fetch(`http://localhost:4100/${endpoint}`,
    {
      method:'POST',
      headers:{'Content-Type' :'application/json'}, 
     body: JSON.stringify({ username: username,
      password: password}), 
    });

    const data = await response.json();
    console.log(`this is login ${data.username}`)
    if (!response.ok) throw new Error (data.message);

    if(login){
setToken(data.token);

localStorage.setItem("token", data.token);
setmsg('Login Succesful !')
navigate('/')
 }
  else { 
 
  setmsg('Registration Succesful !')
      navigate('/')

 } 
}
catch(err){
  setmsg(err.message || 'Something went wrong')
}};

const fetchProtected = async () => {
  try {
    const response = await fetch('http://localhost:4100/get', {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
      },
  });

  const data = await response.json();
  if (!response.ok) throw new Error(data.message);
  setProtectedMsg(data.message);
} catch (err) {
  setProtectedMsg(err.message || 'Access denied');
}
};

const logout =()=>{
  setToken("");
  localStorage.removeItem("token");
  setmsg("")
  setProtectedMsg("")
}


  return (
    <>
    
   <div className='login-main'>


<div className="center-login">

  
<h1>Login </h1>


<div className="name-login">
  Name:
<input type="text"  placeholder='Enter your name' onChange={(e)=>setUsername(e.target.value)}  />
</div>

<div className="name-login">
  Password:
  <input type="password" placeholder='enter password'   onChange={(e)=>setPassword(e.target.value)} />
</div>



<div className="login-button">


<button onClick={handleAuth}> {login ? "login" : "register"}</button>




<button onClick={()=>setlogin (!login)}>{login ? "Switch to Register" : "Switch to Login"}  </button>

</div>


{msg && <p>{msg}</p>}


{/* <div className="login-button"> */}


{token && (
<div className="login-button" >

<button onClick={fetchProtected} > Access Protected Route</button>

<button onClick={logout}>Logout</button>
<p>{protectedMsg}</p>

</div>

)}



{/* </div> */}

</div>

     </div>

    
    </>
  )
}
