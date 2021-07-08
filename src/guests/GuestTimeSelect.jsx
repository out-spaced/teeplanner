import React from 'react';
import GuestTimeSelectItem from './GuestTimeSelectItem';
import GuestSubmitTimes from './GuestSubmitTimes';

function GuestTimeSelect() {

  return (
    <div className="column-default">
      <GuestTimeSelectItem />
      <GuestTimeSelectItem />
      <GuestTimeSelectItem />
      <GuestTimeSelectItem />
      <GuestTimeSelectItem />
      <GuestSubmitTimes />
    </div>
  )
}

export default GuestTimeSelect