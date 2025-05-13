import React from 'react'
import './footer.css'
import { Link } from 'react-router-dom'
export const Footer = () => {
  return (
    <div className='footer-main'>
    
    
<div class="footer">
  <div class="footer-column">
    <h1><Link to='/'>ACME Patient </Link></h1>
    <p>Acme Hospital, a multispecialty medical center, is known for its commitment to providing high-quality care, utilizing modern technology, and a patient-centric approach, according to Acme Hospital. They offer a range of services, including general medicine, surgical services, and specialized care. </p>
{/* 
    <div class="social-icons">
      <a href="#">Facebook</a>
      <a href="#">Twitter</a>
      <a href="#">LinkedIn</a>
      <a href="#">Instagram</a>
    </div> */}
  </div>
<div className="footer11">




  <div class="footer-column">
    <h4>Pages</h4>
     <Link to="/">
                   <p> Home Page</p>
                 </Link>
                 <Link to="/dashboard">
                   <p>  Dashboard Overview</p>
                 </Link>
                 <Link to="/currentW">
                   <p> Currennt Weight </p>
                 </Link>
                 <Link to="/weightloss">
                   <p>  Weight Loss Progress</p>
                 </Link>
                 <Link to="/shipment">
                   <p>  Shipment</p>
                 </Link>
  </div>

  <div class="footer-column">
    <h4>Service</h4>
 <Link to="/bmi">
                <p>  BMI Snapshot </p>
              </Link>
     <Link to="/register">
                  <p>  Register patients</p>
                </Link>
                <Link to="/">
                  <p>  Patients list</p>
                </Link>
  </div>

  <div class="footer-column">
    <h4>Maps Location</h4>
    {/* <iframe class="map" src="" frameborder="0"></iframe> */}
    <img className='map' src="https://www.google.com/maps/vt/data=sdpMpcOqVOc04xv6FQi1qiTJgOKnN6LUTXAVUUy2aeSkUVNs6966kZqvhYxz3oBX2XaebfdQ_roOJzhLVxpI7MM43kR6YNcU2wdUtDOgZowKtGFx2rD9YSqBtpBG9L1JoLxUUhosKoJgJlHfy3qw3ZbsacGChHU72r_rzEy9smiFVuFdxzKuXPOahMY1l2oasmo1v7eK2_1qJ6A1LxhI_Clq4NM9F3LfflJuSVnpHkIGjV29B9f-4L0TzawoCzjTvfqa2QrZMYFBEaIzqCjgboLLsiXPttEf" alt="Map" />
{/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d114542.80185929636!2d78.19089894999999!3d26.21415585!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3976c5d1792291fb%3A0xff4fb56d65bc3adf!2sGwalior%2C%20Madhya%20Pradesh!5e0!3m2!1sen!2sin!4v1747102152449!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}
  </div>

</div>
</div>
    
    
    </div>
  )
}
