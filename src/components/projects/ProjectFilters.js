import React, { useEffect, useState } from "react";
import FilterButton from './FilterButton';

function ProjectFilters({stacks, selectedStacks}) {
  const [selectedStackIds, setSelectedStackIds] = useState([]);

  function handleEditFilter(stackId, selected) {
    let newStackIds;
    if (selected) {
      // Concatnenating new values when stack filter btn is pressed
      newStackIds = selectedStackIds.concat(stackId);
      // Set store unique stackIds
      newStackIds = [...new Set(newStackIds)];
      setSelectedStackIds(newStackIds);
    } else {
      // Copy selectedStackIds array to allow removal w/o mutation
      newStackIds = [...selectedStackIds]
      newStackIds.splice(newStackIds.indexOf(stackId),1)
    }
  }

  const filterButtons = stacks.map((stack) => (
    <FilterButton
      key={stack.id}
      stack={stack}
      selectedStacks={selectedStackIds}
      editFilter={handleEditFilter}
    />
  ));

  return (
    <div id="filters-container">
      <p>Filter projects by stacks</p>
      <div className="button-toggle">
        {filterButtons}
      </div>
    </div>
  )
}
export default ProjectFilters;