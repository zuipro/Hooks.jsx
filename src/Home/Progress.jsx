import React, { useState, useEffect, useRef } from 'react';
import './Progress.css';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import { gsap } from 'gsap';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const generateRandomName = () => {
  const firstNames = ['JOHN', 'EMMA', 'MICHAEL', 'SOPHIA', 'WILLIAM', 'OLIVIA', 'JAMES', 'AVA', 'ROBERT', 'ISABELLA'];
  const lastNames = ['SMITH', 'JOHNSON', 'WILLIAMS', 'BROWN', 'JONES', 'GARCIA', 'MILLER', 'DAVIS', 'RODRIGUEZ', 'MARTINEZ'];
  return `${firstNames[Math.floor(Math.random() * firstNames.length)]} ${lastNames[Math.floor(Math.random() * lastNames.length)]}`;
};

const ProgressTracker = () => {
  console.log("ProgressTracker is rendering");
  const [progressData, setProgressData] = useState({
    energy: 0,
    water: 0,
    waste: 0
  });

  const [chartData, setChartData] = useState({
    labels: ['Energy', 'Water', 'Waste'],
    datasets: [
      {
        label: 'Sustainability Contributions',
        data: [0, 0, 0],
        backgroundColor: ['rgba(75, 192, 192, 0.2)', 'rgba(255, 159, 64, 0.2)', 'rgba(153, 102, 255, 0.2)'],
        borderColor: ['rgba(75, 192, 192, 1)', 'rgba(255, 159, 64, 1)', 'rgba(153, 102, 255, 1)'],
        borderWidth: 1
      }
    ]
  });

  const [leaderboard, setLeaderboard] = useState([]);

  const progressTrackerRef = useRef(null);

  useEffect(() => {
    // Set progress values once during load time
    const newProgressData = {
      energy: Math.floor(Math.random() * 100),
      water: Math.floor(Math.random() * 100),
      waste: Math.floor(Math.random() * 100)
    };

    setProgressData(newProgressData);
    setChartData(prevChartData => ({
      ...prevChartData,
      datasets: [{
        ...prevChartData.datasets[0],
        data: [newProgressData.energy, newProgressData.water, newProgressData.waste]
      }]
    }));

    // Generate leaderboard
    const newLeaderboard = Array.from({ length: 5 }, () => ({
      name: generateRandomName(),
      energy: Math.floor(Math.random() * 100),
      water: Math.floor(Math.random() * 100),
      waste: Math.floor(Math.random() * 100)
    }));

    // Add user to leaderboard
    newLeaderboard.push({
      name: 'YOU',
      energy: newProgressData.energy,
      water: newProgressData.water,
      waste: newProgressData.waste
    });

    // Sort leaderboard by total score
    newLeaderboard.sort((a, b) => (b.energy + b.water + b.waste) - (a.energy + a.water + a.waste));

    setLeaderboard(newLeaderboard);
  }, []);

  useEffect(() => {
    gsap.from("h2", {
      x: -100,
      duration: 1,
      opacity: 0,
      ease: "power2.out"
    });
  }, []);

  return (
    <div className='wrapper'>
    <div className="progress-tracker" ref={progressTrackerRef}>
      <h2 style={{color:'black'}}></h2>
      <p>YOUR SUSTAINABILITY SCORE</p>

      <div className="progress-bars">
        <div className="progress-item">
          <label>ENERGY EFFICIENCY</label>
          <div className="progress-bar">
            <div className="progress" style={{ width: `${progressData.energy}%` }}>
              {progressData.energy}%
            </div>
          </div>
        </div>

        <div className="progress-item">
          <label>WATER CONSERVATION</label>
          <div className="progress-bar">
            <div className="progress" style={{ width: `${progressData.water}%` }}>
              {progressData.water}%
            </div>
          </div>
        </div>

        <div className="progress-item">
          <label>WASTE REDUCTION</label>
          <div className="progress-bar">
            <div className="progress" style={{ width: `${progressData.waste}%` }}>
              {progressData.waste}%
            </div>
          </div>
        </div>
      </div>

      <div className="chart-container">
        <Line data={chartData} />
      </div>

      <div className="leaderboard">
        <h3>LEADERBOARD</h3>
        <table>
          <thead>
            <tr>
              <th>RANK</th>
              <th>NAME</th>
              <th>ENERGY</th>
              <th>WATER</th>
              <th>WASTE</th>
              <th>TOTAL</th>
            </tr>
          </thead>
          <tbody>
            {leaderboard.map((player, index) => (
              <tr key={index} className={player.name === 'YOU' ? 'highlight' : ''}>
                <td>{index + 1}</td>
                <td>{player.name}</td>
                <td>{player.energy}</td>
                <td>{player.water}</td>
                <td>{player.waste}</td>
                <td>{player.energy + player.water + player.waste}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    </div>
  );
};

export default ProgressTracker;
