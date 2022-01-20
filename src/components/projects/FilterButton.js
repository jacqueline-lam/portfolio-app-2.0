import { useState } from 'react';

function FilterButton({ stack, selectedStackIds, onToggleFilter }) {
  const myStackId = stack.id;
  const initialState = selectedStackIds.includes(myStackId.toString())
  const [toggle, setToggle] = useState(initialState);
  const renderClasses = getButtonClassnames();

  function getButtonClassnames() {
    let renderClasses = "btn btn-outline-info btn-sm";
    if (toggle) {
      renderClasses = "btn btn-outline-info btn-sm active"
    }

    return renderClasses;
  }

  function handleOnClick(event) {
    let toggled = !toggle;
    toggled ? setToggle(true) : setToggle(false)

    // Only invoke callback when filter is clicked
    const stackClicked = event.target.id;
    onToggleFilter(stackClicked, toggled);
  };


  return (
    <button
      id={stack.id}
      type="button"
      className={renderClasses}
      aria-pressed={toggle}
      value={stack}
      onClick={handleOnClick}>
      {stack.name}
    </button>
  )
}
export default FilterButton;