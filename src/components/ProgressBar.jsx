import './ProgressBar.css';

export default function ProgressBar(props) {
  const queryNum = props.queryNum;
  const queryMap = props.queryMap;

  // console.log(queryMap[0]);
  // console.log(queryNum);

  console.log(queryMap[queryNum]);

  return (
    <div id="ProgressBar">
      <div id="query-num">
        <p>{ `${queryMap[queryNum]} / 7` }</p>
      </div>
      <div id="status-bar">
        <div></div>
      </div>
    </div>
  )
}