import React from 'react';

function StatusBackHome({bh}) {


  return (
    <div className="btn-container row-default">
      <button className="btn btn-primary" onClick={bh}>
        Back to Home
      </button>
    </div>
  )
}

export default StatusBackHome