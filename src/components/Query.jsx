import { useState } from 'react';

import './Query.css';

export default function Query(props) {
  const query = useState(props.query);

  return (
    <div id="Query">
      <h3>{ `${props.queryNum}. IT에 얼마나 관심 있나요` }</h3>
      <div className="select">
        <div></div>
        <p></p>
      </div>
    </div>
  )
}