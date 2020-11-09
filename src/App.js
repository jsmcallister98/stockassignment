import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Chart from './components/Chart'


function App() {
  const [chartValues, setchartValues] = useState(null)

  return (
    <>
        <Navbar chartValuesP={chartValues => setchartValues(chartValues)}/>
        <div className="content">
          <div className="upload">
            Upload Your File To Visulize Growth
          </div>
          <div className="chart">
            <Chart chartVals={chartValues}></Chart>
          </div>
        </div>
    </>
  );
}

export default App;
