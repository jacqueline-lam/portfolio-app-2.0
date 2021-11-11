import { useState, useEffect } from 'react';

function FilterButton({ stack, selectedStacks, toggleFilter }) {
  const [selected, setSelected] = useState(false);
  const myStackId = stack.id;

  useEffect(()=>{
    setSelected(selectedStacks.includes(myStackId.toString()))
  })

  function handleOnClick(event) {
    let pressed = selected;
    const stackClicked = event.target.id;

    if (!pressed) {
      setSelected(true);
    } else {
      setSelected(false);
    };
    toggleFilter(stackClicked, selected);
  };

  return(
    <button
      id={stack.id}
      type="button"
      className='filter-button'
      aria-pressed={selected}
      value={stack}
      onClick={handleOnClick}>
      {stack.name}
    </button>
  )
}
export default FilterButton;