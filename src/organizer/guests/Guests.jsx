import React, {useState, useEffect} from 'react';
import GuestItem from './GuestItem';
import GuestSubmit from './GuestSubmit';
import GuestNumber from './GuestNumber';

function Guests({ns}) {
  const [numFriends, setNumFriends] = useState(1);
  const friendArray = Array(numFriends)
  for (let j = 0; j < numFriends; j++) {
    friendArray[j] = j;
  }
  const listItems = friendArray.map((num, i) => <GuestItem key={i}/> )

  console.log(friendArray)

  function addFriend() {
    setNumFriends(numFriends + 1);
  }

  useEffect( () => {
  }, [numFriends])

  return (
    <div id="guests">
      <div id="guest-num">
        <GuestNumber />
      </div>
      <div id="guest-item-list">
        {friendArray.map((num, i) => <GuestItem val={num} key={i}/> )}
      </div>
      <div className="row-default div-right">
        <button className="btn btn-primary" onClick={addFriend}>+</button>
      </div>

      <GuestSubmit ns={ns}/>
    </div>
  )
}

export default Guests

// Guests.propTypes = {
//   ns: React.PropTypes.function
// }