import React from 'react';
import ChartBar from "@components/Chart/ChartBar"


export default function Chart(props) {
    const dataPointValues = props.dataPoints.map(dataPoint => dataPoint.value) 
    const totalMaxValue = Math.max(...dataPointValues)


    return (
        <div className="p-2 mb-4 rounded-lg bg-purple-400 flex justify-around items-end text-center h-43">
            {props.dataPoints.map((dataPoint) => 
            <ChartBar
            key={dataPoint.label}
            value={dataPoint.value}
            maxValue={totalMaxValue}
            label={dataPoint.label}>
            </ChartBar>  
            )}
        </div>
    );
}