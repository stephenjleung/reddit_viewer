import React from 'react';

const liStyle = {
  display: 'inline-block',
  padding: '10px',
};

const SortBy = ({changeSort, term, sortby}) => {

  return (
    <div style={{textAlign: 'center'}}>
      
      <ul style={{listStyleType: 'none'}}>
        <li style={{ display: 'inline-block', padding: '10px', minWidth: '200px'}}>Sorting by <button className="btn btn-primary"><i>{sortby}</i></button></li>
        <li style={liStyle}><button className="btn btn-secondary" onClick={() => changeSort(term, 'hot')} >Hot</button></li>
        <li style={liStyle}><button className="btn btn-secondary" onClick={() => changeSort(term, 'new')} >New</button></li>
        <li style={liStyle}><button className="btn btn-secondary" onClick={() => changeSort(term, 'rising')} >Rising</button></li>
        <li style={liStyle}><button className="btn btn-secondary" onClick={() => changeSort(term, 'controversial')} >Controversial</button></li>
        <li style={liStyle}><button className="btn btn-secondary" onClick={() => changeSort(term, 'top')} >Top</button></li>
        <li style={liStyle}><button className="btn btn-secondary" onClick={() => changeSort(term, 'ads')} >Promoted</button></li>
        
      </ul>
    </div>
  );

};

export default SortBy;
