import './Select.css';

export default function Select(props) {
  const option = JSON.parse(props.option);

  function selectHandler(event) {
    const target = event.target;
    target.style.backgroundColor = "#FFCAA1"
  }

  var select;

  if (option === null) {
    select = (
      <div className="option">
        <input></input>
      </div>
    )
  } else {
    select = option.map((opt) => {
      return (
        <div key={ opt } className="option">
          <div onClick={ selectHandler }></div>
          <p>{ opt }</p>
        </div>
      )
    });
  }

  return (
    <div id="Select">
      { select }
    </div>
  )
}
