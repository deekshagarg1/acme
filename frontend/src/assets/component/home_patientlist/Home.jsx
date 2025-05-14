
import React from 'react'
import './patient.css'
import Slider from "react-slick";
import { useState } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Footer } from '../footer/Footer';
import { Link } from 'react-router-dom';
// export const Patient = ({detail , delete1 , searchpatient, setsearch1}) => {
export const Home = ({detail , delete1 , searchpatient}) => {
const auth =localStorage.getItem("token");
//  const[search1 , setsearch1]=useState("")


var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };




  return (
    <div className='patient-main' style={{width: auth ? "" : "100%"  , height: auth? "" : ""}} >

      <div className="animation">
        
<center><h1>Welcome to ACME Patient !!</h1></center>

         </div>
{/* ------------------------------------------------------- */}

         <section className='center-home'>





<center><div class="header1">Hospital Modules</div></center>

  <div class="container1">
    <div class="module">
      <h3><span class="icon">🖥️</span>Patient Registration (OPD, Casualty, Appointment & ORS)</h3>
      <p>The patient registration module of the e-Hospital application is used for patient registration in the OPD and Casualty departments as well as to book, confirm and cancel appointments.</p>
    </div>

    <div class="module">
      <h3><span class="icon">🛏️</span>Admission, Discharge & Transfer (IPD)</h3>
      <p>The IPD module commences when the patient is being registered and allotted bed in the ward. It deals with the complete treatment and services provided to the patient during his stay in the hospital.</p>
    </div>

    <div class="module">
      <h3><span class="icon">📄</span>Billing</h3>
      <p>The Billing module handles all types of billing workflows. This module facilitates cashier and billing operators for managing billing functions related to billing receipts and refunds.</p>
    </div>

    <div class="module">
      <h3><span class="icon">🩺</span>Clinic (OPD & IPD)</h3>
      <p>The Clinic module allows the clinicians and doctors to record the clinical data of the patients like visits, examination, diagnosis, history, treatment, prescriptions etc., and to order investigations, procedures and medicines, to keep track of the treatment and other services provided to the patients.</p>
    </div>
  </div>

         </section>

{/* ---------------------------------------------- */}



<section className='home-slider'>

 <div className="slider-container">
      <Slider {...settings}>
       <div className="sl-main">
    <div className="sl2"></div>
<div className="sl1"><Link to='/register'>Register Patient</Link></div>
</div>

         <div className="sl-main">
    <div className="sl2a"></div>
<div className="sl1"><Link to='/patient'>Patient List</Link></div>
</div>
           <div className="sl-main">
    <div className="sl2b"></div>
<div className="sl1"><Link to='/weightloss'>Weight Loss Progress</Link></div>
</div>

         <div className="sl-main">
    <div className="sl2c"></div>
<div className="sl1"><Link to='/bmi'>BMI Calculator</Link></div>
</div>
         
      </Slider>
    </div>



{/* <div className="sl-main">
    <div className="sl2"></div>
<div className="sl1">Register Patient</div>
</div> */}

</section>


{/* ----------------------------------- */}


<Footer/>
    </div>
  )
}
