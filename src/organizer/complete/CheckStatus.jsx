import React from 'react';

function CheckStatus({ns}) {


  return (
    <div>
      <button onClick={ns}>
        Check Status
      </button>
    </div>
  )
}

export default CheckStatus

CheckStatus.propTypes = {
  ns: React.propTypes.function
}