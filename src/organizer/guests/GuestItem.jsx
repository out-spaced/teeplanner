import React from 'react';


function GuestItem(  ) {
  return (
    <div>
      <span>
        Guest phone number
      </span>
      <span>
        <input className="form-control" type="text" defaultValue="(123) 456-7890"/>
      </span>
    </div>
  )
}

export default GuestItem