import React from 'react';
import TimeSelectItem from './TimeSelectItem';
import TimeSelectChoose from './TimeSelectChoose';

function TimeSelect() {

  return (
    <div>
      <span>
        <TimeSelectItem />
      </span>
      <span>
        <TimeSelectChoose />
      </span>
    </div>
  )
}

export default TimeSelect