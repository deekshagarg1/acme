import React, { useState } from 'react'
import './payment.css'
export const Payment = ({detail}) => {

  const[sent1 , setsent1]=useState([])

  const sent =()=>{
setsent1(detail)
console.log(sent1)
alert("your draft is sent")
  }

  return (
    <div className='payment-main'>


  <h2>OP - Final draft to Consultant</h2>

  <br /><br /><br />

  <div class="form-grid">
    <div>Name</div><div>:</div><div>Abc</div>
    <div>Age</div><div>:</div><div>13</div>
    <div>Gender</div><div>:</div><div>Male</div>
    <div>Blood group</div><div>:</div><div>A+</div>
    <div>Date of Birth</div><div>:</div><div>12/12/2022</div>
    <div>Phone</div><div>:</div><div>0123456789</div>
    <div>Department</div><div>:</div><div class="highlight">Cardiology</div>
    <div>Date and Time</div><div>:</div><div>12/12/2022 – [2:00]</div>
    <div>Consultant</div><div>:</div><div>caty</div>
  </div>
  <br /><br /><br />

  <hr />
    <br /><br /><br />

 {detail.map((item)=><>  <div class="form-grid">
    <div>Name</div><div>:</div><div>{item.name}</div>
    <div>Age</div><div>:</div><div>{item.age}</div>
    <div>Gender</div><div>:</div><div>{item.gen}</div>
    <div>Blood group</div><div>:</div><div>{item.blood}</div>
    <div>Date of Birth</div><div>:</div><div>{item.birthdate}</div>
    <div>Phone</div><div>:</div><div>{item.phone}</div>
    <div>Department</div><div>:</div><div class="highlight">{item.department}</div>
    <div>Date and Time</div><div>:</div><div>{item.date}</div>
    <div>place</div><div>:</div><div>{item.place}</div>
  </div>
     <br /><br /><br />
  <hr />
    <br /><br /><br />
  </>)}

 

  <div class="buttons">
    <button>Print</button>
    <button onClick={sent}>Sent</button>
  </div>


    </div>
  )
}
