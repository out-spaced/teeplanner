import React from 'react';
import TimeSelectItem from './TimeSelectItem';
import TimeSelectChoose from './TimeSelectChoose';
import TimeOpenings from './TimeOpenings';
function TimeSelect({value}) {

  return (
    <div className="time-select row-default">
      <TimeSelectItem time={value}/>
      <TimeOpenings />
      <TimeSelectChoose />
    </div>
  )
}

export default TimeSelect