import React from 'react';


function GuestNumber( ) {
  return (
    <div className="row-default">
      <div>
        <span>
          Minimum number to book reservation:
        </span>
      </div>
      <div>
        <select defaultValue="0" className="custom-select">
          <option value="0" disabled>
            Choose...
          </option>
          <option value="1">
            1
          </option>
          <option value="2">
            2
          </option>
          <option value="3">
            3
          </option>
          <option value="4">
            4
          </option>
        </select>
      </div>
    </div>
  )
}

export default GuestNumber