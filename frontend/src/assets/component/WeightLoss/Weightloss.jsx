

import React from 'react';
import './weightloss.css';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import { Footer } from '../footer/Footer';

export const Weightloss = () => {
  const dailyReadings = {
    "Heart Rate": { value: 80.5, unit: "BPM", color: "#e0f7fa" }, // Light Teal
    "BP": { value: 120.25, unit: "mmHg", color: "#ffebee" }, // Light Red
    "Cholesterol": { value: 220, unit: "mg/dL", color: "#f1f8e9" }, // Light Green
    "Temperature": { value: 31.5, unit: "°C", color: "#e3f2fd" }, // Light Blue
  };

  const healthStatisticsData = {
    JAN: 70,
    FEB: 48.5,
    MAR: 63,
    APR: 58,
    MAY: 73,
    JUN: 65,
    JUL: 53.5,
    AUG: 82,
    SEP: 59,
    OCT: 51,
    NOV: 61.5,
    DEC: 70,
  };

  // Transform object into array of objects for the chart
  const chartData = Object.entries(healthStatisticsData).map(([month, value]) => ({
    name: month,
    value,
  }));

  return (
    <div className="weight-main">
      <div className="container">
        <h2>Daily Readings</h2>
        <div className="daily-readings">
          {Object.entries(dailyReadings).map(([key, value]) => (
            <div
              key={key}
              className="reading-card"
              style={{ backgroundColor: value.color }}
            >
              <div className="reading-title">{key}</div>
              <div className="reading-value">
                {value.value} {value.unit}
              </div>
            </div>
          ))}
        </div>

        <div className="health-statistics">
          <h2 className="statistics-title">Health Statistics</h2>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart
              data={chartData}
              margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="value" stroke="#8884d8" activeDot={{ r: 8 }} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
      <Footer/>
    </div>
  );
};
