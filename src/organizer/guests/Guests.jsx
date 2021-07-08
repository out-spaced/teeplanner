import React from 'react';
import GuestItem from './GuestItem';
import GuestSubmit from './GuestSubmit';
import GuestNumber from './GuestNumber';

function Guests({ns}) {

  return (
    <div>
      <div>
        <GuestNumber />
      </div>
      <div>
        <GuestItem />
      </div>
      <div>
        <GuestSubmit ns={ns}/>
      </div>
    </div>
  )
}

export default Guests