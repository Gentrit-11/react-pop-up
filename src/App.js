import Popup from "./components/Popup";
import "./style.css";
import { useState } from "react";

function App() {
  const [buttonPopup, setButtonPopup] = useState(false);
  return (
    <div className="App">
      <h1>React popup</h1>
      <br></br>
      <button onClick={() => setButtonPopup(true)}>Open Popup</button>
      <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
        <div className="text">
          <h3>Theme color</h3>
          <a href="#">change theme</a>
        </div>
        <div className="all">
          <div className="flex">
            <h3>Font color</h3>
          </div>
          <div className="container">
            <h4>#44444</h4>
            <span className="background">jjjjj</span>
          </div>
        </div>
        <hr></hr>
        <div className="all">
          <div className="flex">
            <h3>background color</h3>
          </div>
          <div className="container">
            <h4>#2072EF</h4>
            <span className="background2">jjjjj</span>
          </div>
        </div>
        <hr></hr>
        <div className="all">
          <div className="flex">
            <h3>button color</h3>
          </div>
          <div className="container">
            <h4>#2072EF</h4>
            <span className="background3">jjjjj</span>
          </div>
        </div>
        <hr></hr>
        <div className="all">
          <div className="flex">
            <h3>button border color</h3>
          </div>
          <div className="container">
            <h4>#0053D1</h4>
            <span className="background4">jjjjj</span>
          </div>
        </div>
        <hr></hr>
        <div className="all">
          <div className="flex">
            <h3>button Mouseover color</h3>
          </div>
          <div className="container">
            <h4>#0053D1</h4>
            <span className="background5">jjjjj</span>
          </div>
        </div>
        <hr></hr>
        <div className="buttons">
          <button className="button1">cancel</button>
          <button className="button2">save</button>
        </div>
      </Popup>
    </div>
  );
}

export default App;
