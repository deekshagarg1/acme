import React from 'react'
import './patient.css'
import { useState } from 'react';
import { Footer } from '../footer/Footer';
// export const Patient = ({detail , delete1 , searchpatient, setsearch1}) => {
export const Patient = ({detail , delete1 , searchpatient}) => {
const auth =localStorage.getItem("token");
 const[search1 , setsearch1]=useState("")


  return (
    <div className='patient-main' style={{width: auth ? "" : "100%"  , height: auth? "" : ""}} >

      <div className="animation">
        
<center><h1>Welcome to ACME Patient !!</h1></center>

         </div>

 <div class="header">
    <button class="filter-btn">Filter ▼ </button>
    <div class="title">O P D</div>
    <div class="search-container">
      <input type="text" class="search-input" placeholder="Search..." onChange={(e)=>setsearch1(e.target.value)}/>
      <button class="search-btn" onClick={()=>{searchpatient(search1)}}>search</button>
    </div>
  </div>

  <table>
    <thead>
      <tr>
        <th>Name</th>
        <th>Age</th>
        <th>Place</th>
        <th>Date</th>
        <th>Consultant</th>
          <th>Delete</th>
      </tr>
    </thead>
    <tbody>
      {/* <!-- Repeat the same row --> */}
     {detail.map((item)=><> <tr><td>{item.name}</td><td>{item.age}</td><td>{item.place}</td><td>{item.date}</td><td>{item.department}</td> <td><button onClick={()=>{delete1(item._id)}} style={{border:"none"}}><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="darkred" class="bi bi-trash3" viewBox="0 0 16 16">
  <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5M11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47M8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5"/>
</svg></button></td></tr></>)}
   
    </tbody>
  </table>


<Footer/>
    </div>
  )
}
