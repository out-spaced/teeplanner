import React, { useState, useEffect } from 'react';
import StatusItem from './StatusItem';
import StatusBackHome from './StatusBackHome';

function Status({ bh }) {
  const [loaded, setLoaded] = useState(false);
  const [friends, setFriends] = useState([]);
  useEffect(async () => {
    let data = await fetch('/status');
    data = await data.json();
    data.shift();
    setFriends(data);
    setLoaded(true);
  }, []);

  if (!loaded) {
    return 'Loading...';
  }

  return (
    <div id="lower-app">
      <div id="status-list-container">
        {friends.map((item, index) => (
          <StatusItem name={item.name} status={item.status} key={index} />
        ))}
      </div>
      <StatusBackHome bh={bh} />
    </div>
  );
}

export default Status;
