import { useState } from 'react';

import Select from './Select';

import './Query.css';

export default function Query(props) {
  const query = props.query;
  const queryNum = props.queryNum;
  const queryMap = props.queryMap;
  const answer = props.answer;

  // console.log(query[queryNum]);
  // console.log(query[queryNum].name);

  return (
    <div id="Query">
      <h3>{ query[queryNum].name }</h3>
      <Select option={ query[queryNum].option } answer = {answer}/>
    </div>
  )
}