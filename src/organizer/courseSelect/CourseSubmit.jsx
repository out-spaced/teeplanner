import React from 'react';

function CourseSubmit( {ns} ) {
  return (
    <button onClick={ns} type="button">
      Submit
    </button>
  )
}

export default CourseSubmit

// GuestSubmit.propTypes = {
//   ns: React.propTypes.function
// }