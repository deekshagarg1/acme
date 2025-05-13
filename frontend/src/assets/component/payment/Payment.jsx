import React from 'react'
import './payment.css'
export const Payment = ({detail}) => {
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
    <div>Date and Time</div><div>:</div><div>{item.date} – [2:00]</div>
    <div>place</div><div>:</div><div>{item.place}</div>
  </div>
  
     <br /><br /><br />

  <hr />
    <br /><br /><br />
  </>)}

 

  <div class="buttons">
    <button>Print</button>
    <button>Sent</button>
  </div>


    </div>
  )
}
