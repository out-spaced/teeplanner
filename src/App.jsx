import React, {useState} from 'react';
import Organizer from './organizer/Organizer';
import Login from './nav/Login';
import Register from './nav/Register';

function App() {
  const [start, setStart] = useState(false);
  let render;

  function startPlanning() {
    setStart(true);
  }

  if (start  === false) {
    return (
      <div className="container-fluid">
      <div id="app-container">
        <div id="nav">
          <Login />
          <Register />
        </div>
        <div>
          <h1>
            Tee Planner
          </h1>
        </div>
        <div id="app-container">
          <div>
            <span>
              Begin planning your Tee time
            </span>
          </div>
          <div>
            <button onClick={startPlanning} type="button">Start Planning</button>
          </div>
        </div>
      </div>
    </div>
    );
  }

  return (
    <div className="container-fluid">
      <div id="app-container">
        <div id="nav">
          <Login />
          <Register />
        </div>
        <div>
          <h1>
            Tee Planner
          </h1>
        </div>
        <div id="app-container">
          <Organizer />
        </div>
      </div>
    </div>
  )
}

export default App