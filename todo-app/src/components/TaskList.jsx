import TaskItem from "./TaskItem";
import "./TaskList.css";

export default function TaskList({ tasks, filter, onToggle, onDelete, onUpdate }) {
  const filtered = tasks.filter((t) => {
    if (filter === "Active") return !t.done;
    if (filter === "Completed") return t.done;
    return true;
  });

  return (
    <div className="task-list" role="list" aria-label="Tasks">
      {filtered.length === 0 ? (
        <div className="task-list__empty">
          <i className="ti ti-mood-smile" aria-hidden="true" />
          <p>
            {filter === "Completed"
              ? "No completed tasks yet"
              : "Nothing here — add a task above!"}
          </p>
        </div>
      ) : (
        filtered.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            onToggle={onToggle}
            onDelete={onDelete}
            onUpdate={onUpdate}
          />
        ))
      )}
    </div>
  );
}
