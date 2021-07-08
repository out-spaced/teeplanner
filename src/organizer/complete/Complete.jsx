import React from 'react';
import CheckStatus from './CheckStatus';
import BackToHome from './BackToHome';

function Complete({ns}) {


  return (
    <div>
      <div>
        <span>
          All done! Will notify you at some point
        </span>
      </div>
      <BackToHome />
      <CheckStatus ns={ns}/>
    </div>
  )
}

export default Complete

Complete.propTypes = {
  ns: React.propTypes.function
}