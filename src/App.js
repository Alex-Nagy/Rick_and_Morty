import React, { useState } from "react";
import "./App.css";
import logo from "./images/logo.png";
import Description from "./components/Description";
import ListOfCharacters from "./components/ListOfCharacters";
import ListOfLocations from "./components/ListOfLocations";


function App() {
  const [sectionName, setSectionName] = useState("Description");

  return (
  <div className="App">

    <header className="App-header">
      <img src={logo} alt="React and Morty logo" onClick={() => setSectionName("Description")} />
    </header>

    <div className="buttonsDiv">
      <button onClick={() => setSectionName("CharList")}>Characters</button>
      <button onClick={() => setSectionName("LocList")}>Locations</button>
    </div>

    <div>
      {sectionName === "Description" && <Description/>}
      {sectionName === "CharList" && <ListOfCharacters/>}
      {sectionName === "LocList" && <ListOfLocations/>}
    </div>

  </div>
  );
}

export default App;
