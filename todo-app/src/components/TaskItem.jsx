import { useState } from "react";
import { getCategoryStyle } from "../constants";
import "./TaskItem.css";

export default function TaskItem({ task, onToggle, onDelete, onUpdate }) {
  const [editing, setEditing] = useState(false);
  const [editText, setEditText] = useState(task.text);
  const cat = getCategoryStyle(task.category);

  const saveEdit = () => {
    onUpdate(task.id, editText);
    setEditing(false);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") saveEdit();
    if (e.key === "Escape") {
      setEditText(task.text);
      setEditing(false);
    }
  };

  return (
    <div className={`task-item ${task.done ? "task-item--done" : ""}`}>
      {/* Checkbox */}
      <button
        className={`task-item__check ${task.done ? "task-item__check--done" : ""}`}
        style={{
          "--check-bg": cat.bg,
          "--check-text": cat.text,
          "--check-border": cat.border,
        }}
        onClick={() => onToggle(task.id)}
        aria-label={task.done ? "Mark as active" : "Mark as complete"}
      >
        {task.done && <i className="ti ti-check" aria-hidden="true" />}
      </button>

      {/* Text / Edit */}
      <div className="task-item__text-wrap">
        {editing ? (
          <input
            autoFocus
            className="task-item__edit"
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
            onKeyDown={handleKeyDown}
            onBlur={saveEdit}
          />
        ) : (
          <p className={`task-item__text ${task.done ? "task-item__text--done" : ""}`}>
            {task.text}
          </p>
        )}
      </div>

      {/* Category Badge */}
      <span
        className="task-item__badge"
        style={{ background: cat.bg, color: cat.text }}
      >
        {task.category}
      </span>

      {/* Action Buttons */}
      {!editing && (
        <div className="task-item__actions">
          <button
            className="task-item__action-btn"
            onClick={() => setEditing(true)}
            aria-label="Edit task"
          >
            <i className="ti ti-edit" aria-hidden="true" />
          </button>
          <button
            className="task-item__action-btn"
            onClick={() => onDelete(task.id)}
            aria-label="Delete task"
          >
            <i className="ti ti-trash" aria-hidden="true" />
          </button>
        </div>
      )}
    </div>
  );
}
