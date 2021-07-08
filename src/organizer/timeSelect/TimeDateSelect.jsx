import React from 'react';
import TimeSelect from './TimeSelect';
import TimeDateSubmit from './TimeDateSubmit';

function TimeDateSelect({ns}) {

  return (
    <div>
      <TimeSelect />
      <TimeSelect />
      <TimeSelect />
      <TimeSelect />
      <TimeSelect />
      <TimeDateSubmit ns={ns}/>
    </div>
  )
}

export default TimeDateSelect

// TimeDateSelect.propTypes = {
//   ns: React.propTypes.function
// }