import React, { useEffect, useState } from "react";
import FilterButton from './FilterButton';

function ProjectFilters({ stacks, selectedStackIds, onToggleFilter }) {
  // const [selectedStackIds, setSelectedStackIds] = useState([]);

  // useEffect(() => {
  //   onFilterChange(selectedStackIds)
  // }, [selectedStackIds])

  // const handleToggleFilter = (stackId, selected) => {
  //   let newStackIds;
  //   if (selected) {
  //     // Concatnenating new values when stack filter btn is pressed
  //     newStackIds = selectedStackIds.concat(stackId);
  //     // Set store unique stackIds
  //     newStackIds = [...new Set(newStackIds)];
  //   } else {
  //     // Copy selectedStackIds array to allow removal w/o mutation
  //     newStackIds = [...selectedStackIds]
  //     // Find 1st index at which id can be found in the array
  //     // Set that index as the start in Array.splice() and set delete count to 1
  //     newStackIds.splice(newStackIds.indexOf(stackId), 1)
  //   }
  //   // setSelectedStackIds(newStackIds);
  //   onFilterChange(stackId, newStackIds);
  // }

  const filterButtons = stacks.map((stack) => (
    <FilterButton
      key={stack.id}
      stack={stack}
      selectedStackIds={selectedStackIds}
      onToggleFilter={onToggleFilter}
    />
  ));

  return (
    <div id="filters-container">
      <p>Filter projects by stacks</p>
      <div className="btn-group-toggle button-wrapper" data-toggle="buttons">
        {filterButtons}
      </div>
    </div>
  )
}
export default ProjectFilters;