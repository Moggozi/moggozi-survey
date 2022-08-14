import { useState } from 'react';

import './Query.css';

export default function Query(props) {
  const query = useState(props.query);

  return (
    <div id="Query">
      <h3>{query[0].query}</h3>
      <div className="select">
        <div></div>
        <p></p>
      </div>
    </div>
  )
}