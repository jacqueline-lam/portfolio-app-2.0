import { useState, useEffect } from 'react';

function FilterButton({ stack, selectedStackIds, onToggleFilter }) {
  const myStackId = stack.id;
  const initialState = selectedStackIds.includes(myStackId.toString())
  const [selected, setSelected] = useState(initialState);
  const renderClasses = getButtonClassnames();

  function getButtonClassnames() {
    let renderClasses = "btn btn-outline-info btn-sm";
    if (selected) {
      renderClasses = "btn btn-outline-info btn-sm active"
    }

    return renderClasses;
  }

  function handleOnClick(event) {
    let inactive = !selected;
    const stackClicked = event.target.id;

    inactive ? setSelected(true) : setSelected(false)
    // Only invoke callback when filter is clicked
    onToggleFilter(stackClicked, pressed)
  };


  return (
    <button
      id={stack.id}
      type="button"
      className={renderClasses}
      aria-pressed={selected}
      value={stack}
      onClick={handleOnClick}>
      {stack.name}
    </button>
  )
}
export default FilterButton;