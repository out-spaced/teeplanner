import React, { useState, useEffect} from 'react';
import CourseSelect from './courseSelect/CourseSelect';
import Guests from './guests/Guests';
import Status from './status/Status';
import TimeDateSelect from './timeDateSelect/TimeDateSelect';
import Complete from './complete/Complete';
import StepNumber from './stepNumber/StepNumber';

function Organizer({bh}) {
  const [step, setStep] = useState(1);
  let currentStep;

  function nextStep(home = null) {
    if (home === 'home') {
      setStep(0)
    } else {
      setStep(step + 1);
    }
  }

  switch(step) {
    case 1:
      currentStep = <Guests ns={nextStep} />;
      break;
    case 2:
      currentStep = <CourseSelect ns={nextStep} />;
      break;
    case 3:
      currentStep = <TimeDateSelect ns={nextStep} />;
      break;
    case 4:
      currentStep = <Complete ns={nextStep} bh={bh}/>;
      break;
    case 5:
      currentStep = <Status bh={bh}/>;
      break;
  }

  return (
    <div>
      <div>
        {currentStep}
      </div>
      <div>
        <StepNumber step={step}/>
      </div>
    </div>

  )
}

export default Organizer