import { useState, useEffect } from 'react';

import './Select.css';

export default function Select(props) {
  const option = JSON.parse(props.option);
  const [select, setSelect] = useState(null);

  useEffect(() => {
    if (option === null) {
      setSelect(
        <div className="option">
          <input></input>
        </div>
      )
    } else {
      const s = option.map((opt) => {
        return (
          <div key={ opt } className="option">
            <div></div>
            <p>{ opt }</p>
          </div>
        )
      });

      setSelect(s);
    }
    // eslint-disable-next-line
  }, [option]);

  return (
    <div id="Select">
      { select }
    </div>
  )
}
