import { useState } from 'react';

import './Nav.css';

export default function Nav(props) {
  var queryNum = props.queryNum;
  const setQueryNum = props.setQueryNum;

  const [backgroundColor, setBackgroundColor] = useState("#D9D9D9");
  const [nextPhrase, setNextPhrase] = useState("다음");

  function previous() {
    if (queryNum <= 1) {
      return null;
    }
    setQueryNum(queryNum - 1);

    if (queryNum - 1 === 1) {
      setBackgroundColor("#D9D9D9");
    }
    setNextPhrase("다음");
  }

  function next() {
    if (queryNum > 8) {
      return null;
      // send responce data
    }
    setQueryNum(queryNum + 1);

    if (queryNum + 1 === 9) {
      setNextPhrase("완료");
    }
    setBackgroundColor("#FFCAA1");
  }

  return (
    <div id="Nav">
      <button onClick={ previous } style={ {backgroundColor:backgroundColor} }>이전</button>
      <button onClick={ next }>{ nextPhrase }</button>
    </div>
  )
}