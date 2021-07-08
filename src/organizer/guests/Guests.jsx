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
        <GuestItem />
        <GuestItem />
        <GuestItem />
      </div>
      <div>
        <GuestSubmit ns={ns}/>
      </div>
    </div>
  )
}

export default Guests

// Guests.propTypes = {
//   ns: React.propTypes.function
// }