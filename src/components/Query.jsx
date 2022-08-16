import { useState } from 'react';

import Select from './Select';

import './Query.css';

export default function Query(props) {
  const query = props.query;
  const queryNum = props.queryNum;

  const answer = props.answer;
  const setResponce = props.setResponce;

  const currnet_query = query[queryNum];

  return (
    <div id="Query">
      <h3>{ currnet_query.name }</h3>
      <Select 
        option={ currnet_query.option } 
        queryNum = { queryNum }
        answer={answer} 
        setResponce={setResponce} 
        name={currnet_query.name}
      />
    </div>
  )
}