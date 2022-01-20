import FilterButton from './FilterButton';

function ProjectFilters({ stacks, selectedStackIds, onToggleFilter }) {
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