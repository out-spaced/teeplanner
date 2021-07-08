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

  function backHome() {
    setStart(false);
  }

  if (start  === false) {
    return (
      <div id="app-outer">
        <div id="app-container">
          <div id="nav">
            <Login />
            <Register />
          </div>
          <div id="main-banner">
            <h1>
              Tee Planner
            </h1>
          </div>
          <div id="app-container">
            <div className="row-default">
              <span>
                Begin planning your Tee time
              </span>
            </div>
            <div className="row-default">
              <button onClick={startPlanning} type="button">Start Planning</button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div id="app-outer">
      <div id="app-container">
        <div id="nav">
          <Login />
          <Register />
        </div>
        <div id="main-banner">
          <h1>
            Tee Planner
          </h1>
        </div>
        <div id="app-container">
          <Organizer bh={backHome}/>
        </div>
      </div>
    </div>
  )
}

export default App