import './Select.css';

export default function Select(props) {
  const option = JSON.parse(props.option);

  console.log(option);

  const select = option.map((opt) =>
    <div key={ opt } className="option">
      <div></div>
      <p>{ opt }</p>
    </div>
  );

  return (
    <div id="Select">
      { select }
    </div>
  )
}
