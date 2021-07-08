import React from 'react';


function CourseItem( {ch} ) {
  return (
    <div>
      <div>
       <img alt="course" src="http://placecorgi.com/250" />
      </div>
      <div onClick={ch}>
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
  )
}

export default CourseItem