import React from 'react';

function CheckStatus({ns}) {


  return (
    <div>
      <button className="btn btn-primary" onClick={ns}>
        Check Status
      </button>
    </div>
  )
}

export default CheckStatus

// CheckStatus.propTypes = {
//   ns: React.propTypes.function
// }