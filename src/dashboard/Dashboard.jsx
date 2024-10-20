import React from 'react'
import { PieChart } from '@mui/x-charts/PieChart';
import { BarChart } from '@mui/x-charts/BarChart';
import { LineChart } from '@mui/x-charts/LineChart';


const data = [
    { label: 'Recycling', value: 150, color: '#1E5128' }, // Dark green
    { label: 'Planting Trees', value: 100, color: '#191A19' }, // Almost black
    { label: 'Energy Conservation', value: 200, color: '#4E9F3D' }, // Medium green
    { label: 'Water Conservation', value: 80, color: '#D8E9A8' }, // Light green
];

const xLabels = [
    'Jan', 'Feb', 'Mar', 'Apr', 'May'
]

const erg = [30, 25, 28, 35, 32]

function Dashboard() {
    return (
        <div className='flex justify-around mb-3 bg-yellow-50'>
            <div className='flex flex-col mt-10 w-1/2 items-center border-gray-500 shadow-lg '>
                <PieChart
                    series={[
                        {
                            startAngle: -90,
                            endAngle: 90,
                            data,
                        },
                    ]}
                    height={350}
                    slotProps={{
                        legend: {
                            hidden: false,
                        },  // This hides the legend
                    }}
                />

                <BarChart
                    xAxis={[{ scaleType: 'band', data: ['group A', 'group B', 'group C'] }]}
                    series={[{ data: [4, 3, 5], color: '#4E9F3D' }, { data: [1, 6, 3], color: '#1E5128' }, { data: [2, 5, 6], color: '#D8E9A8' }]}
                    width={500}
                    height={300}
                />
            </div>
            <div className='border-gray-500 shadow-lg mt-10'>
                <LineChart
                    width={600}
                    height={700}
                    series={[
                        {
                            data: erg,
                            label: 'Progress towards Net-Zero Carbon',
                            yAxisId: 'leftAxisId',
                            color: '#4E9F3D' // Custom color for the line (Medium green) 
                        },
                    ]}
                    xAxis={[{ scaleType: 'point', data: xLabels }]}
                    yAxis={[{ id: 'leftAxisId' }, { id: 'rightAxisId' }]}
                    rightAxis="rightAxisId"
                />
            </div>
        </div>
    );
}

export default Dashboard