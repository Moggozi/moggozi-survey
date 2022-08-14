import ProgressBar from '../components/ProgressBar';
import Query from '../components/Query';

import Moggozi from '../assets/MGZ.png';

import './Main.css';

export default function Main() {
  return (
    <div id="Main">
      <div id="logo">
        <img alt="logo" src={ Moggozi } height="85px"/>
      </div>
      <div>
        <ProgressBar />
        <Query query={
          {
            query: "1. IT에 얼마나 관심이 있나요"
          }
        }/>
        <div>
          <button />
          <button />
        </div>
      </div>
    </div>
  )
}