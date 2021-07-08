import React from 'react';

function BackToHome({bh}) {


  return (
    <div className="row-default">
      <button className="btn btn-primary" onClick={bh}>
        Back to Home
      </button>
    </div>
  )
}

export default BackToHome