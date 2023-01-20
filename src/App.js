import "./App.css";
import React, { useState } from "react";
import Welcome from "./components/Welcome/Welcome";

function App() {
  const [name, setName] = useState("");
  const [submit, setSubmit] = useState(false);

  return (
    <div>
      <div class="wave"></div>
      <div class="wave"></div>
      <div class="wave"></div>
      <div className="login-page">
        <div>
          <label>Username -</label>
          &nbsp;&nbsp;
          <input
            placeholder="eg. Enter Your Name "
            value={name}
            onChange={(event) => {
              setName(event.target.value);
            }}
          ></input>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <button
            onClick={() => {
              setSubmit(!submit);
            }}
          >
            LOGIN
          </button>
        </div>

        {submit && name && <Welcome name={name}></Welcome>}

        <div>
          <p>Assignment done by Md Kaish (12020238)</p>
        </div>
      </div>
    </div>
  );
}
export default App;
