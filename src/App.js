import React, { useState } from "react";
import "./App.css";
// import { useCharacters, useLocations } from "./api/useData";
import Logo from "./components/Logo";
import CharactersButton from "./components/CharactersButton";
import LocationsButton from "./components/LocationsButton";
import Description from "./components/Description";
import ListOfCharacters from "./components/ListOfCharacters";
import ListOfLocations from "./components/ListOfLocations";


function App() {
  // const characters = useCharacters(1);
  // const locations = useLocations(1);

  // console.log("Characters data: ");
  // console.log(characters);
  // console.log("Locations data: ");
  // console.log(locations);

  // const [showCharList, setShowCharList] = useState(false);
  // const [showLocList, setShowLocList] = useState(false);
  const [sectionName, setSectionName] = useState("Description");

  // const CharactersClickEvent = () => {
  //   setShowCharList(true);
  //   setShowLocList(false);
  // };

  // const LocationsClickEvent = () => {
  //   setShowLocList(true);
  //   setShowCharList(false)
  // };


  return (
  <div className="App">
    <Logo/>
    <div className="buttonsDiv">
      {/* <CharactersButton onClick={CharactersClickEvent}/>
      <LocationsButton onClick={LocationsClickEvent}/> */}
      <button onClick={() => setSectionName ("CharList")}>Characters</button>
      <button onClick={() => setSectionName ("LocList")}>Locations</button>

    </div>
    <div>
      {sectionName === "Description" && <Description/>}
      {sectionName === "CharList" && <ListOfCharacters/>}
      {sectionName === "LocList" && <ListOfLocations/>}
      {/* <ListOfCharacters {...showCharList && showLocList ? <Description/> : <ListOfCharacters/>}/>
      <ListOfLocations {...showCharList && showLocList ? <Description/> : <ListOfLocations/>}/> */}
    </div>
  </div>
  );
}

export default App;
