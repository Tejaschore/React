# Todo App

A clean, production-grade React To-Do application with category tagging, filtering, and dark mode support.

## Project Structure

```
todo-app/
├── index.html
├── vite.config.js
├── package.json
└── src/
    ├── main.jsx              # Entry point
    ├── App.jsx               # Root component
    ├── App.css               # App layout styles
    ├── constants.js          # Shared data (categories, filters, sample tasks)
    ├── styles/
    │   └── global.css        # Design tokens, reset, animations
    ├── hooks/
    │   └── useTodos.js       # Custom hook for all task logic
    └── components/
        ├── Header.jsx        # Stats display (active count, done count)
        ├── Header.css
        ├── TaskInput.jsx     # Category picker + text input + add button
        ├── TaskInput.css
        ├── FilterBar.jsx     # All / Active / Completed tabs + Clear done
        ├── FilterBar.css
        ├── TaskList.jsx      # Renders filtered list of TaskItems
        ├── TaskList.css
        ├── TaskItem.jsx      # Single task row (toggle, edit, delete)
        ├── TaskItem.css
        ├── ProgressBar.jsx   # Overall completion bar
        └── ProgressBar.css
```

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

## Features

- **Add tasks** — type and press Enter or click Add
- **Categories** — Work, Personal, Urgent (each with distinct color)
- **Mark complete** — click the circle checkbox on any task
- **Inline edit** — click the pencil icon, press Enter or click away to save
- **Delete** — click the trash icon
- **Filter** — view All, Active, or Completed tasks
- **Clear done** — bulk remove all completed tasks
- **Progress bar** — see overall completion at a glance
- **Dark mode** — automatic via `prefers-color-scheme`

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start dev server at localhost:5173 |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
