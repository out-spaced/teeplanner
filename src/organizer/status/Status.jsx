import React from 'react';
import StatusItem from './StatusItem';
import StatusBackHome from './StatusBackHome';

function Status( {bh} ) {
  return (
    <div>
      <div>
        <StatusItem />
      </div>
        <StatusBackHome bh={bh}/>
    </div>
  )
}

export default Status