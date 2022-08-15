import { useState } from 'react';

import './Nav.css';

export default function Nav(props) {
  var queryNum = props.queryNum;
  const setQueryNum = props.setQueryNum;
  const isAnswerd = props.isAnswerd;
  const answer = props.answer;
  const submit = props.submit;
  const setSubmit = props.setSubmit;

  const [backgroundColor, setBackgroundColor] = useState("#D9D9D9");
  const [nextPhrase, setNextPhrase] = useState("다음");

  function previous() {
    if (queryNum <= 0) {
      return null;
    }
    setQueryNum(queryNum - 1);

    if (queryNum - 1 === 0) {
      setBackgroundColor("#D9D9D9");
    }
    setNextPhrase("다음");
  }

  function next() {
    if ((queryNum > 7 || !isAnswerd) && queryNum !== 8) {
      console.log(isAnswerd);
      return null;
    } else if (queryNum === 8) {
      // send responce data
    }
    setQueryNum(queryNum + 1);
    answer(false);
    setSubmit(submit + 1);

    if (queryNum + 1 === 8) {
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
