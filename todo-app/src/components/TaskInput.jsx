import { useState, useRef, useEffect } from "react";
import { CATEGORIES } from "../constants";
import "./TaskInput.css";

export default function TaskInput({ onAdd }) {
  const [input, setInput] = useState("");
  const [category, setCategory] = useState("Personal");
  const [shake, setShake] = useState(false);
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const handleAdd = () => {
    const success = onAdd(input, category);
    if (success) {
      setInput("");
    } else {
      setShake(true);
      setTimeout(() => setShake(false), 400);
    }
  };

  return (
    <div className="task-input">
      {/* Category Picker */}
      <div className="task-input__categories">
        {CATEGORIES.map((cat) => (
          <button
            key={cat.label}
            className={`category-btn ${category === cat.label ? "category-btn--active" : ""}`}
            style={
              category === cat.label
                ? {
                    "--active-bg": cat.bg,
                    "--active-text": cat.text,
                    "--active-border": cat.border,
                  }
                : {}
            }
            onClick={() => setCategory(cat.label)}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Input Row */}
      <div className="task-input__row">
        <input
          ref={inputRef}
          className={`task-input__field ${shake ? "shake" : ""}`}
          type="text"
          placeholder="What needs to be done?"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleAdd()}
          aria-label="New task"
        />
        <button className="task-input__add-btn" onClick={handleAdd}>
          <i className="ti ti-plus" aria-hidden="true" />
          Add
        </button>
      </div>
    </div>
  );
}
