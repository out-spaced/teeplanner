import React from 'react';

function StepNumber({step}) {
  const stepNames = [
    'Add friends',
    'Course',
    'Date',
    'Times',
    'All done!',
  ]
  const stepList = stepNames.map((name) => (
    <span className="step-text">{name}</span>
  ))
  const stepArray = Array(5);
  for (let i = 0; i < 5; i++) {
    stepArray[i] = i + 1;
  }
  return (
    <div id="step-container" className="row-default">
      {stepArray.map((item, i) => {
        let idTag = '';
        if (item < step) {
          idTag = 'completed-step';
        } else if (item === step) {
          idTag = 'active-step';
        } else {
          idTag = 'inactive-step';
        }
         return (
          <div key={item} id={idTag} className="step">
            {stepList[i]}
          </div>
      )
      })}
    </div>
  )
}

export default StepNumber