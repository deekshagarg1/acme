import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./nav.css";

export const Nav = () => {
  const auth = localStorage.getItem("token")
  const navigate = useNavigate()

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

<button><Link onClick={logout} to='/login'>Logout</Link></button>
 </div>

      <div className="nav-left">
        <div className="nav-left1">
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
              <Link to="/">
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

          {/* ------nav-left1-------------- */}
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
