import React, { useState } from 'react'

import './register.css'
import { Footer } from '../footer/Footer'
export const Register = ({register}) => {

const [gen , setgen]=useState("")
const[name , setname]=useState("")
const[age , setage]=useState("")
const[place , setplace]=useState("")
const[date , setdate]=useState("")
const[department , setdept]=useState("")
const[blood , setblood]=useState("")
const[phone , setphn]=useState("")
const[birthdate , setbirthdate]=useState("")

// alert(gen)
console.log(gen)

  return (
    <div className='register-main'>
<div className="op">OP - Register a patient</div>

<div className="input-all">

{/* -------------- */}
<div className="inp-c1">
<div className="name">
<h3>Name</h3>
  <input type="text" onChange={(e)=>setname(e.target.value)} />
</div>
<div className="name">
<h3>Date</h3>
  <input type="date" onChange={(e)=>setdate(e.target.value)} />
</div>
</div>

{/* -------------------- */}

<div className="inp-c2">
<div className="name1">
<h3>Age</h3>
  <input type="text" onChange={(e)=>setage(e.target.value)} />
</div>

<div className="gender">

  <h3>Gender</h3>

  <div className="gen-main">
    
  <div className="gen"> Male<input type="radio" value='male' name='g' onChange={(e)=>setgen(e.target.value)}/></div>
   <div className="gen"> Female<input type="radio" value='female' name='g' onChange={(e)=>setgen(e.target.value)}/></div>
    <div className="gen"> Other<input type="radio"  value='other' name='g' onChange={(e)=>setgen(e.target.value)}/></div>
  </div>
    
</div>

<div className="name1">
<h3>Blood Group</h3>
  <input type="text" onChange={(e)=>setblood(e.target.value)}/>
</div>

</div>

{/* ---------------------------------- */}
<div className="inp-c1">
<div className="name3">
<h3>House Address</h3>
  <input type="text"   placeholder='name , house, city, ....' onChange={(e)=>setplace(e.target.value)}/>
</div>

</div>
{/* ----------------------------------------- */}

<div className="inp-c1">
<div className="name">
<h3>Phone</h3>
  <input type="text" onChange={(e)=>setphn(e.target.value)}/>
</div>
<div className="name">
<h3>Birth</h3>
  <input type="date" onChange={(e)=>setbirthdate(e.target.value)}/>
</div>
</div>

{/* ------------------------------------- */}
<div className="inp-c1">
<div className="name">
<h3>Department</h3>
  <input type="text" onChange={(e)=>setdept(e.target.value)} />
</div>
<div className="name4">
<h3></h3>
  <button  onClick={()=>register(name , age , date , place , department , phone , birthdate , blood)} >Register</button>
</div>
</div>











{/* --inputmain------------------ */}
</div>


<Footer/>
{/* ------------------------- */}
    </div>
  )
}
