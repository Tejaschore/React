import { useState } from "react";
import { useTodos } from "./hooks/useTodos";
import Header from "./components/Header";
import TaskInput from "./components/TaskInput";
import FilterBar from "./components/FilterBar";
import TaskList from "./components/TaskList";
import ProgressBar from "./components/ProgressBar";
import "./App.css";

export default function App() {
  const { tasks, addTask, toggleTask, deleteTask, updateTask, clearCompleted } =
    useTodos();
  const [filter, setFilter] = useState("All");

  const active = tasks.filter((t) => !t.done).length;
  const completed = tasks.filter((t) => t.done).length;

  return (
    <div className="app">
      <h1 className="sr-only">To-Do Application</h1>
      <main className="app__inner">
        <Header active={active} completed={completed} />

        <TaskInput onAdd={addTask} />

        <FilterBar
          filter={filter}
          setFilter={setFilter}
          completedCount={completed}
          onClearCompleted={clearCompleted}
        />

        <TaskList
          tasks={tasks}
          filter={filter}
          onToggle={toggleTask}
          onDelete={deleteTask}
          onUpdate={updateTask}
        />

        <ProgressBar total={tasks.length} completed={completed} />
      </main>
    </div>
  );
}
