import { useState, useEffect, useRef } from 'react';
import './Select.css';

export default function Select(props) {
  const option = JSON.parse(props.option);
  const answer = props.answer;
  const setResponce = props.setResponce;

  const queryName = props.name;

  const [ currentOption, setCurrentOption ] = useState(null);
  const [ currentResponse, setCurrentResponse ] = useState(null);
  const options = useRef();

  useEffect(() => {
    // console.log(currentOption);
    options.current.childNodes.forEach((element) => {
      element.firstChild.style.backgroundColor = "white";
      if (element.firstChild === currentOption) {
        setCurrentResponse(element.lastChild.innerHTML);
      }
    })
    if (currentOption !== null) {
      if (currentOption !== "string-input") {
        currentOption.style.backgroundColor = "#FFCAA1";
      }
      setResponce({
        "name" : queryName,
        "response" : currentResponse
      })
    }
  }, [currentOption, queryName, currentResponse, setCurrentResponse, setResponce])

  function selectHandler(event) {
    const target = event.target;
    setCurrentOption(target);
    answer(true);
  };

  function inputHandler(event) {
    setCurrentOption("string-input");
    setCurrentResponse(event.target.value);
    answer(true);
  }

  var select;

  if (option === null) {
    select = (
      <div className="option">
        <input onInput={ inputHandler }></input>
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
