import React from 'react'
import './dashbboard.css'

// import React, { PureComponent } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Footer } from '../footer/Footer';


export const Dashboard = () => {


const data = [
  { name: 'Jan', uv: 85, pv: 29, amt: 34 },
  { name: 'Feb', uv: 63.5, pv: 28.5, amt: 33 },
  { name: 'Mar', uv: 52, pv: 28, amt: 32 },
  { name: 'Apr', uv: 80.5, pv: 27.5, amt: 31 },
  { name: 'May', uv: 69, pv: 27, amt: 30 },
  { name: 'Jun', uv: 47.5, pv: 26.5, amt: 29 },
  { name: 'Jul', uv: 76, pv: 26, amt: 28 },
  { name: 'Aug', uv: 90.5, pv: 25.5, amt: 27 },
  { name: 'Sep', uv: 73, pv: 25, amt: 26 },
  { name: 'Oct', uv: 31.5, pv: 24.5, amt: 25 },
  { name: 'Nov', uv: 70, pv: 24, amt: 24 },
  { name: 'Dec', uv: 58.5, pv: 23.5, amt: 23 },
];



  return (
    <div className='dash-main'>
    
  <h2>Daily Readings</h2>

  <div class="card-container">
    <div class="card purple">
      <h3>Heart Rate ❤️</h3>
      <p>80.5</p>
      <small>BPH</small>
    </div>
    <div class="card red">
      <h3>BP 🩺</h3>
      <p>120.25</p>
      <small>mmHg</small>
    </div>
    <div class="card green">
      <h3>Cholesterol 🫀</h3>
      <p>220</p>
      <small>mg/DL</small>
    </div>
    <div class="card blue">
      <h3>Temperature 🌡️</h3>
      <p>31.5</p>
      <small>°C</small>
    </div>
  </div>

  <div class="chart">
    <h2>Health statistics</h2>
    <div class="fake-chart">

  <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          width={500}
          height={400}
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Area type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" />
        </AreaChart>
      </ResponsiveContainer>


    </div>
  </div>
    
    
    <Footer/>
    </div>
  )
}
