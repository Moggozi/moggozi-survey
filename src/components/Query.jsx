import { useState } from 'react';

import './Query.css';

export default function Query(props) {
  const query = props.query;
  const queryNum = props.queryNum;

  const queryMap = {
    1: 1, 2: 2, 3: 3, 4: 4, 5: 4, 6: 4, 7: 5, 8: 6, 9: 7 
  }

  console.log(query);
  // console.log(query[queryNum].name);

  return (
    <div id="Query">
      <h3>{ query[queryNum].name }</h3>
      <div className="select">
        <div></div>
        <p></p>
      </div>
    </div>
  )
}