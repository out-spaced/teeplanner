import React from 'react';
import CourseItem from './CourseItem';
import CourseSubmit from './CourseSubmit';

function CourseSelect( {ns} ) {

  return (
    <div className="column-default">
      <div className="column-default">
        <CourseItem />
        <CourseItem />
        <CourseItem />
      </div>
      <div className="row-default">
        <CourseSubmit ns={ns} />
      </div>
    </div>
  );
}

// CourseSelect.propTypes = {
//   ns: React.PropTypes.function
// }

export default CourseSelect

