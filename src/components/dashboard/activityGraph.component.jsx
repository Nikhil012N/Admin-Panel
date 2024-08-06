import React,{memo} from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';


ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const data = {
  labels: ['5', '9', '11', '13', '16', '17', '21', '27'],
  datasets: [
    {
      label: 'Activity Set 1',
      data: [30, 50, 70, 100, 110, 140, 120, 150,144,78],
      backgroundColor: 'rgba(82, 78, 183, 1)', 
      borderColor: 'rgba(82, 78, 183, 1)',
      borderWidth: 1,
      borderRadius: 15,
      barPercentage: 0.7,
      
    },
    {
      label: 'Activity Set 2',
      data: [25, 40, 60, 90, 105, 130, 110, 140,130,120],
      backgroundColor: 'rgba(82, 78, 183, 1)', 
      borderColor: 'rgba(82, 78, 183,1)',
      borderWidth: 1,
      borderRadius: 15,
      barPercentage: 0.7,
    },
   
  ],
};

const options = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
  
  },
  scales: {
    x: {
      ticks: { color: 'white' },
      stacked: false,

    },
    y: {
      beginAtZero: true,
      max: 150,
      ticks: {
        color: 'white',
        stepSize: 50,
        callback: function (value) {
console.log(value)
          return value/10  + 'k';
        },
      
      },
      maxTicksLimit: 4,
      grid: { color: 'rgba(255, 255, 255, 0.1)' },
    },
  },
};

const ActivityGraph = () => {
  return (
    <div className="w-full mx-auto  bg-neutral-900  p-6 rounded-lg h-72">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-white text-2xl">Activity</h2>
        <select className="bg-gray-600  text-white py-2 px-4 rounded-2xl">
          <option>Weekly</option>
          <option>Monthly</option>
        </select>
      </div>
      <div className="h-48">
      <Bar data={data} options={options} style={{width:"100% !important"}} />
      </div>
    </div>
  );
};

export default memo(ActivityGraph);
