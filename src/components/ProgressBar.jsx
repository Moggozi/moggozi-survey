import { useState, useEffect } from 'react';

import './ProgressBar.css';

export default function ProgressBar(props) {
  const queryNum = props.queryNum;
  const queryMap = props.queryMap;

  const [progress, setProgress] = useState(10);

  useEffect(() => {
    setProgress(4 + queryMap[queryNum] * 15);
  }, [queryMap, queryNum]);

  return (
    <div id="ProgressBar">
      <div id="query-num">
        <p>{ `${queryMap[queryNum]} / 7` }</p>
      </div>
      <div id="status-bar">
        <div style={ {width: `${progress}%`} }></div>
      </div>
    </div>
  )
}