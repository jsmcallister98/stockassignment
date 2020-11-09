import React, { useState } from 'react';
import Plot from 'react-plotly.js';
import './Chart.css';


function Chart ({ chartVals }) {

    const [chartValues, setchartValues] = useState({chartXValues: [], chartYValues: []})

    const file = JSON.parse(chartVals)
    console.log(file)

    const parseJson = (file) => {
        let chartXValuesFunc = []
        let chartYValuesFunc = []
        file.map((stock) => {
            chartXValuesFunc.push(stock.date)
            chartYValuesFunc.push(stock.close)
        })
        setchartValues({
            chartXValues: chartXValuesFunc,
            chartYValues: chartYValuesFunc
        });
    }

    const testFunc = () => {
        parseJson(file)
    }

    return (
        <>
            <button className='display' onClick={testFunc}>Display Data</button>
            <div className='plot'>
                <Plot
                data={[
                {
                    x: chartValues.chartXValues,
                    y: chartValues.chartYValues,
                    type: 'scatter',
                    mode: 'lines+markers',
                    marker: {color: 'blue'},
                }
                ]}
                layout={ {autosize: true, plot_bgcolor: 'white', paper_bgcolor: 'white'} }
                config={ {responsive: true} }
                style={ {width: '100%', height: '550px'} }
                />
            </div>
        </>
    )
}

export default Chart;
