import React from 'react';

function CourseItem( {ns} ) {
  return (
    <div className="course-container row-default">
      <div className="course-image-container">
       <img alt="course" src="http://placecorgi.com/100" />
      </div>
      <div className="column-default">
        <div className="row-default">
          <span>
            Course Name
          </span>
        </div>
        <div className="row-default">
          <span>
            Course Location
          </span>
        </div>
      </div>
      <div className="row-default course-radio">
        <input className="form-check-input" type="radio" name="radioNoLabel" id="radioNoLabel1" value="" aria-label="..." />
      </div>
    </div>
  );
}

export default CourseItem

// CourseItem.propTypes = {
//   ns: React.propTypes.function
// }