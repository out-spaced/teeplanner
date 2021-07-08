import React from 'react';
import GuestItem from './GuestItem';
import GuestSubmit from './GuestSubmit';
import GuestNumber from './GuestNumber';

function Guests({ns}) {

  return (
    <div id="guests">
      <div id="guest-num">
        <GuestNumber />
      </div>
      <div id="guest-item-list">
        <GuestItem />
        <GuestItem />
        <GuestItem />
        <GuestItem />
      </div>
      <GuestSubmit ns={ns}/>
    </div>
  )
}

export default Guests

// Guests.propTypes = {
//   ns: React.PropTypes.function
// }