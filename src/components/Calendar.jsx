import React, { useState, useEffect } from 'react';
import './Calendar.css';


const Calendar = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [events, setEvents] = useState({});
  const [newEvent, setNewEvent] = useState('');

  // Generate days for the current month (e.g., October 2024)
  const daysInMonth = Array.from({ length: 31 }, (_, i) => i + 1);

  // Load events from local storage when the component mounts
  useEffect(() => {
    const savedEvents = JSON.parse(localStorage.getItem('events')) || {};
    setEvents(savedEvents);
  }, []);

  // Save events to local storage whenever they change
  useEffect(() => {
    localStorage.setItem('events', JSON.stringify(events));
  }, [events]);

  // Handle selecting a date
  const handleDateClick = (day) => {
    setSelectedDate(day);
  };

  // Handle adding a new event
  const handleAddEvent = (e) => {
    e.preventDefault();
    if (newEvent.trim() === '') return;

    const updatedEvents = {
      ...events,
      [selectedDate]: [...(events[selectedDate] || []), newEvent],
    };

    setEvents(updatedEvents);
    setNewEvent(''); // Clear input field
  };

  return (
    <div>
      {/* Calendar Grid */}
      <div id="calendar" style={styles.calendar}>
        {daysInMonth.map((day) => (
          <div
            key={day}
            style={styles.day}
            onClick={() => handleDateClick(day)}
          >
            {day}
          </div>
        ))}
      </div>

      {/* Event Details Section */}
      {selectedDate && (
        <div id="eventDetails">
          <h2>
            Events for {selectedDate}/{new Date().getMonth() + 1}/{new Date().getFullYear()}
          </h2>
          <ul>
            {(events[selectedDate] || []).map((event, index) => (
              <li key={index}>{event}</li>
            ))}
          </ul>
          <form onSubmit={handleAddEvent}>
            <input
              type="text"
              value={newEvent}
              onChange={(e) => setNewEvent(e.target.value)}
              placeholder="Add Event"
            />
            <button type="submit">Add Event</button>
          </form>
        </div>
      )}
    </div>
  );
};

// Basic styles for the calendar
const styles = {
  calendar: {
    display: 'grid',
    gridTemplateColumns: 'repeat(7, 1fr)',
    gap: '10px',
    margin: '20px',
  },
  day: {
    padding: '20px',
    border: '1px solid #ccc',
    textAlign: 'center',
    cursor: 'pointer',
  },
};

export default Calendar;
