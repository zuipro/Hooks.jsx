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

  // Filter upcoming events for the remaining days of the month
  const upcomingEvents = Object.entries(events)
    .filter(([date]) => parseInt(date) > new Date().getDate())
    .sort(([a], [b]) => a - b);

  return (
    <div style={styles.container}>
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
        <div id="eventDetails" style={styles.eventDetails}>
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

      {/* Upcoming Events Section */}
      <div id="upcomingEvents" style={styles.upcomingEvents}>
        <h2>Upcoming Events</h2>
        {upcomingEvents.length > 0 ? (
          <ul>
            {upcomingEvents.map(([date, eventList], index) => (
              <li key={index}>
                <strong>{date}/{new Date().getMonth() + 1}/{new Date().getFullYear()}:</strong>
                <ul>
                  {eventList.map((event, i) => (
                    <li key={i}>{event}</li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        ) : (
          <p>No upcoming events</p>
        )}
      </div>
    </div>
  );
};

// Basic styles for the calendar and upcoming events
const styles = {
  container: {
    display: 'grid',
    gridTemplateColumns: '2fr 1fr', // Two columns: calendar and upcoming events
    gap: '30px',
    padding: '20px',
    maxWidth: '1000px',
    margin: '0 auto',
  },
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
  eventDetails: {
    marginTop: '20px',
  },
  upcomingEvents: {
    backgroundColor: '#f4f4f4',
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
  },
};

export default Calendar;