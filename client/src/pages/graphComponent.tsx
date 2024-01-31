import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import axios from 'axios';
import { ChartOptions } from 'chart.js';
import { Chart, registerables } from 'chart.js';
import 'chartjs-adapter-date-fns'; // Import the date adapter
Chart.register(...registerables);

interface GraphDataEntry {
  Timestamp: string;
  profit: number;
}

const GraphComponent = () => {
  const [graphData, setGraphData] = useState<GraphDataEntry[] | null>(null);
  const [minTimestamp, setMinTimestamp] = useState<number | null>(null); // Use number for timestamp

  useEffect(() => {
  axios.get<GraphDataEntry[]>('http://localhost:5000/api/dataset')
    .then(response => {
      const parsedData = response.data.map(entry => {
        const [month, year] = entry.Timestamp.split('-'); // Split the date string
        // Create a new Date object with the parsed month and year (day is set to 1)
        return new Date(parseInt(year), parseInt(month) - 1, 1); 
      });
      const timestamps = parsedData.map(date => date.getTime()); // Convert to timestamps
      const minTimestamp = Math.min(...timestamps); // Find minimum timestamp
      setMinTimestamp(minTimestamp);
      setGraphData(response.data);
    })
    .catch(error => console.error('Error fetching data:', error));
}, []);

const chartData = {
  labels: graphData ? graphData.map((entry) => {
    const [month, year] = entry.Timestamp.split('-'); // Split the date string
    return new Date(parseInt(year), parseInt(month) - 1, 1); // Create Date object
  }) : [],
  datasets: [
    {
      label: 'Profit Percentage',
      data: graphData ? graphData.map((entry) => entry.profit) : [],
      fill: true,
      borderColor: 'rgba(75,192,192,1)',
    },
  ],
};

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: true,
    scales: {
      x: {
        type: 'timeseries', // Set x-axis type to timeseries
        time: {
          parser: 'YYYY', // Specify the format of the timestamp
          // tooltipFormat: 'll HH:mm', // Format tooltip
          min: minTimestamp, // Set minimum timestamp
        },
        position: 'bottom',
        reverse: false,
      },
      y: {
        type: 'linear',
        position: 'left',
        reverse: false,
      },
    },
  } as ChartOptions<'line'>;

  return (
    <div>
      {graphData ? (
        <div>
          <h2>Growth Graph</h2>
          <Line data={chartData} options={chartOptions} />
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default GraphComponent;