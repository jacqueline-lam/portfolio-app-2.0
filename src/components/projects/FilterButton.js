import { useState, useEffect } from 'react';

function FilterButton({ stack, selectedStackIds, onToggleFilter }) {
  const myStackId = stack.id;
  const initialState = selectedStackIds.includes(myStackId.toString())
  const [selected, setSelected] = useState(initialState);
  const renderClasses = getButtonClassnames();

  // useEffect(() => {
  //   setSelected(selectedStackIds.includes(myStackId.toString()))
  // }, []);

  // useEffect(() => {
  //   onToggleFilter(stack.id, selected)
  // }, [selected]);


  function getButtonClassnames() {
    let renderClasses = "btn btn-outline-info btn-sm";
    if (selected) {
      renderClasses = "btn btn-outline-info btn-sm active"
    }

    return renderClasses;
  }

  // const handleOnClick = useCallback(() => {
  //   setSelected(pressed => !pressed)
  // }, [setSelected]);

  function handleOnClick(event) {
    let pressed = !selected;
    const stackClicked = event.target.id;

    if (pressed) {
      setSelected(true);
    } else {
      setSelected(false);
    };
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