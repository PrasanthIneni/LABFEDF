import React, { useState } from "react";

// Predefined event data
const events = [
  { date: "2025-10-15", title: "React Lab", description: "Work on interactive calendar task." },
  { date: "2025-10-18", title: "Hackathon", description: "Participate in coding hackathon." },
  { date: "2025-10-22", title: "Exam", description: "Database Systems internal test." }
];

const Calendar = () => {
  const today = new Date();
  const [selectedDate, setSelectedDate] = useState(null);

  // Get current month & year
  const year = today.getFullYear();
  const month = today.getMonth();

  // Number of days in the month
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  // Handle date click
  const handleDateClick = (day) => {
    const clickedDate = `${year}-${String(month + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
    setSelectedDate(clickedDate);
  };

  // Find events for selected date
  const filteredEvents = events.filter((event) => event.date === selectedDate);

  return (
    <div style={{ textAlign: "center", fontFamily: "Arial" }}>
      <h2>
        {today.toLocaleString("default", { month: "long" })} {year}
      </h2>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(7, 1fr)", gap: "5px" }}>
        {[...Array(daysInMonth)].map((_, i) => {
          const day = i + 1;
          const dateStr = `${year}-${String(month + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;

          return (
            <button
              key={day}
              onClick={() => handleDateClick(day)}
              style={{
                padding: "10px",
                border: "1px solid #ccc",
                borderRadius: "5px",
                backgroundColor: selectedDate === dateStr ? "#4caf50" : "white",
                color: selectedDate === dateStr ? "white" : "black",
                cursor: "pointer"
              }}
            >
              {day}
            </button>
          );
        })}
      </div>

      <div style={{ marginTop: "20px" }}>
        <h3>Events on {selectedDate || "..."}</h3>
        {filteredEvents.length > 0 ? (
          filteredEvents.map((event, index) => (
            <div key={index} style={{ border: "1px solid #ddd", padding: "10px", margin: "10px auto", width: "50%" }}>
              <h4>{event.title}</h4>
              <p>{event.description}</p>
            </div>
          ))
        ) : (
          selectedDate && <p>No events for this date.</p>
        )}
      </div>
    </div>
  );
};

export default Calendar;
