import React from 'react';

function StepNumber({step}) {
  if (step === 5) {
    return (
      <div>
        <span>
          Guest Status
        </span>
      </div>
    )
  }
  return (
    <div>
      <span>
        Current Step:
      </span>
      <span>
        {step}
      </span>
    </div>
  )
}

export default StepNumber