// import React from 'react'
// import './c_weight.css'
// import { Footer } from '../footer/Footer'

// export const Current_weight = () => {
//   return (
//     <div className='current-main'>
    
    
    
    
//   <div class="container">
//     <div class="section-title">Patient Health Overview</div>

//     <div class="card-grid">

//       {/* <!-- Current Weight Card --> */}
//       <div class="card">
//         <h3>Current Weight</h3>
//         <div class="weight-value">72.5 kg</div>
//         <div class="status-tag">Normal</div>
//         <div class="progress-bar">
//           <span></span>
//         </div>
//         <div class="updated">Updated on: May 10, 2025</div>
//       </div>

//       {/* <!-- Overall Health Card --> */}
//       <div class="card">
//         <h3>Overall Health</h3>
//         <ul class="health-list">
//           <li>✔️ Heart Rate: 80 bpm</li>
//           <li>✔️ Blood Pressure: 120/80 mmHg</li>
//           <li>✔️ Cholesterol: 200 mg/dL</li>
//           <li>✔️ Temperature: 36.7 °C</li>
//           <li>✔️ BMI: 23.1 (Healthy)</li>
//         </ul>
//         <div class="updated">Last Checkup: May 9, 2025</div>
//       </div>

//     </div>
//   </div>
    
    
    
    
    
    
    
    
    

    
    
//     <Footer/>
//     </div>
//   )
// }


import React, { useState, createContext, useContext } from 'react';
import './c_weight.css';
import { Footer } from '../footer/Footer';

// Context
const PatientContext = createContext();

const usePatient = () => useContext(PatientContext);

// Main Component
export const Current_weight = () => {
  const [weightData, setWeightData] = useState({
    value: '72.5',
    status: 'Normal',
    progress: 60,
    updatedDate: '2025-05-10',
    checkupDate: '2025-05-09',
  });

  const [healthStats, setHealthStats] = useState([
    { label: 'Heart Rate', value: '80 bpm' },
    { label: 'Blood Pressure', value: '120/80 mmHg' },
    { label: 'Cholesterol', value: '200 mg/dL' },
    { label: 'Temperature', value: '36.7 °C' },
    { label: 'BMI', value: '23.1 (Healthy)' },
  ]);

  const [form, setForm] = useState({
    value: '',
    status: '',
    progress: '',
    updatedDate: '',
    checkupDate: '',
    heartRate: '',
    bloodPressure: '',
    cholesterol: '',
    temperature: '',
    bmi: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setWeightData({
      value: form.value,
      status: form.status,
      progress: form.progress,
      updatedDate: form.updatedDate,
      checkupDate: form.checkupDate,
    });

    setHealthStats([
      { label: 'Heart Rate', value: form.heartRate },
      { label: 'Blood Pressure', value: form.bloodPressure },
      { label: 'Cholesterol', value: form.cholesterol },
      { label: 'Temperature', value: form.temperature },
      { label: 'BMI', value: form.bmi },
    ]);
  };

  return (
    <PatientContext.Provider value={{ weightData, healthStats }}>
      <div className="current-main">
        <form className="patient-form" onSubmit={handleSubmit}>
          <h2>Update Patient Details</h2>
          <input name="value" type="number" placeholder="Weight (kg)" onChange={handleChange} />
          <input name="status" type="text" placeholder="Status (e.g. Normal)" onChange={handleChange} />
          <input name="progress" type="number" placeholder="Progress (%)" onChange={handleChange} />
          <input name="updatedDate" type="date" placeholder="Updated Date" onChange={handleChange} />
          <input name="checkupDate" type="date" placeholder="Checkup Date" onChange={handleChange} />

          <input name="heartRate" type="text" placeholder="Heart Rate" onChange={handleChange} />
          <input name="bloodPressure" type="text" placeholder="Blood Pressure" onChange={handleChange} />
          <input name="cholesterol" type="text" placeholder="Cholesterol" onChange={handleChange} />
          <input name="temperature" type="text" placeholder="Temperature" onChange={handleChange} />
          <input name="bmi" type="text" placeholder="BMI" onChange={handleChange} />

          <button type="submit">Submit</button>
        </form>

        <div className="container">
          <div className="section-title">Patient Health Overview</div>

          <div className="card-grid">
            {/* Current Weight Card */}
            <div className="card">
              <h3>Current Weight</h3>
              <div className="weight-value">{weightData.value} kg</div>
              <div className="status-tag">{weightData.status}</div>
              <div className="progress-bar">
                <span style={{ width: `${weightData.progress}%` }}></span>
              </div>
              <div className="updated">Updated on: {weightData.updatedDate}</div>
            </div>

            {/* Overall Health Card */}
            <div className="card">
              <h3>Overall Health</h3>
              <ul className="health-list">
                {healthStats.map((item, idx) => (
                  <li key={idx}>✔️ {item.label}: {item.value}</li>
                ))}
              </ul>
              <div className="updated">Last Checkup: {weightData.checkupDate}</div>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </PatientContext.Provider>
  );
};
