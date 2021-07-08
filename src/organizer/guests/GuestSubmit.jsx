import React from 'react';


function GuestSubmit( {ns} ) {
  return (
    <div className="row-default">
      <button className="btn btn-primary" onClick={ns} type="button">
        Submit
      </button>
    </div>
  )
}

export default GuestSubmit

// GuestSubmit.propTypes = {
//   ns: React.propTypes.function
// }