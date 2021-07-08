import React from 'react';


function GuestSubmit( {ns} ) {
  return (
    <div>
      <button onClick={ns} type="button">
        Submit
      </button>
    </div>
  )
}

export default GuestSubmit

GuestSubmit.propTypes = {
  ns: React.propTypes.function
}