import React from 'react';
import DateSelect from './DateSelect';
import TimeSelect from './TimeSelect';
import TimeDateSubmit from './TimeDateSubmit';

function TimeDateSelect({ns}) {

  return (
    <div>
      <DateSelect />
      <TimeSelect />
      <TimeDateSubmit ns={ns}/>
    </div>
  )
}

export default TimeDateSelect

TimeDateSelect.propTypes = {
  ns: React.propTypes.function
}