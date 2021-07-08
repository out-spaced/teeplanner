import React from 'react';

function CourseItem( {ns} ) {
  return (
    <div>
      <div>
       <img alt="course" src="http://placecorgi.com/250" />
      </div>
      <div onClick={ns}>
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
  );
}

export default CourseItem

// CourseItem.propTypes = {
//   ns: React.propTypes.function
// }