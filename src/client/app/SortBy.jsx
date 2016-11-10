import React from 'react';

const SortBy = ({changeSort, term, sortby}) => {

  return (
    <div>
      <p>Sorting by {sortby}</p>
      <ul>
        <li onClick={() => changeSort(term,'hot')} >Hot</li>
        <li onClick={() => changeSort(term,'new')} >New</li>
        <li onClick={() => changeSort(term,'rising')} >Rising</li>
        <li onClick={() => changeSort(term,'controversial')} >Controversial</li>
        <li onClick={() => changeSort(term,'top')} >Top</li>
        <li onClick={() => changeSort(term,'ads')} >Promoted</li>
      </ul>
    </div>
  );

};

export default SortBy;
