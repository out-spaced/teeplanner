import React from 'react';
import CheckStatus from './CheckStatus';
import BackToHome from './BackToHome';

function Complete({ns, bh}) {


  return (
    <div id="complete-container">
      <div id="complete-text">
        <span className="text">
          All done! Will notify you at some point
        </span>
      </div>
      <div className="row-default">
        <BackToHome bh={bh}/>
        <CheckStatus ns={ns}/>
      </div>
    </div>
  )
}

export default Complete

// Complete.propTypes = {
//   ns: React.propTypes.function
// }