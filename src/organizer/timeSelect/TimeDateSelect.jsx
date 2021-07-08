import React from 'react';
import TimeSelect from './TimeSelect';
import TimeDateSubmit from './TimeDateSubmit';

function TimeDateSelect({ns}) {

  return (
    <div id="time-select-container">
      <div id="openings-list">
        <TimeSelect />
        <TimeSelect />
        <TimeSelect />
        <TimeSelect />
        <TimeSelect />
      </div>
      <TimeDateSubmit ns={ns}/>
    </div>
  )
}

export default TimeDateSelect

// TimeDateSelect.propTypes = {
//   ns: React.propTypes.function
// }