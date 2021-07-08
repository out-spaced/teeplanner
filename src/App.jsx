import React, {useState} from 'react';
import Organizer from './organizer/Organizer';


function App() {
  const [start, setStart] = useState(false);
  let render;

  function startPlanning() {
    setStart(true);
  }

  if (start  === true) {
    render = <Organizer />
  } else {
    render = (
      <div>
        <span>Begin planning your Tee time</span>
        <button onClick={startPlanning} type="button">Start Planning</button>
      </div>
    );
  }

  return (
    <div>
      {render}
    </div>
  )
}

export default App