import { useState, useCallback } from "react";
import { uid, SAMPLE_TASKS } from "../constants";

export function useTodos() {
  const [tasks, setTasks] = useState(SAMPLE_TASKS);

  const addTask = useCallback((text, category) => {
    if (!text.trim()) return false;
    setTasks((prev) => [
      { id: uid(), text: text.trim(), done: false, category },
      ...prev,
    ]);
    return true;
  }, []);

  const toggleTask = useCallback((id) => {
    setTasks((prev) =>
      prev.map((t) => (t.id === id ? { ...t, done: !t.done } : t))
    );
  }, []);

  const deleteTask = useCallback((id) => {
    setTasks((prev) => prev.filter((t) => t.id !== id));
  }, []);

  const updateTask = useCallback((id, text) => {
    if (!text.trim()) return;
    setTasks((prev) =>
      prev.map((t) => (t.id === id ? { ...t, text: text.trim() } : t))
    );
  }, []);

  const clearCompleted = useCallback(() => {
    setTasks((prev) => prev.filter((t) => !t.done));
  }, []);

  return { tasks, addTask, toggleTask, deleteTask, updateTask, clearCompleted };
}
