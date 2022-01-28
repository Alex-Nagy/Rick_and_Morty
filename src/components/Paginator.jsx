import React from 'react';
import './paginator.css';

const Paginator = (props) => {
    return (
      <> 
        <div className='paginator'>
          <button onClick={props.onBackward}>-</button>
          <input type="range" className="slider" onChange={props.onChange} min="1" max={props.max} value={props.pageNum} />
          <button onClick={props.onForward}>+</button>
        </div>
        <div className="pageNumber">({props.pageNum} / {props.max})</div>
        </>
    );
};

export default Paginator;
