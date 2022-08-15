import { useState, useEffect, useRef } from 'react';
import './Select.css';

export default function Select(props) {
  const option = JSON.parse(props.option);
  const answer = props.answer;

  const [ currentOption, setCurrentOption ] = useState(null);
  const options = useRef();

  useEffect(() => {
    options.current.childNodes.forEach((element) => {
      element.firstChild.style.backgroundColor = "white";
    })
    if (currentOption !== null) {
      currentOption.style.backgroundColor = "#FFCAA1";
    }
  }, [currentOption])

  function selectHandler(event) {
    const target = event.target;
    setCurrentOption(target);
    answer(true);
  };

  var select;

  if (option === null) {
    select = (
      <div className="option">
        <input></input>
      </div>
    )
  } else {
    select = option.map((opt) =>
      <div key={ opt } className="option">
        <div onClick={ selectHandler }></div>
        <p>{ opt }</p>
      </div>
    );
  }

  return (
    <div id="Select" ref={ options }>
      { select }
    </div>
  )
}
