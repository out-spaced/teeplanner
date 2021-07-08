import React from 'react';


function GuestItem(  ) {
  return (
    <div>
      <span>
        Guest email:
      </span>
      <span>
        <input className="form-control" type="text" defaultValue="a@example.com"/>
      </span>
    </div>
  )
}

export default GuestItem