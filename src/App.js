import React, { useState } from "react";
import "./App.css";
import Logo from "./components/Logo";
import CharactersButton from "./components/CharactersButton";
import LocationsButton from "./components/LocationsButton";



function App() {
  return (
    <div className="App">
      <Logo />
      <div className="buttonsDiv">
        <CharactersButton />
        <LocationsButton />
      </div>
    </div>
  );
}

export default App;
