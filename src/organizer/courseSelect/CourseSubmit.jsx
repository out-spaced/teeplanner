import React from 'react';

function CourseSubmit( {ns} ) {
  return (
    <button className="btn btn-primary" onClick={ns} type="button">
      Submit
    </button>
  )
}

export default CourseSubmit

// CourseSubmit.propTypes = {
//   ns: React.PropTypes.function
// }