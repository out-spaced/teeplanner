import React from 'react';

function TimeOpenings() {
  const num = Math.floor(Math.random() * 10) + 4
  return (
    <span className="guest-time-text">
      {num} Openings
    </span>
  )
}

export default TimeOpenings