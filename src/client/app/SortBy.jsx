import React from 'react';

const SortBy = ({changeSort, term, sortby}) => {

  return (
    <div>
      <p>Sorting by {sortby}</p>
      <ul>
        <li><span onClick={() => changeSort(term, 'hot')} >Hot</span></li>
        <li><span onClick={() => changeSort(term, 'new')} >New</span></li>
        <li><span onClick={() => changeSort(term, 'rising')} >Rising</span></li>
        <li><span onClick={() => changeSort(term, 'controversial')} >Controversial</span></li>
        <li><span onClick={() => changeSort(term, 'top')} >Top</span></li>
        <li><span onClick={() => changeSort(term, 'ads')} >Promoted</span></li>
      </ul>
    </div>
  );

};

export default SortBy;
