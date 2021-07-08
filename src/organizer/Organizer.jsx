import React, { useState, useEffect} from 'react';
import CourseSelect from './courseSelect/CourseSelect';
import Guests from './guests/Guests';
import Status from './status/Status';
import TimeDateSelect from './timeDateSelect/TimeDateSelect';
import Complete from './complete/Complete';

function Organizer() {
  const [step, setStep] = useState(0);
  let currentStep;

  function nextStep() {
    setStep(step + 1);
  }

  switch(step) {
    case 0:
      currentStep = <Guests ns={nextStep} />;
      break;
    case 1:
      currentStep = <CourseSelect ns={nextStep} />;
      break;
    case 2:
      currentStep = <TimeDateSelect ns={nextStep} />;
      break;
    case 3:
      currentStep = <Complete ns={nextStep}/>;
      break;
    case 4:
      currentStep = <Status />;
      break;
  }


  return (
    <div>
      {currentStep}
    </div>
  )
}

export default Organizer