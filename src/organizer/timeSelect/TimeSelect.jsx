import React from 'react';
import TimeSelectItem from './TimeSelectItem';
import TimeSelectChoose from './TimeSelectChoose';
import TimeOpenings from './TimeOpenings';
function TimeSelect() {

  return (
    <div className="time-select row-default">
      <TimeSelectItem />
      <TimeOpenings />
      <TimeSelectChoose />
    </div>
  )
}

export default TimeSelect