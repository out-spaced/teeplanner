import React, {useState} from 'react';
import TimeSelect from './TimeSelect';
import TimeDateSubmit from './TimeDateSubmit';

function TimeDateSelect({ns}) {
  const [numTimes, setNumTimes] = useState(5);
  const timeArray = Array(numTimes);
  for (let i = 0; i < numTimes; i++) {
    timeArray[i] = i;
  }
  return (
    <div id="time-select-container">
      <div id="openings-list">
        {timeArray.map((num, i) => (
          <TimeSelect key={i} value={num + 2}/>
        ))}
      </div>
      <TimeDateSubmit ns={ns}/>
    </div>
  )
}

export default TimeDateSelect

// TimeDateSelect.propTypes = {
//   ns: React.propTypes.function
// }