import React, { useState } from 'react';
import { motion } from 'framer-motion';

const AchievementSection = () => {
  const [achievements, setAchievements] = useState(1); // Start with 1 unlocked
  const [selectedAchievement, setSelectedAchievement] = useState(null); // For popup modal

  const plantAnimation = {
    hidden: { scale: 0, opacity: 0 },
    visible: { scale: 1, opacity: 1, transition: { duration: 1 } }
  };

  const achievementData = [
    {
      level: 1,
      title: 'Saving CO2',
      description: 'You have reduced your CO2 emissions for 10 consecutive days!',
      benefits: 'Reducing CO2 helps combat climate change and promotes cleaner air.',
    },
    {
      level: 2,
      title: 'Planting a Tree Daily',
      description: 'You planted a tree every day for a week!',
      benefits: 'Planting trees increases biodiversity, cleans the air, and provides habitat for wildlife.',
    },
    {
      level: 3,
      title: 'Water Conservation',
      description: 'You saved 500 liters of water this month!',
      benefits: 'Conserving water helps protect freshwater ecosystems and reduces water shortages.',
    },
    {
      level: 4,
      title: 'Energy Saver',
      description: 'You reduced your energy consumption by 20% this year!',
      benefits: 'Reducing energy consumption lowers your carbon footprint and saves you money.',
    },
  ];

  const openModal = (achievement) => {
    setSelectedAchievement(achievement);
  };

  const closeModal = () => {
    setSelectedAchievement(null);
  };

  return (
    <div className="achievement-section" style={{ backgroundColor: '#191A19', color: '#D8E9A8', padding: '20px', minHeight: '100vh' }}>
      
      {/* Header Section */}
      <header style={{ textAlign: 'center', marginBottom: '40px' }}>
        <h1 style={{ fontSize: '2.5rem', color: '#4E9F3D' }}>Achievement Garden</h1>
        <p style={{ fontSize: '1.2rem' }}>Grow your plants as you unlock new achievements!</p>
      </header>

      {/* Achievements unlocked info */}
      <h2 style={{ textAlign: 'center', color: '#D8E9A8' }}>Achievements unlocked: {achievements}</h2>

      {/* Container for levels and green line */}
      <div className="levels-container" style={{ position: 'relative', height: '250px', width: '100%', marginTop: '30px', overflowX: 'hidden' }}>
        {/* Green Line across the screen */}
        <div
          className="green-line"
          style={{ position: 'absolute', height: '5px', backgroundColor: '#4E9F3D', width: '100%', top: '50%' }} // Green line is centered at 50%
        ></div>

        {/* Wrapper for farmer and plant */}
        <div className="farmer-plant-container" style={{ position: 'relative', height: '100%', width: '1244px', margin: '0 auto', paddingLeft: '50px' }}>
          {/* Farmer Image (moving horizontally only) */}
          <motion.div
            className="farmer"
            animate={{ x: `${(achievements - 1) * 400}%` }} // Move only on the x-axis
            transition={{ type: 'spring', stiffness: 50 }}
            style={{ position: 'absolute', bottom: '60%', zIndex: 2 }} // Ensure the girl appears above the plants with z-index
          >
            <img
              src="/achievement_images/Untitled.png"
              alt="Girl watering plants"
              style={{ width: '80px', height: 'auto' }} // Reduce the size of the farmer
            />
          </motion.div>

          {/* Achievement Levels (positions for plants and medals) */}
          {[1, 2, 3, 4].map((level) => (
            <div
              key={level}
              className="level"
              style={{ position: 'absolute', bottom: '60%', left: `${(level - 1) * 25}%`, textAlign: 'center', zIndex: 1 }} // Place plants and medals above the green line, lower zIndex
            >
              {/* Plant Growth */}
              <motion.div
                className="plant"
                variants={plantAnimation}
                initial="hidden"
                animate={achievements >= level ? 'visible' : 'hidden'}
              >
                <img
                  src={achievements >= level ? "/achievement_images/watered_plant.png" : "/achievement_images/soil.jpg"}
                  alt="Plant"
                  style={{ width: '80px', height: 'auto' }} // Adjust plant size
                />
              </motion.div>

              {/* Medal that appears above the plant when unlocked */}
              {achievements >= level && (
                <motion.div
                  className="medal"
                  style={{ marginTop: '-30px' }} // Position medal above the plant
                  animate={{ scale: 1.5, opacity: 1 }}
                  transition={{ duration: 1 }}
                >
                  🏅 {/* Medal emoji or image */}
                </motion.div>
              )}
            </div>
          ))}

          {/* Level Labels (positions below the green line) */}
          {[1, 2, 3, 4].map((level) => (
            <div
              key={level}
              className="level-label"
              style={{ position: 'absolute', top: '60%', left: `${(level - 1) * 25}%`, textAlign: 'center', color: '#D8E9A8' }} // Place labels below the green line
            >
              {achievements >= level ? `LEVEL ${level} unlocked!!` : `LEVEL ${level} locked`}
            </div>
          ))}
        </div>
      </div>

      {/* Button to unlock next level */}
      <div style={{ textAlign: 'center', margin: '20px' }}>
        <button
          onClick={() => setAchievements((prev) => (prev < 4 ? prev + 1 : prev))}
          style={{
            padding: '10px 20px',
            backgroundColor: '#1E5128',
            color: '#D8E9A8',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            fontSize: '1rem',
          }}
        >
          Unlock Next Level
        </button>
      </div>

      {/* Achievement Cards Section */}
      <div className="achievement-cards" style={{ display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap', marginTop: '50px' }}>
        {achievementData.map((achievement) => (
          <div
            key={achievement.level}
            className="achievement-card"
            style={{
              width: '200px',
              backgroundColor: achievements >= achievement.level ? '#4E9F3D' : '#1E5128',
              color: '#D8E9A8',
              padding: '20px',
              borderRadius: '10px',
              textAlign: 'center',
              boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
              border: '2px solid transparent',
              transition: 'all 0.3s ease-in-out',
              cursor: 'pointer'
            }}
            onMouseEnter={(e) => (e.currentTarget.style.border = '2px solid #FFD700')}
            onMouseLeave={(e) => (e.currentTarget.style.border = '2px solid transparent')}
            onClick={() => openModal(achievement)} // Open modal on click
          >
            <h3>{achievement.title}</h3>
            <p>{achievement.description}</p>
          </div>
        ))}
      </div>

      {/* Modal Popup for Achievement Benefits */}
      {selectedAchievement && (
        <div className="modal" style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.7)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
          <div style={{
            backgroundColor: '#4E9F3D',
            padding: '30px',
            borderRadius: '10px',
            textAlign: 'center',
            color: '#D8E9A8',
            width: '400px',
          }}>
            <h2>{selectedAchievement.title}</h2>
            <p>{selectedAchievement.benefits}</p>
            <button onClick={closeModal} style={{
              marginTop: '20px',
              padding: '10px 20px',
              backgroundColor: '#1E5128',
              color: '#D8E9A8',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
            }}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AchievementSection;
