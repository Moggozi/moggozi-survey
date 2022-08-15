import { useState, useEffect } from 'react';

import ProgressBar from '../components/ProgressBar';
import Query from '../components/Query';
import Nav from '../components/Nav';

import api from '../request';

import Moggozi from '../assets/MGZ.png';

import './Main.css';

export default function Main() {
  const [query, setQuery] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const [queryNum, setQueryNum] = useState(0);

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
    fetchQuery();
    // eslint-disable-next-line
  }, []);

  if (loading || query === null) return null;

  return (
    <div id="Main">
      <div id="logo">
        <img alt="logo" src={ Moggozi } height="85px"/>
      </div>
      <div>
        <ProgressBar />
        <Query query={ query } queryNum={ queryNum }/>
        <Nav queryNum = { queryNum } setQueryNum = { setQueryNum } />
      </div>
    </div>
  )
}