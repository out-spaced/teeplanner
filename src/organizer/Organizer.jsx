import React, { useState, useEffect} from 'react';
import CourseSelect from 'courseSelect/CourseSelect';
import Guests from 'guests/Guests';
import Status from 'status/Status;
import TimeDateSelect from 'timeDateSelect/TimeDateSelect';


function Organizer() {
  const [step, setStep] = useState(0);

  useEffect( () => {

  }, [step])

  return (
    <div>
      <TimeSelectItem />
    </div>
  )
}

export default TimeSelect