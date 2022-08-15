import { useState } from 'react';

import './Query.css';

export default function Query(props) {
  const query = props.query;
  const queryNum = props.queryNum;
  const queryMap = props.queryMap;

  // console.log(query);
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