import React from 'react';

function DateChoose( {ns} ) {

  return (
    <div className="row-default">
      <button className="btn btn-primary" type="button" onClick={ns}>
        Choose
      </button>
    </div>
  );
}

export default DateChoose


