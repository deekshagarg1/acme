import React from 'react'
import './shipment.css'
import { Footer } from '../footer/Footer'
export const Shipment = () => {
  return (
    <div className='ship-main'>


  <h2>Caty (name of Consultant)</h2>

  <div class="info-container">
    <div class="card">
      <h4>Patients</h4>
      <p>Non finished &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;: 15</p>
      <p>Finished &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: 35</p>
      <p>Today's all &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: 50</p>
    </div>

    <div class="card">
      <h4>Nurse</h4>
      <p>Morning &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: 9:00 - 12:30</p>
      <p>After Noon &nbsp;&nbsp;&nbsp;: 2:00 - 5:00</p>
      <p>Evening &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: 6:30 - 8:00</p>
    </div>
  </div>

  <table>
    <thead>
      <tr>
        <th>Name</th>
        <th>Age</th>
        <th>Phone</th>
        <th>Date and Time</th>
      </tr>
    </thead>
    <tbody>
      <tr><td>Deeksha Garg</td><td>12</td><td>0123456789</td><td>12/01/2025 – 03:30 AM</td></tr>
      <tr><td>Shivani Kaushal</td><td>37</td><td>2343456789</td><td>12/11/2024 – 05:30 PM</td></tr>
      <tr><td>Sagar Agrawal</td><td>45</td><td>0123456789</td><td>02/04/2025 – 02:45 PM</td></tr>
      <tr><td>Ankita Dhakar</td><td>18</td><td>1256789344</td><td>02/02/2025 – 10:00 AM</td></tr>
    </tbody>
  </table>



<Footer/>
    </div>
  )
}

