import React, { useState, useEffect } from 'react';
import patientsData from './patients.json';
import './App.css'; // Import the CSS file

const App = () => {
  const [patients, setPatients] = useState([]);

  useEffect(() => {
    // Fix: Set the patients data here
  }, []);

  if (patients.length === 0) {
    return <div className="loading">Loading patients...</div>;
  }

  return (
    <div className="app-container">
      <h1 className="title">{/* Add Title*/}</h1>
      <div className="patients-container">
        {/* Fix: Map over the patients array and display each patient's details */}
      </div>
    </div>
  );
};

export default App;
