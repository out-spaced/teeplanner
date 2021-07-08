import React from 'react';

function CourseSubmit( {ns} ) {
  return (
    <button className="btn btn-primary" onClick={ns} type="button">
      Submit
    </button>
  )
}

export default CourseSubmit

// GuestSubmit.propTypes = {
//   ns: React.propTypes.function
// }