import React from 'react';
import { useCharacters } from "../api/useData";



const ListOfCharacters = () => {
  const characters = useCharacters(1);

  // console.log("Characters data: ");
  // console.log(characters);
  // console.log(characters.results);
  console.log(Array.isArray(characters.results));
  // for (const result of characters.results) {
  //   console.log(result);
  // }
  
  return (
    <div>
        Display list of characters.
    </div>
  );
};

export default ListOfCharacters;
