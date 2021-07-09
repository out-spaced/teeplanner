import React, {useState} from 'react';
import StatusItem from './StatusItem';
import StatusBackHome from './StatusBackHome';

function Status( {bh} ) {
  const friendArray = [
    {
      name: 'alex',
      status: true,
    },
    {
      name: 'bob',
      status: false,
    },
    {
      name: 'john',
      status: false,
    },
    {
      name: 'nick',
      status: false,
    }
  ]

  return (
    <div id="status-container">
      <div id="status-list-container">
        {
        friendArray.map( (item, index) => <StatusItem name={item.name} status={item.status} key={index} /> )
        }
      </div>
        <StatusBackHome bh={bh}/>
    </div>
  )
}

export default Status