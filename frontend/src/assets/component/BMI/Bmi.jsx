import React, { useState } from 'react'
import './bmi.css'
import { Footer } from '../footer/Footer';
// import './BMICalculator.css';


export const Bmi = () => {
  const [age, setAge] = useState(30);
  const [weight, setWeight] = useState(78);
  const [height, setHeight] = useState(175);
  const [gender, setGender] = useState('male');
  const [bmi, setBmi] = useState(null);

  const calculateBMI = () => {
    const heightInMeters = height / 100;
    const bmiValue = weight / (heightInMeters * heightInMeters);
    setBmi(bmiValue.toFixed(2));
  };

  const getBMIStatus = (bmi) => {
    if (bmi < 18.5) return 'Underweight';
    if (bmi >= 18.5 && bmi <= 24.9) return 'Normal BMI';
    if (bmi >= 25 && bmi <= 29.9) return 'Overweight';
    if (bmi >= 30) return 'Obesity';
    return '';
  };

  return (
    <div className='bmi-main'>
    
    
      <div className="bmi-container">
      <div className="card">
        <h2 className="title">BMI CALCULATOR</h2>

        <div className="input-group">
          <div className="input-block">
            <p>Age</p>
            <div className="value">{age}</div>
            <div className="button-group">
              <button onClick={() => setAge(age - 1)}>-</button>
              <button onClick={() => setAge(age + 1)}>+</button>
            </div>
          </div>
          <div className="input-block">
            <p>Weight (KG)</p>
            <div className="value">{weight}</div>
            <div className="button-group">
              <button onClick={() => setWeight(weight - 1)}>-</button>
              <button onClick={() => setWeight(weight + 1)}>+</button>
            </div>
          </div>
        </div>

        <div className="slider-container">
          <p>Height (CM)</p>
          <input
            type="range"
            min="50"
            max="300"
            value={height}
            onChange={(e) => setHeight(Number(e.target.value))}
            className="range-slider"
          />
          <div className="value">{height}</div>
        </div>

        <div className="gender-select">
          <button
            className={`gender-button ${gender === 'male' ? 'active' : ''}`}
            onClick={() => setGender('male')}
          >
            Male
          </button>
          <button
            className={`gender-button ${gender === 'female' ? 'active' : ''}`}
            onClick={() => setGender('female')}
          >
            Female
          </button>
        </div>

        <button className="calculate-button" onClick={calculateBMI}>
          Calculate BMI
        </button>

        {bmi && (
          <div className="result-box">
            <p className="result-title">BMI Results</p>
            <div className="bmi-value">{bmi}</div>
            <p className="result-description">{getBMIStatus(bmi)}</p>
            <div className="bmi-info">
              <p>Underweight: BMI &lt; 18.5</p>
              <p>Normal weight: 18.5 – 24.9</p>
              <p>Overweight: 25 – 29.9</p>
              <p>Obesity: 30 – 40</p>
            </div>
          </div>
        )}
      </div>
    </div>
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
<Footer/>
    
    </div>















  )
}
