import React, { useState } from "react";
import { data, Link, useNavigate } from "react-router-dom";
import "./nav.css";




export const Nav = () => {

 const [showOPD, setShowOPD] = useState(false);
  const [showConsultant, setShowConsultant] = useState(false);


  const auth = localStorage.getItem("token")
  const navigate = useNavigate()
console.log(auth)
  const logout =()=>{
    localStorage.clear();
    navigate("/")
  }

  return (
    <>

    <div className="main">
      {auth ? <>
      <div className="nav-main">
<div className="acme-main">
<Link to='/'><p className='acme'>ACME Patient </p></Link></div>

<div className="h2">{auth.username}</div>
<button><Link onClick={logout} to='/login'>Logout</Link></button>
 </div>


      <div className="nav-left">
        {/* <div className="nav-left1">
          <center>
            <h2>MANAGER</h2>
          </center>

          <div className="line"></div>

          <div className="content2">
            <div className="opd">OPD</div>
            <div className="content12">
              <Link to="/register">
                <p> • Register patients</p>
              </Link>
              <Link to="/patient">
                <p> • Patients list</p>
              </Link>
              <Link to="/payment">
                <p> • Final Shipment </p>
              </Link>
            </div>
          </div>

          <div className="content">
            <div className="opd">consultant</div>
            <div className="content1">
              <Link to="/">
                <p> • Home Page</p>
              </Link>
              <Link to="/dashboard">
                <p> • Dashboard Overview</p>
              </Link>
              <Link to="/currentW">
                <p> • Currennt Weight </p>
              </Link>
              <Link to="/weightloss">
                <p> • Weight Loss Progress</p>
              </Link>
              <Link to="/shipment">
                <p> • Shipment</p>
              </Link>
              <Link to="/bmi">
                <p> • BMI Snapshot </p>
              </Link>
            </div>
          </div>

           <div className="line"></div>

             <div className="opd">List All</div>

          ------nav-left1--------------
        </div> */}


 <div className="nav-left1">
      <center>
        <h2>MANAGER</h2>
      </center>

      <div className="line"></div>

      <div className="content2">
        <div className="opd" >
          OPD
        </div>
        
          <div className="content12">
            <Link to="/register">
              <p>• Register patients</p>
            </Link>
            <Link to="/patient">
              <p>• Patients list</p>
            </Link>
            <Link to="/payment">
              <p>• Final Shipment</p>
            </Link>
          </div>
      
      </div>

      <div className="content">
        <div className="opd" onClick={() => setShowConsultant(!showConsultant)}>
          Consultant &nbsp; <svg xmlns="http://www.w3.org/2000/svg" width="30" height="36" fill="currentColor" class="bi-bi-arrow-down-short" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M8 4a.5.5 0 0 1 .5.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5A.5.5 0 0 1 8 4"/>
</svg>
        </div>
        {showConsultant && (
          <div className="content1">
            <Link to="/">
              <p>• Home Page</p>
            </Link>
            <Link to="/dashboard">
              <p>• Dashboard Overview</p>
            </Link>
            <Link to="/currentW">
              <p>• Current Weight</p>
            </Link>
            <Link to="/weightloss">
              <p>• Weight Loss Progress</p>
            </Link>
            <Link to="/shipment">
              <p>• Shipment</p>
            </Link>
            <Link to="/bmi">
              <p>• BMI Snapshot</p>
            </Link>
          </div>
        )}
      </div>

      <div className="line"></div>

      <div className="opd">List All</div>
    </div>


        {/* ----nav-left----- */}
      </div>
      </>:<> 
      <div className="nav-main">
        <div className="acme-main">
          <Link to="/">
            <p className="acme">ACME Patient </p>
          </Link>
        </div>

        <button>
          <Link to="/login">Login</Link>
        </button>
      </div>
      </>  }



      </div>
    </>
  );
};
