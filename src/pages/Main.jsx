import { useState, useEffect } from 'react';

import ProgressBar from '../components/ProgressBar';
import Query from '../components/Query';
import Nav from '../components/Nav';

import api from '../request';
import { v4 as uuidv4 } from 'uuid';

import Moggozi from '../assets/MGZ.png';

import './Main.css';

export default function Main() {
  var loadQuery = true;
  const [query, setQuery] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const [queryNum, setQueryNum] = useState(0);

  const [responce, setResponce] = useState({});
  const [responces, setResponces] = useState([]);

  const [isAnswerd, setAnswer] = useState(false);
  const [submit, setSubmit] = useState(0);

  const uid = uuidv4();

  const queryMap = {
    0: 1, 1: 2, 2: 3, 3: 4, 4: 4, 5: 4, 6: 5, 7: 6, 8: 7 
  }

  const fetchQuery = async () => {
    try {
      setQuery(null);
      setLoading(true);
      const responce = await api.get("/api/query");
      setQuery(responce.data);
    } catch (e) {
      setError(e);
      console.log(error);
    }
    setLoading(false);
  }

  useEffect(() => {
    if (loadQuery) fetchQuery();

    if (Object.keys(responce).length !== 0) {
      responces.push(responce);
    }
    // eslint-disable-next-line
  }, [submit]);

  if (loading || query === null) {
    return null;
  } else if (query !== null) {
    loadQuery = false;
  }

  return (
    <div id="Main">
      <div id="logo">
        <img alt="logo" src={ Moggozi } height="85px"/>
      </div>
      <div>
        <ProgressBar queryNum = { queryNum } queryMap = { queryMap }/>
        <Query 
          query = { query } 
          queryNum={ queryNum } 
          queryMap = { queryMap }
          setResponce = { setResponce } 
          answer = { setAnswer }
        />
        <Nav
          queryNum = { queryNum } 
          setQueryNum = { setQueryNum } 
          isAnswerd = { isAnswerd } 
          answer = { setAnswer }
          responces = { responces }
          submit = { submit }
          setSubmit = { setSubmit }
          uid = { uid }
        />
      </div>
    </div>
  )
}
