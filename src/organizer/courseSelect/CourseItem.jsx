import React from 'react';

function CourseItem( {ns} ) {
  return (
    <div className="row-default">
      <div>
       <img alt="course" src="http://placecorgi.com/250" />
      </div>
      <div className="column-default" onClick={ns}>
        <div>
          <span>
            Course Name
          </span>
        </div>
        <div>
          <span>
            Course Location
          </span>
        </div>
      </div>
    </div>
  );
}

export default CourseItem

// CourseItem.propTypes = {
//   ns: React.propTypes.function
// }