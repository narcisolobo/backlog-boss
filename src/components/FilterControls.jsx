function FilterControls({ onShowIncomplete, showIncompleteOnly }) {
  return (
    <div className="d-flex justify-content-end">
      <div className="form-check form-switch mb-3">
        <input
          checked={showIncompleteOnly}
          className="form-check-input"
          type="checkbox"
          role="switch"
          id="toggle-show-incomplete"
          onChange={onShowIncomplete}
        />
        <label className="form-check-label" htmlFor="toggle-show-incomplete">
          {showIncompleteOnly ? 'Show All' : 'Show Incomplete'}
        </label>
      </div>
    </div>
  );
}

export default FilterControls;
