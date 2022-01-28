import React, {useState, useEffect} from 'react';
import { useCharacters } from "../api/useData";
import loaderAnimation from '../images/loading.gif';
import Character from './Character.jsx';
import Paginator from './Paginator.jsx';

const ListOfCharacters = () => {
  const [ loaded, setLoaded ] = useState(false);
  const [ pageNum, setPageNum ] = useState(1);
  const [ itemToDisplay, setItemToDisplay ] = useState(false);

  const characters = useCharacters(pageNum);
    
  useEffect(() => {
    if (typeof characters === 'object') {
      setLoaded(true);
    }
  }, [characters]);

  const paging = (e) => {
    setPageNum(parseInt(e.target.value));
  }

  const decreasePageNum = () => {
    pageNum > 1 ? setPageNum(pageNum-1) : setPageNum(pageNum);
  }

  const increasePageNum = () => {
    pageNum < characters.info.pages ? setPageNum(pageNum+1) : setPageNum(pageNum);
  }

  const itemClose = () => {
    setItemToDisplay(false);
  }

  return (
    <div>
      <h2>Click on the character if you would like to see more information!</h2>
      <div className="characterList">
        {!loaded && <img src={loaderAnimation} alt="loader animation" />}
        {loaded && characters.results.map((character, i) => (
          <div className="characterListItem" key={i} onClick={() => setItemToDisplay(i)}>
            <h3>{character.name}</h3>
            <img src={character.image} alt={character.name} />
            <p>{character.species}</p>
          </div>
        ))}
      </div>
      {loaded && <Paginator pageNum={pageNum} onForward={increasePageNum} onBackward={decreasePageNum} onChange={paging} max={characters.info.pages} />}
      {itemToDisplay!==false &&
        <Character id={itemToDisplay} onClick={itemClose} character={characters.results[itemToDisplay]} />
      }
    </div>
  );
};

export default ListOfCharacters;
