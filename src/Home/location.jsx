import React from 'react';
import { Box, Tooltip, Typography } from '@mui/material'; // Import your image here


const locations = [
  { state: 'California', info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi a illo perspiciatis laudantium architecto doloremque, corporis aut quo. Reprehenderit accusantium voluptate quasi labore quos veniam vel beatae minima voluptatum ex?' },
  { state: 'Texas', info: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi a illo perspiciatis laudantium architecto doloremque, corporis aut quo. Reprehenderit accusantium voluptate quasi labore quos veniam vel beatae minima voluptatum ex?' },
  { state: 'Florida', info: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris. Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi a illo perspiciatis laudantium architecto doloremque, corporis aut quo. Reprehenderit accusantium voluptate quasi labore quos veniam vel beatae minima voluptatum ex?' },
  { state: 'New York', info: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi a illo perspiciatis laudantium architecto doloremque, corporis aut quo. Reprehenderit accusantium voluptate quasi labore quos veniam vel beatae minima voluptatum ex?' }
];

const LocationTimeline = () => {
  return (
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      width="100%"
      maxWidth="800px"
      position="relative"
      mt={4}
      mb={4}
      ml={25}
    >
      {/* Line connecting the locations */}
      <Box
        position="absolute"
        top="50%"
        left="0"
        right="0"
        height="2px"
        bgcolor="black"
        zIndex={1}
      />

      {/* Mapping through locations array to create each location */}
      {locations.map((location, index) => (
        <Box key={index} position="relative" textAlign="center" zIndex={2}>
          {/* Tooltip that shows info on hover */}
          <Tooltip title={location.info} arrow>
            <Box
              sx={{
                width: '40px',
                height: '40px',
                cursor: 'pointer',
                position: 'relative',
                zIndex: 3
              }}
            >
              {/* Use the uploaded image as the location icon */}
            <img
            src='./dashboard_image/loc.jpg'
            alt={`${location.state} location icon`}  // Corrected this line
            style={{ width: '100%', height: '100%' }}
            />
            </Box>
          </Tooltip>

          {/* State name below the icon */}
          <Typography variant="body1" sx={{ marginTop: '8px' }}>
            {location.state}
          </Typography>
        </Box>
      ))}
    </Box>
  );
};

export default LocationTimeline;