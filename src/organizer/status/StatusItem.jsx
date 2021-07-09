import React from 'react';


function StatusItem({name, status}) {
  return (
    <div className="status-item-container">
      <span>
        {name}
      </span>
      <span>
        {status ? 'Confirmed' : 'Uncomfirmed'}
      </span>
    </div>
  )
}

export default StatusItem