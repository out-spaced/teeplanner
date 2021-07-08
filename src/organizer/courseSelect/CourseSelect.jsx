import React from 'react';
import CourseItem from './CourseItem';

function CourseSelect( {ns} ) {

  return (
    <div>
      <CourseItem ns={ns} />
    </div>
  );
}

export default CourseSelect

// CourseSelect.propTypes = {
//   ns: React.propTypes.function
// }