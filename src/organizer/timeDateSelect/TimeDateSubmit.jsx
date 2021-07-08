import React from 'react';

function TimeDateSubmit({ns}) {

  return (
    <div>
      <button onClick={ns} type="button">
        Submit
      </button>
    </div>
  )
}

export default TimeDateSubmit

// TimeDateSubmit.propTypes = {
//   ns: React.propTypes.function
// }