import React from 'react'
import './c_weight.css'
import { Footer } from '../footer/Footer'

export const Current_weight = () => {
  return (
    <div className='current-main'>
    
    
    
    
  <div class="container">
    <div class="section-title">Patient Health Overview</div>

    <div class="card-grid">

      {/* <!-- Current Weight Card --> */}
      <div class="card">
        <h3>Current Weight</h3>
        <div class="weight-value">72.5 kg</div>
        <div class="status-tag">Normal</div>
        <div class="progress-bar">
          <span></span>
        </div>
        <div class="updated">Updated on: May 10, 2025</div>
      </div>

      {/* <!-- Overall Health Card --> */}
      <div class="card">
        <h3>Overall Health</h3>
        <ul class="health-list">
          <li>✔️ Heart Rate: 80 bpm</li>
          <li>✔️ Blood Pressure: 120/80 mmHg</li>
          <li>✔️ Cholesterol: 200 mg/dL</li>
          <li>✔️ Temperature: 36.7 °C</li>
          <li>✔️ BMI: 23.1 (Healthy)</li>
        </ul>
        <div class="updated">Last Checkup: May 9, 2025</div>
      </div>

    </div>
  </div>
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    <Footer/>
    </div>
  )
}
