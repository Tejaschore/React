import { FILTERS } from "../constants";
import "./FilterBar.css";

export default function FilterBar({ filter, setFilter, completedCount, onClearCompleted }) {
  return (
    <div className="filter-bar">
      {FILTERS.map((f) => (
        <button
          key={f}
          className={`filter-btn ${filter === f ? "filter-btn--active" : ""}`}
          onClick={() => setFilter(f)}
          aria-pressed={filter === f}
        >
          {f}
        </button>
      ))}

      <span className="filter-bar__spacer" />

      {completedCount > 0 && (
        <button className="filter-bar__clear" onClick={onClearCompleted}>
          <i className="ti ti-trash" aria-hidden="true" />
          Clear done
        </button>
      )}
    </div>
  );
}
