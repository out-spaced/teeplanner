import React from 'react';

function TimeDateSubmit({ns}) {

  return (
    <div className="row-default">
      <button  className="btn btn-primary" onClick={ns} type="button">
        Submit
      </button>
    </div>
  )
}

export default TimeDateSubmit

// TimeDateSubmit.propTypes = {
//   ns: React.propTypes.function
// }