
import "./App.css";
import React, { useEffect, useState } from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Nav } from "./assets/component/nav/Nav";
// import { Home } from "./assets/component/Home";

import { Patient } from "./assets/component/home_patientlist/Patient";
import { Register } from "./assets/component/register/Register";
import { Payment } from "./assets/component/payment/Payment";
import { Current_weight } from "./assets/component/currentWeight/Current_weight";
import { Weightloss } from "./assets/component/WeightLoss/Weightloss";
import { Shipment } from "./assets/component/Shipment/Shipment";
import { Bmi } from "./assets/component/BMI/Bmi";
import { Login } from "./assets/component/login/Login";
import Private from "./assets/component/Private";
import { Dashboard } from "./assets/component/dashboard/Dashboard";
import { Footer } from "./assets/component/footer/Footer";

function App() {
  const [info , setinfo]=useState([])
//  const[search1 , setSearch1]=useState("")


  // POST API from backend
const register =async(name , age , date , place , department , phone , birthdate , blood)=>{

  const result = await fetch("http://localhost:4100/post1" , {
    method:"POST",
    body:JSON.stringify({name , age , date , place , department , phone , birthdate , blood}),
    headers:{"content-type":"application/json"}
  })
  const data = await result.json()
  console.log(data)
  alert("you are registered")
}


// GET API from backend
const getproducts = async()=>{
let result = await fetch("http://localhost:4100/get1")
result= await result.json()
setinfo(result)
console.log(result)
}

// DELETE API from backend
const delete1= async(params)=>{
  let result = await fetch (`http://localhost:4100/delete1/${params}` , {method:"delete"})
  getproducts(result)
}

// SEARCH API from backend
const searchpatient = async(search1)=>{
  let result = await fetch(`http://localhost:4100/searchapi/${search1}`)
  result= await result.json()
  setinfo(result)
  console.log(result)
  // alert("searched")
}


useEffect(()=>{
  getproducts()
},[])



  

// ---------------frontend working props drilling-----------

// const register =(name , age , date , place , department , phone , birthdate , blood)=>{
// const detail =[...info , {name , age , date , place , department , phone , birthdate , blood}]
// setinfo(detail)
// console.log(info)
// alert("You are Registered !!")
// localStorage.setItem("information" , JSON.stringify(detail))
// }

// useEffect(()=>{
//   const a= JSON.parse(localStorage.getItem("information"))
//   if(a){
//     setinfo(a)
//   }
// },[])




  return (
    <>
      <BrowserRouter>
        <Nav />
        <Routes>
<Route element={<Private/>}>

          <Route path="/register" element={<Register register={register}/>} />
          <Route path="/payment" element={<Payment detail={info}/>} />
          {/* -------------- */}
          <Route path="/currentw" element={<Current_weight />} />
          <Route path="/weightloss" element={<Weightloss />} />
          <Route path="/shipment" element={<Shipment />} />
          <Route path="/bmi" element={<Bmi />} />
          <Route path="/dashboard" element={<Dashboard />} />

</Route>
          
         <Route path="/" element={<Patient  detail={info} delete1={delete1} searchpatient={searchpatient} />} />
               {/* <Route path="/" element={<Patient  detail={info} delete1={delete1} setinfo={setinfo}/>} /> */}
          <Route path="/login" element={<Login />} />

        </Routes>
        {/* <Footer/> */}
      </BrowserRouter>
    </>
  );
}

export default App;
