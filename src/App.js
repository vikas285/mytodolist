import React, { useState } from "react";
import "./App.css";
import List from "./Component/List";
function App() {
  // let [Data, setData] = useState(false);
  let [value1 , setValue] = useState(null);

  return (
    <div className="name">
      <h2>{value1}</h2>
  
   
      <div className="main">
        <div className="App">
          <input
            placeholder="Write a task"
            className="input"
            type="text"
            onChange={(e) => setValue(e.target.value)}
            
          />
          <button className="button">
            create
          </button>
        </div>
        <div>
          <List />
        </div>
        <header className="App-header"></header>
      </div>
    </div>
  );
}

export default App;
