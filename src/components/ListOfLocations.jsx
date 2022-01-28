import React, {useState, useEffect} from 'react';
import { useLocations } from "../api/useData";
import loaderAnimation from '../images/loading.gif';
import Location from './Location.jsx';
import Paginator from './Paginator.jsx';

const ListOfLocations = () => {
  const [ loaded, setLoaded ] = useState(false);
  const [ pageNum, setPageNum ] = useState(1);
  const [ itemToDisplay, setItemToDisplay ] = useState(false);

  const locations = useLocations(pageNum);
    
  useEffect(() => {
    if (typeof locations === 'object') {
      setLoaded(true);
    }
  }, [locations]);

  const paging = (e) => {
    setPageNum(parseInt(e.target.value));
  }

  const itemClose = () => {
    setItemToDisplay(false);
  }

  const decreasePageNum = () => {
    pageNum > 1 ? setPageNum(pageNum-1) : setPageNum(pageNum);
  }

  const increasePageNum = () => {
    pageNum < locations.info.pages ? setPageNum(pageNum+1) : setPageNum(pageNum);
  }

  return (
    <div>
      <h2>Click on the location if you would like to see more information!</h2>
      <div className="locationList">
        {!loaded && <img src={loaderAnimation} alt="loader animation" />}
        {loaded && locations.results.map((location, i) => (
          <div className="locationListItem" key={i} onClick={() => setItemToDisplay(i)}>
            <h3>{location.name}</h3>
            <p>{location.type}</p>
          </div>
        ))}
      </div>
      {loaded && <Paginator pageNum={pageNum} onForward={increasePageNum} onBackward={decreasePageNum} onChange={paging} max={locations.info.pages} />}
      {itemToDisplay!==false &&
        <Location id={itemToDisplay} onClick={itemClose} location={locations.results[itemToDisplay]} />
      }      
    </div>
  );
};

export default ListOfLocations;

